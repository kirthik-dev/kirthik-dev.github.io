
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'npm:@supabase/supabase-js@2';
import { Resend } from "npm:resend@2.0.0";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
// IMPORTANT: Replace this with the email address you want to receive contact form submissions.
const TO_EMAIL = "kirthi.mech@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev"; // This must be a verified domain on Resend.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    const { name, email, message } = await req.json();

    // 1. Save contact to database as a backup
    const { error: dbError } = await supabaseClient.from("contacts").insert([{ name, email, message }]);

    if (dbError) {
      console.error("Database error:", dbError);
      // We can choose to continue and still try to send the email, or return an error.
      // For now, we'll log the error and proceed.
    }

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set in environment variables.");
    }
    const resend = new Resend(RESEND_API_KEY);

    // 2. Send email notification to you
    const { data, error: emailError } = await resend.emails.send({
      from: `Website Contact Form <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `New Message from ${name}`,
      html: `
        <p>You received a new message from your website contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (emailError) {
      console.error("Resend error:", emailError);
      return new Response(JSON.stringify({ error: "Failed to send message via email." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Message sent successfully" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Handler error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
