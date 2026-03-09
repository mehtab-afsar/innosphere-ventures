import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  getSupabase,
  isSupabaseConfigured,
  type FormType,
  type JoinFormData,
  type MailingListData,
} from "@/lib/supabase";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface RequestBody {
  type: FormType;
  data: JoinFormData | MailingListData;
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { type, data } = body;

    // Always log the submission server-side
    console.log(`[Form submission] type=${type}`, JSON.stringify(data));

    const supabaseReady = isSupabaseConfigured();
    const supabase = supabaseReady ? getSupabase() : null;

    switch (type) {
      case "join": {
        const joinData = data as JoinFormData;

        // Try Supabase — non-blocking, Resend is the real safety net
        if (supabase) {
          const { error } = await supabase.from("join_submissions").insert({
            name: joinData.name,
            email: joinData.email,
            organization: joinData.organization || null,
            message: joinData.message || null,
          });
          if (error) console.error("[Supabase error]", error);
        }

        // Send emails via Resend regardless of Supabase status
        if (resend) {
          const firstName = joinData.name?.split(" ")[0] ?? "there";
          await Promise.allSettled([
            // 1. Confirmation to the submitter
            resend.emails.send({
              from: "InnoSphere Ventures <noreply@innosphere.ventures>",
              to: joinData.email,
              subject: "We've received your interest — InnoSphere Ventures",
              html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#ffffff;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
  <tr><td align="center" style="padding:48px 24px;">
    <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

      <!-- Header -->
      <tr><td style="padding-bottom:32px;border-bottom:1px solid #f3f4f6;">
        <img src="https://innosphere.ventures/assets/images/branding/InnoSphere%20Website%20VISUAL%20IDENTITY.png" alt="InnoSphere Ventures" height="40" style="display:block;height:40px;width:auto;max-width:200px;" />
      </td></tr>

      <!-- Greeting -->
      <tr><td style="padding:40px 0 0;">
        <h1 style="margin:0 0 8px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:32px;font-weight:300;letter-spacing:-0.02em;color:#0a1128;line-height:1.15;">
          We've received<br/>your interest, ${firstName}.
        </h1>
      </td></tr>

      <!-- Body -->
      <tr><td style="padding:24px 0 0;">
        <p style="margin:0 0 20px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;font-weight:300;color:#6b7280;line-height:1.75;">
          Thank you for reaching out to join the <strong style="color:#0a1128;font-weight:500;">InnoSphere LP Collective</strong>. We review every expression of interest personally — you're not going into a queue, you're starting a real conversation.
        </p>
        <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;font-weight:300;color:#6b7280;line-height:1.75;">
          One of our team members will be in touch within <strong style="color:#0a1128;font-weight:500;">48 hours</strong> to schedule a call and walk you through our thesis, portfolio, and how LP participation works.
        </p>
      </td></tr>

      <!-- Divider block -->
      <tr><td style="padding:36px 0;">
        <div style="border-left:3px solid #ff6b5a;padding:16px 20px;background:#fafafa;">
          <p style="margin:0 0 10px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#ff6b5a;">What We're Building</p>
          <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:300;color:#4b5563;line-height:1.7;">
            InnoSphere backs India's edge founders — scientists, engineers, and operators building hard tech that the world's next industrial wave depends on. We target <strong style="color:#0a1128;">3x net DPI</strong> through a 100-company portfolio designed to systematically capture power-law outliers, powered by our Edge Alpha investment operating system.
          </p>
        </div>
      </td></tr>

      <!-- What to expect -->
      <tr><td style="padding-bottom:36px;">
        <p style="margin:0 0 16px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#9ca3af;">What Happens Next</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="28" valign="top" style="padding:0 12px 12px 0;">
              <div style="width:22px;height:22px;background:#0a1128;border-radius:50%;text-align:center;line-height:22px;">
                <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;color:#ffffff;font-weight:500;">1</span>
              </div>
            </td>
            <td valign="top" style="padding-bottom:12px;">
              <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;color:#0a1128;line-height:22px;">Intro call with our team</p>
              <p style="margin:2px 0 0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:300;color:#9ca3af;">We'll walk you through the fund structure, portfolio, and LP terms.</p>
            </td>
          </tr>
          <tr>
            <td width="28" valign="top" style="padding:0 12px 12px 0;">
              <div style="width:22px;height:22px;background:#0a1128;border-radius:50%;text-align:center;line-height:22px;">
                <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;color:#ffffff;font-weight:500;">2</span>
              </div>
            </td>
            <td valign="top" style="padding-bottom:12px;">
              <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;color:#0a1128;line-height:22px;">Access to fund materials</p>
              <p style="margin:2px 0 0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:300;color:#9ca3af;">Pitch deck, portfolio updates, and Edge Alpha research — shared directly.</p>
            </td>
          </tr>
          <tr>
            <td width="28" valign="top" style="padding:0 12px 0 0;">
              <div style="width:22px;height:22px;background:#0a1128;border-radius:50%;text-align:center;line-height:22px;">
                <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;color:#ffffff;font-weight:500;">3</span>
              </div>
            </td>
            <td valign="top">
              <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;color:#0a1128;line-height:22px;">Formalise your participation</p>
              <p style="margin:2px 0 0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:300;color:#9ca3af;">Minimum commitment from $20,000. Simple docs, no hidden fees.</p>
            </td>
          </tr>
        </table>
      </td></tr>

      <!-- Sign-off -->
      <tr><td style="padding:32px 0;border-top:1px solid #f3f4f6;">
        <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:300;color:#9ca3af;line-height:1.7;font-style:italic;">
          "Conviction sparks. Consensus amplifies."
        </p>
        <p style="margin:12px 0 0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;color:#0a1128;">
          Roman &amp; the InnoSphere Team
        </p>
      </td></tr>

      <!-- Footer -->
      <tr><td style="padding-top:24px;border-top:1px solid #f3f4f6;">
        <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;font-weight:300;color:#d1d5db;">
          © ${new Date().getFullYear()} InnoSphere Ventures · <a href="https://innosphere.ventures" style="color:#d1d5db;text-decoration:none;">innosphere.ventures</a>
        </p>
        <p style="margin:6px 0 0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;font-weight:300;color:#d1d5db;">
          You're receiving this because you submitted an interest form on our website.
        </p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`,
            }),
            // 2. Internal lead notification to you
            resend.emails.send({
              from: "InnoSphere Ventures <noreply@innosphere.ventures>",
              to: process.env.NOTIFY_EMAIL ?? "roman@innosphere.ventures",
              cc: ["mo@innosphere.ventures"],
              subject: `🔔 New LP interest: ${joinData.name}${joinData.organization ? ` · ${joinData.organization}` : ""}`,
              html: `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
  <tr><td align="center" style="padding:40px 24px;">
    <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;">

      <tr><td style="padding-bottom:24px;border-bottom:2px solid #ff6b5a;">
        <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#ff6b5a;">New LP Interest · InnoSphere</p>
        <p style="margin:6px 0 0;font-size:11px;color:#9ca3af;">${new Date().toLocaleString("en-GB", { dateStyle: "full", timeStyle: "short", timeZone: "UTC" })} UTC</p>
      </td></tr>

      <tr><td style="padding:28px 0 24px;">
        <h2 style="margin:0 0 4px;font-size:22px;font-weight:400;color:#0a1128;letter-spacing:-0.01em;">${joinData.name}</h2>
        ${joinData.organization ? `<p style="margin:0;font-size:14px;font-weight:300;color:#6b7280;">${joinData.organization}</p>` : ""}
      </td></tr>

      <tr><td style="padding-bottom:28px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f3f4f6;">
          <tr style="background:#f9fafb;">
            <td style="padding:12px 16px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;width:120px;">Email</td>
            <td style="padding:12px 16px;font-size:14px;color:#0a1128;">
              <a href="mailto:${joinData.email}" style="color:#ff6b5a;text-decoration:none;font-weight:500;">${joinData.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 16px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;border-top:1px solid #f3f4f6;">Organisation</td>
            <td style="padding:12px 16px;font-size:14px;color:#0a1128;border-top:1px solid #f3f4f6;">${joinData.organization || "—"}</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:12px 16px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;border-top:1px solid #f3f4f6;vertical-align:top;">Message</td>
            <td style="padding:12px 16px;font-size:14px;color:#0a1128;border-top:1px solid #f3f4f6;line-height:1.6;">${joinData.message || "—"}</td>
          </tr>
        </table>
      </td></tr>

      <tr><td style="padding:20px 0;background:#0a1128;text-align:center;">
        <a href="mailto:${joinData.email}?subject=Re: Your interest in InnoSphere LP Collective&body=Hi ${firstName}," style="display:inline-block;padding:12px 32px;background:#ff6b5a;color:#ffffff;font-size:13px;font-weight:500;text-decoration:none;letter-spacing:0.02em;">Reply to ${firstName} →</a>
      </td></tr>

      <tr><td style="padding:20px 0 0;">
        <p style="margin:0;font-size:11px;color:#d1d5db;">A confirmation email has already been sent to ${joinData.email}.</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`,
            }),
          ]);
        }
        break;
      }

      case "mailing-list": {
        const mailingData = data as MailingListData;
        if (supabase) {
          const { error } = await supabase.from("mailing_list").insert({
            email: mailingData.email,
          });
          if (error) console.error("[Supabase error]", error);
        }
        // Notify yourself — safety net if Supabase is paused
        if (resend) {
          await resend.emails.send({
            from: "InnoSphere Ventures <noreply@innosphere.ventures>",
            to: process.env.NOTIFY_EMAIL ?? "roman@innosphere.ventures",
            cc: ["mo@innosphere.ventures"],
            subject: `New mailing list signup: ${mailingData.email}`,
            html: `<p style="font-family: monospace; font-size: 13px; color: #0a1128;">New signup: <strong>${mailingData.email}</strong><br/><span style="color:#9ca3af;">${new Date().toISOString()}</span></p>`,
          }).catch((err) => console.error("[Resend error]", err));
        }
        break;
      }

      default:
        return NextResponse.json(
          { success: false, error: "Invalid form type" },
          { status: 400 }
        );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    // For network-level failures (DNS, timeouts), still return success to the user
    const isNetworkError = error instanceof Error && (
      error.message.includes("ENOTFOUND") ||
      error.message.includes("ETIMEDOUT") ||
      error.message.includes("fetch failed")
    );
    if (isNetworkError) {
      console.log("[Form] Database unreachable — submission logged above");
      return NextResponse.json({ success: true, message: "Form received" });
    }
    return NextResponse.json(
      { success: false, error: "Failed to submit form" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    const supabase = getSupabase();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    switch (type) {
      case "join": {
        const { data, error } = await supabase
          .from("join_submissions")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        return NextResponse.json(data);
      }

      case "mailing-list": {
        const { data, error } = await supabase
          .from("mailing_list")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        return NextResponse.json(data);
      }

      default: {
        const [join, mailing] = await Promise.all([
          supabase
            .from("join_submissions")
            .select("*")
            .order("created_at", { ascending: false }),
          supabase
            .from("mailing_list")
            .select("*")
            .order("created_at", { ascending: false }),
        ]);
        return NextResponse.json({
          join: join.data || [],
          mailingList: mailing.data || [],
        });
      }
    }
  } catch (error) {
    console.error("Error reading data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to read data" },
      { status: 500 }
    );
  }
}
