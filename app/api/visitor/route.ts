import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, type } = body;

    // Get visitor metadata
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';
    const referer = req.headers.get('referer') || 'direct';
    const now = new Date().toISOString();

    // Try to save to Supabase if configured
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      try {
        const { createClient } = await import('@supabase/supabase-js');
        const supabaseAdmin = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.SUPABASE_SERVICE_ROLE_KEY
        );
        await supabaseAdmin.from('visitors').insert({
          created_at: now,
          ip,
          user_agent: userAgent,
          page: referer,
          referrer: referer,
          type: type || 'page_view',
          name: name || null,
          email: email || null,
          message: message || null,
        });
      } catch (dbError) {
        console.error('Supabase error:', dbError);
        // Non-fatal — continue to send email
      }
    }

    // Send email notification via Resend
    if (resend) {
      const isContact = type === 'contact';

      const emailSubject = isContact
        ? `💌 New message from ${name} — Portfolio Contact`
        : `👀 Someone visited your portfolio`;

      const emailHtml = isContact
        ? `
        <div style="font-family: system-ui, sans-serif; max-width: 500px; margin: 0 auto;">
          <div style="background: #0A0F1E; padding: 24px; border-radius: 12px; color: #F3F4F6;">
            <h2 style="color: #F59E0B; margin-top: 0;">New Portfolio Message 💌</h2>
            <p><strong style="color: #F59E0B;">From:</strong> ${name}</p>
            <p><strong style="color: #F59E0B;">Email:</strong> <a href="mailto:${email}" style="color: #3B82F6;">${email}</a></p>
            <div style="background: #111827; padding: 16px; border-radius: 8px; margin-top: 12px; border-left: 3px solid #F59E0B;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #9CA3AF; font-size: 12px; margin-top: 16px;">Sent from your portfolio contact form · ${now}</p>
          </div>
        </div>
      `
        : `
        <div style="font-family: system-ui, sans-serif; max-width: 500px; margin: 0 auto;">
          <div style="background: #0A0F1E; padding: 24px; border-radius: 12px; color: #F3F4F6;">
            <h2 style="color: #F59E0B; margin-top: 0;">Portfolio Visitor 👀</h2>
            <p><strong style="color: #F59E0B;">Time:</strong> ${new Date(now).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} (PT)</p>
            <p><strong style="color: #F59E0B;">IP:</strong> ${ip}</p>
            <p><strong style="color: #F59E0B;">Referrer:</strong> ${referer}</p>
            <p><strong style="color: #F59E0B;">User Agent:</strong> <span style="font-size: 12px; color: #9CA3AF;">${userAgent.substring(0, 80)}</span></p>
            <p style="color: #9CA3AF; font-size: 12px; margin-top: 16px;">om-portfolio · visitor tracker</p>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: 'omprajapati2110@gmail.com',
        subject: emailSubject,
        html: emailHtml,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Visitor API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Page view tracker (GET — fired by VisitorTracker component)
export async function GET(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const userAgent = req.headers.get('user-agent') || 'unknown';
  const referer = req.headers.get('referer') || 'direct';
  const now = new Date().toISOString();

  // Save to Supabase
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      );
      await supabaseAdmin.from('visitors').insert({
        created_at: now,
        ip,
        user_agent: userAgent,
        page: referer,
        referrer: referer,
        type: 'page_view',
      });
    } catch (e) {
      console.error('DB error:', e);
    }
  }

  // Send email (rate-limit: only send if Resend available)
  if (resend) {
    try {
      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: 'omprajapati2110@gmail.com',
        subject: '👀 Someone visited your portfolio',
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 500px;">
            <div style="background: #0A0F1E; padding: 24px; border-radius: 12px; color: #F3F4F6;">
              <h2 style="color: #F59E0B; margin-top: 0;">Portfolio Visitor 👀</h2>
              <p><strong style="color: #F59E0B;">Time:</strong> ${new Date(now).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} (PT)</p>
              <p><strong style="color: #F59E0B;">IP:</strong> ${ip}</p>
              <p><strong style="color: #F59E0B;">Referrer:</strong> ${referer}</p>
            </div>
          </div>
        `,
      });
    } catch (e) {
      console.error('Email error:', e);
    }
  }

  return NextResponse.json({ tracked: true });
}
