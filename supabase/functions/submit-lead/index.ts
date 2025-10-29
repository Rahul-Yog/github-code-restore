import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';
import { Resend } from "npm:resend@2.0.0";
import md5 from "npm:md5@2.3.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const MAILCHIMP_API_KEY = Deno.env.get("MAILCHIMP_API_KEY");
const MAILCHIMP_AUDIENCE_ID = Deno.env.get("MAILCHIMP_AUDIENCE_ID");

// Extract datacenter from API key (e.g., us1, us19, etc.)
const getMailchimpDatacenter = () => {
  if (!MAILCHIMP_API_KEY) return null;
  return MAILCHIMP_API_KEY.split('-')[1];
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  interested_in?: string;
  price_range?: string;
  timeline?: string;
  message?: string;
  is_realtor?: boolean;
  newsletter_consent?: boolean;
  privacy_consent?: boolean;
  phone_consent?: boolean;
  form_type?: string;
  source?: string;
  user_agent?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Processing lead submission...");
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const leadData: LeadData = await req.json();
    console.log("Lead data received:", { ...leadData, phone: "***masked***" });

    // Insert lead into database
    const { data, error } = await supabase
      .from('Crown Of Caledon Leads')
      .insert({
        first_name: leadData.first_name,
        last_name: leadData.last_name,
        email: leadData.email,
        phone: leadData.phone,
        interested_in: leadData.interested_in,
        price_range: leadData.price_range,
        timeline: leadData.timeline,
        message: leadData.message,
        is_realtor: leadData.is_realtor || false,
        newsletter_consent: leadData.newsletter_consent || false,
        privacy_consent: leadData.privacy_consent || false,
        phone_consent: leadData.phone_consent || false,
        form_type: leadData.form_type || 'lead_form',
        source: leadData.source || 'website',
        user_agent: leadData.user_agent
      })
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log("Lead saved to database:", data.id);

    // Add to Mailchimp audience
    if (MAILCHIMP_API_KEY && MAILCHIMP_AUDIENCE_ID) {
      console.log("=== MAILCHIMP SYNC START ===");
      console.log("Mailchimp credentials found, attempting sync...");
      console.log("Form type:", leadData.form_type);
      console.log("Source:", leadData.source);
      console.log("Email:", leadData.email);
      try {
        await addToMailchimp(leadData);
        console.log("=== MAILCHIMP SYNC SUCCESS ===");
      } catch (mailchimpError) {
        console.error("=== MAILCHIMP SYNC FAILED ===");
        console.error("Mailchimp sync failed (non-critical):", mailchimpError);
        console.error("Mailchimp error details:", JSON.stringify(mailchimpError, null, 2));
      }
    } else {
      console.log("Mailchimp not configured - missing API key or Audience ID");
    }

    // Send email notification
    try {
      console.log("Starting email sending process...");
      const adminEmail = Deno.env.get('ADMIN_EMAIL') || 'info@crownofcaledon.com';
      console.log("Admin email:", adminEmail);
      
      const emailSubject = `New Lead: ${leadData.first_name} ${leadData.last_name}`;
      const emailContent = `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${leadData.first_name} ${leadData.last_name}</p>
        <p><strong>Email:</strong> ${leadData.email}</p>
        <p><strong>Phone:</strong> ${leadData.phone}</p>
        ${leadData.interested_in ? `<p><strong>Interested In:</strong> ${leadData.interested_in}</p>` : ''}
        ${leadData.price_range ? `<p><strong>Price Range:</strong> ${leadData.price_range}</p>` : ''}
        ${leadData.timeline ? `<p><strong>Timeline:</strong> ${leadData.timeline}</p>` : ''}
        ${leadData.message ? `<p><strong>Message:</strong> ${leadData.message}</p>` : ''}
        <p><strong>Is Realtor:</strong> ${leadData.is_realtor ? 'Yes' : 'No'}</p>
        <p><strong>Newsletter Consent:</strong> ${leadData.newsletter_consent ? 'Yes' : 'No'}</p>
        <p><strong>Privacy Consent:</strong> ${leadData.privacy_consent ? 'Yes' : 'No'}</p>
        <p><strong>Phone Consent:</strong> ${leadData.phone_consent ? 'Yes' : 'No'}</p>
        <p><strong>Form Type:</strong> ${leadData.form_type}</p>
        <p><strong>Source:</strong> ${leadData.source}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `;

      const emailResponse = await resend.emails.send({
        from: "Crown of Caledon <onboarding@resend.dev>",
        to: [adminEmail],
        subject: emailSubject,
        html: emailContent,
      });

      console.log("Email sent successfully:", emailResponse);
    } catch (emailError) {
      console.error("Email sending failed (non-critical):", emailError);
      console.error("Error details:", JSON.stringify(emailError, null, 2));
      // Don't fail the entire request if email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Lead submitted successfully",
        id: data.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in submit-lead function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || "Internal server error" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

async function addToMailchimp(leadData: LeadData) {
  const datacenter = getMailchimpDatacenter();
  if (!datacenter || !MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
    console.log("Mailchimp not configured, skipping sync");
    return;
  }

  console.log("--- Mailchimp Sync Details ---");
  console.log("Datacenter:", datacenter);
  console.log("Audience ID:", MAILCHIMP_AUDIENCE_ID);
  console.log("Lead email:", leadData.email);
  console.log("Form type:", leadData.form_type);
  console.log("Source:", leadData.source);

  // Generate MD5 hash of email for subscriber hash
  const subscriberHash = md5(leadData.email.toLowerCase());
  console.log("Subscriber hash:", subscriberHash);

  const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}`;
  console.log("Mailchimp URL:", url);
  
  // Map price_range to Mailchimp's expected BUDGET values
  const mapPriceRangeToMailchimp = (priceRange?: string): string => {
    if (!priceRange) return "";
    
    // Map form values to Mailchimp's allowed BUDGET values
    const priceMap: { [key: string]: string } = {
      "$500K - $1M": "Below $1M",
      "Below $1M": "Below $1M",
      "$1M - $1.4M": "$1M - $1.4M",
      "$1.4M - $1.6M": "$1.4M - $1.6M",
      "$1.6M - $1.8M": "$1.6M - $1.8M",
      "$1.8 - $2M": "$1.8 - $2M",
      "$2M - 2.3M": "$2M - 2.3M",
      "$2.3M - 2.7M": "$2.3M - 2.7M",
      "Above 2.7M": "Above 2.7M",
      "$2.7M+": "Above 2.7M",
      "Above $2.7M": "Above 2.7M"
    };
    
    return priceMap[priceRange] || priceRange;
  };

  // Match Mailchimp merge tags exactly as configured in audience
  // For sticky form, leave HOMEINT empty as it sends quick inquiry value not in allowed list
  const homeInterest = (leadData.form_type === "stonerose_sticky_form" || 
                        !leadData.interested_in ||
                        leadData.interested_in.includes("Quick Inquiry")) 
                       ? "" 
                       : leadData.interested_in;
  
  const memberData = {
    email_address: leadData.email,
    status_if_new: leadData.newsletter_consent ? "subscribed" : "transactional",
    merge_fields: {
      FNAME: leadData.first_name,
      LNAME: leadData.last_name,
      PHONE: leadData.phone || "",
      HOMEINT: homeInterest,
      REALTOR: leadData.is_realtor ? "Yes" : "No",
      BUDGET: mapPriceRangeToMailchimp(leadData.price_range),
      TIMELINE: leadData.timeline || "",
      NEWSLETTER: leadData.newsletter_consent ? "Yes" : "No",
      FORMSRC: leadData.source || "",
      MESSAGE: leadData.message || "",
    },
  };

  console.log("--- Request Body ---");
  console.log(JSON.stringify(memberData, null, 2));

  // Use PUT method which creates or updates
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
    },
    body: JSON.stringify(memberData),
  });

  console.log("Mailchimp response status:", response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("--- Mailchimp Error Response ---");
    console.error(errorText);
    throw new Error(`Failed to sync to Mailchimp: ${errorText}`);
  }

  const result = await response.json();
  console.log("--- Mailchimp Success Response ---");
  console.log(JSON.stringify(result, null, 2));
  console.log("Member status:", result.status);

  // Add tags for automation triggers and segmentation
  const tags = [];
  
  // Add website identifier based on source - ALL forms get stonerose_website tag
  if (leadData.source === "stonerose_website") {
    tags.push("stonerose");
    tags.push("stonerose_website");
  } else if (leadData.source === "website") {
    tags.push("crown_of_caledon");
  }
  
  // ALWAYS add stonerose_website tag to ALL forms
  if (!tags.includes("stonerose_website")) {
    tags.push("stonerose_website");
  }
  
  // Add form identifier based on form type
  if (leadData.form_type === "stonerose_relocation_guide") {
    tags.push("relocation_guide");
    tags.push("send_guide"); // CRITICAL: Triggers Mailchimp automation to send PDF
    console.log("*** RELOCATION GUIDE FORM - Adding send_guide tag for automation ***");
  } else if (leadData.form_type === "stonerose_contact") {
    tags.push("contact_form");
  } else if (leadData.form_type === "stonerose_sticky_form") {
    tags.push("sticky_form");
    tags.push("floor_plans_request");
  } else if (leadData.form_type === "lead_form") {
    tags.push("main_lead_form");
  } else if (leadData.form_type === "multi_step_form") {
    tags.push("multi_step_form");
  }
  
  console.log("--- Tags to Add ---");
  console.log(JSON.stringify(tags, null, 2));
  
  if (tags.length > 0) {
    const tagsUrl = `https://${datacenter}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}/tags`;
    console.log("Tags URL:", tagsUrl);
    
    const tagsBody = {
      tags: tags.map(name => ({ name, status: "active" }))
    };
    console.log("--- Tags Request Body ---");
    console.log(JSON.stringify(tagsBody, null, 2));
    
    const tagsResponse = await fetch(tagsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
      },
      body: JSON.stringify(tagsBody),
    });
    
    console.log("Tags response status:", tagsResponse.status);
    
    if (tagsResponse.ok) {
      const tagsResult = await tagsResponse.json();
      console.log("--- Tags Success Response ---");
      console.log(JSON.stringify(tagsResult, null, 2));
      console.log("Successfully added tags:", tags);
    } else {
      const tagsError = await tagsResponse.text();
      console.error("--- Tags Error Response ---");
      console.error(tagsError);
    }
  }
}

serve(handler);