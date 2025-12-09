import { Resend } from "resend";

const FROM_EMAIL = "InnoSphere Ventures <noreply@innosphereventures.com>";

// Lazy initialization to avoid build-time errors when API key is not set
let resend: Resend | null = null;

function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function sendMailingListWelcome(email: string) {
  const client = getResend();
  if (!client) {
    console.log("RESEND_API_KEY not configured, skipping email");
    return;
  }

  try {
    await client.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Welcome to InnoSphere Ventures",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; border-bottom: 1px solid #f3f4f6;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 300; color: #111827;">
                InnoSphere <span style="font-weight: 500;">Ventures</span>
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; font-size: 28px; font-weight: 300; color: #111827;">
                Welcome to the frontier.
              </h2>

              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #4b5563; font-weight: 300;">
                Thank you for joining our mailing list. You're now part of a community that's shaping India's innovation future.
              </p>

              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #4b5563; font-weight: 300;">
                Here's what you can expect:
              </p>

              <ul style="margin: 0 0 30px; padding-left: 20px; color: #4b5563; font-weight: 300;">
                <li style="margin-bottom: 10px; line-height: 1.6;">First access to our insights and market signals</li>
                <li style="margin-bottom: 10px; line-height: 1.6;">Invitations to exclusive events</li>
                <li style="margin-bottom: 10px; line-height: 1.6;">Stories from our portfolio founders</li>
                <li style="line-height: 1.6;">Updates on India's startup ecosystem</li>
              </ul>

              <table cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td style="background-color: #111827; border-radius: 50px;">
                    <a href="https://innosphereventures.com" style="display: inline-block; padding: 14px 32px; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 400;">
                      Explore Our Thesis
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; font-size: 14px; color: #9ca3af; font-weight: 300;">
                Empowering innovators. Elevating futures.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f9fafb; border-top: 1px solid #f3f4f6;">
              <p style="margin: 0 0 10px; font-size: 12px; color: #9ca3af; text-align: center; font-weight: 300;">
                © 2025 InnoSphere Ventures. All rights reserved.
              </p>
              <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center; font-weight: 300;">
                <a href="https://innosphereventures.com/privacy" style="color: #9ca3af; text-decoration: underline;">Privacy Policy</a>
                &nbsp;•&nbsp;
                <a href="https://innosphereventures.com/terms" style="color: #9ca3af; text-decoration: underline;">Terms of Use</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });
  } catch (error) {
    console.error("Failed to send mailing list welcome email:", error);
  }
}

export async function sendJoinConfirmation(data: {
  name: string;
  email: string;
  memberType: string;
}) {
  const client = getResend();
  if (!client) {
    console.log("RESEND_API_KEY not configured, skipping email");
    return;
  }

  const roleLabels: Record<string, string> = {
    founder: "Founder / Entrepreneur",
    lp: "Limited Partner (LP) / Investor",
    partner: "Potential Partner / Advisor",
  };

  const roleLabel = roleLabels[data.memberType] || data.memberType;

  try {
    await client.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Thank You for Joining InnoSphere Ventures",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; border-bottom: 1px solid #f3f4f6;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 300; color: #111827;">
                InnoSphere <span style="font-weight: 500;">Ventures</span>
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; font-size: 28px; font-weight: 300; color: #111827;">
                Thank you, ${data.name}.
              </h2>

              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #4b5563; font-weight: 300;">
                We've received your application to join the InnoSphere Collective as a <strong style="font-weight: 500;">${roleLabel}</strong>.
              </p>

              <div style="background-color: #f9fafb; border-radius: 12px; padding: 24px; margin: 30px 0;">
                <p style="margin: 0 0 10px; font-size: 14px; color: #6b7280; font-weight: 300;">
                  <strong style="font-weight: 500;">What happens next?</strong>
                </p>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #4b5563; font-weight: 300;">
                  Our team will review your application carefully. If your profile aligns with our community, we'll reach out within <strong style="font-weight: 500;">48 hours</strong> to discuss next steps.
                </p>
              </div>

              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #4b5563; font-weight: 300;">
                In the meantime, learn more about our investment philosophy:
              </p>

              <table cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td style="background-color: #111827; border-radius: 50px;">
                    <a href="https://innosphereventures.com/thesis" style="display: inline-block; padding: 14px 32px; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 400;">
                      Read Our Thesis
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; font-size: 14px; color: #9ca3af; font-weight: 300;">
                We're building India's innovation future, together.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f9fafb; border-top: 1px solid #f3f4f6;">
              <p style="margin: 0 0 10px; font-size: 12px; color: #9ca3af; text-align: center; font-weight: 300;">
                © 2025 InnoSphere Ventures. All rights reserved.
              </p>
              <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center; font-weight: 300;">
                <a href="https://innosphereventures.com/privacy" style="color: #9ca3af; text-decoration: underline;">Privacy Policy</a>
                &nbsp;•&nbsp;
                <a href="https://innosphereventures.com/terms" style="color: #9ca3af; text-decoration: underline;">Terms of Use</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });
  } catch (error) {
    console.error("Failed to send join confirmation email:", error);
  }
}
