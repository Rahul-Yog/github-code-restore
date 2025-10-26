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
      EdgeRuntime.waitUntil(
        addToMailchimp(leadData).catch((error) => {
          console.error("Mailchimp sync failed (non-critical):", error);
        })
      );
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

  // Generate MD5 hash of email for subscriber hash
  const subscriberHash = md5(leadData.email.toLowerCase());

  const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}`;
  
  // Map all form fields to Mailchimp merge fields
  // Note: Custom merge fields (INTEREST, BUDGET, TIMELINE, MESSAGE, CONSENT fields) 
  // must be created in your Mailchimp audience settings first
  const memberData = {
    email_address: leadData.email,
    status_if_new: leadData.newsletter_consent ? "subscribed" : "transactional",
    merge_fields: {
      FNAME: leadData.first_name,
      LNAME: leadData.last_name,
      PHONE: leadData.phone || "",
      INTEREST: leadData.interested_in || "",
      BUDGET: leadData.price_range || "",
      TIMELINE: leadData.timeline || "",
      MESSAGE: leadData.message || "",
      NEWSLETTER: leadData.newsletter_consent ? "Yes" : "No",
      PHONECNST: leadData.phone_consent ? "Yes" : "No",
      PRIVACY: leadData.privacy_consent ? "Yes" : "No",
      REALTOR: leadData.is_realtor ? "Yes" : "No",
    },
  };

  console.log("Syncing to Mailchimp:", { 
    email: leadData.email, 
    status: memberData.status_if_new,
    hash: subscriberHash,
    form_type: leadData.form_type
  });

  // Use PUT method which creates or updates
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
    },
    body: JSON.stringify(memberData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Mailchimp error:", errorText);
    throw new Error(`Failed to sync to Mailchimp: ${errorText}`);
  }

  const result = await response.json();
  console.log("Successfully synced to Mailchimp:", result.status);

  // Add tags for automation triggers and segmentation
  const tags = [];
  
  // Add form type tag
  if (leadData.form_type) tags.push(leadData.form_type);
  
  // Add source tag
  if (leadData.source) tags.push(leadData.source);
  
  // Add realtor tag
  if (leadData.is_realtor) tags.push("realtor");
  
  // CRITICAL: Add relocation_guide tag for Mailchimp automation trigger
  // This tag triggers the automation to send the free guide PDF
  if (leadData.form_type === "stonerose_relocation_guide") {
    tags.push("relocation_guide");
    tags.push("send_guide"); // Additional tag for automation
  }
  
  // Add contact form tag
  if (leadData.form_type === "stonerose_contact") {
    tags.push("contact_inquiry");
  }
  
  if (tags.length > 0) {
    const tagsUrl = `https://${datacenter}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}/tags`;
    const tagsResponse = await fetch(tagsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
      },
      body: JSON.stringify({
        tags: tags.map(name => ({ name, status: "active" }))
      }),
    });
    
    if (tagsResponse.ok) {
      console.log("Successfully added tags:", tags);
    } else {
      console.error("Failed to add tags:", await tagsResponse.text());
    }
  }
}

serve(handler);