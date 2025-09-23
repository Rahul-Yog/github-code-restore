import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    // Send email notification
    try {
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
        from: "Crown of Caledon <noreply@resend.dev>",
        to: ["admin@example.com"], // Replace with actual admin email
        subject: emailSubject,
        html: emailContent,
      });

      console.log("Email sent successfully:", emailResponse);
    } catch (emailError) {
      console.error("Email sending failed (non-critical):", emailError);
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

serve(handler);