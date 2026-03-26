// SendGrid integration
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key from environment
function getSendGridClient() {
  const apiKey = process.env.SENDGRID_API_KEY;

  if (!apiKey) {
    throw new Error('SENDGRID_API_KEY environment variable is not set');
  }

  sgMail.setApiKey(apiKey);
  return { client: sgMail };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatBudget(budget: string): string {
  const map: Record<string, string> = {
    'under-1000': 'Under $1,000',
    '1000-1500': '$1,000 – $1,500',
    '1500-2000': '$1,500 – $2,000',
    '2000-plus': '$2,000+',
  };
  return map[budget] ?? budget;
}

function buildEmailHtml(params: {
  name: string;
  email: string;
  company?: string | null;
  budget: string;
  message: string;
  submittedAt: string;
}): string {
  const { name, email, company, budget, message, submittedAt } = params;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = company ? escapeHtml(company) : '—';
  const safeBudget = escapeHtml(formatBudget(budget));
  const safeMessage = escapeHtml(message);

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding: 12px 16px; border-bottom: 1px solid #1e2a3a; width: 130px; vertical-align: top;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b;">${label}</span>
      </td>
      <td style="padding: 12px 16px; border-bottom: 1px solid #1e2a3a; vertical-align: top;">
        <span style="font-size: 15px; color: #e2e8f0; white-space: pre-wrap;">${value}</span>
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Lead — Amped Web Studios</title>
</head>
<body style="margin: 0; padding: 0; background-color: #060d16; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #060d16; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0a1628 0%, #0f2040 100%); border-radius: 12px 12px 0 0; border: 1px solid #1e2a3a; border-bottom: none; padding: 32px 32px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="display: inline-block; background: #0070f3; border-radius: 6px; padding: 2px 10px; margin-bottom: 16px;">
                      <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #ffffff;">New Lead</span>
                    </div>
                    <h1 style="margin: 0 0 6px; font-size: 24px; font-weight: 700; color: #f8fafc; line-height: 1.2;">
                      Amped Web Studios
                    </h1>
                    <p style="margin: 0; font-size: 14px; color: #64748b;">
                      New contact form submission
                    </p>
                  </td>
                  <td align="right" style="vertical-align: top; padding-left: 16px;">
                    <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #0070f3, #00b4ff); display: flex; align-items: center; justify-content: center;">
                      <span style="font-size: 22px; line-height: 1;">&#9889;</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Alert bar -->
          <tr>
            <td style="background: linear-gradient(90deg, #0070f3 0%, #00b4ff 100%); padding: 10px 32px;">
              <p style="margin: 0; font-size: 13px; font-weight: 600; color: #ffffff;">
                Someone just filled out your contact form — review and reply within 24 hours.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: #0a1628; border: 1px solid #1e2a3a; border-top: none; border-bottom: none; padding: 32px 32px 8px;">
              <h2 style="margin: 0 0 20px; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #0070f3;">
                Submission Details
              </h2>
            </td>
          </tr>
          <tr>
            <td style="background-color: #0a1628; border: 1px solid #1e2a3a; border-top: none; border-bottom: none; padding: 0 32px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #1e2a3a; border-radius: 8px; overflow: hidden; border-collapse: collapse;">
                ${row('Name', safeName)}
                ${row('Email', safeEmail)}
                ${row('Company', safeCompany)}
                ${row('Budget', safeBudget)}
                ${row('Message', safeMessage)}
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background-color: #0a1628; border: 1px solid #1e2a3a; border-top: none; border-bottom: none; padding: 8px 32px 32px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius: 8px; background: #0070f3;">
                    <a href="mailto:${safeEmail}?subject=Re: Your project inquiry&body=Hi ${encodeURIComponent(name)},%0A%0AThank you for reaching out to Amped Web Studios!"
                       style="display: inline-block; padding: 12px 24px; font-size: 14px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 8px;">
                      Reply to ${safeName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #060d16; border: 1px solid #1e2a3a; border-top: none; border-radius: 0 0 12px 12px; padding: 20px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 12px; color: #334155;">
                      Submitted ${submittedAt} &bull;
                      <a href="https://ampedwebstudios.com" style="color: #0070f3; text-decoration: none;">ampedwebstudios.com</a>
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin: 0; font-size: 12px; color: #334155;">Amped Web Studios</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendContactNotification(params: {
  name: string;
  email: string;
  company?: string | null;
  budget: string;
  message: string;
}): Promise<void> {
  const recipientEmail = process.env.NOTIFICATION_EMAIL;
  if (!recipientEmail) {
    throw new Error('NOTIFICATION_EMAIL environment variable is not set');
  }

  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  if (!fromEmail) {
    throw new Error('SENDGRID_FROM_EMAIL environment variable is not set');
  }

  const { client } = getSendGridClient();

  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  const html = buildEmailHtml({ ...params, submittedAt });

  const msg = {
    to: recipientEmail,
    from: fromEmail,
    subject: `New Lead: ${params.name} — ${formatBudget(params.budget)}`,
    html,
    text: [
      `New contact form submission — Amped Web Studios`,
      ``,
      `Name: ${params.name}`,
      `Email: ${params.email}`,
      `Company: ${params.company || '—'}`,
      `Budget: ${formatBudget(params.budget)}`,
      `Submitted: ${submittedAt}`,
      ``,
      `Message:`,
      params.message,
    ].join('\n'),
  };

  await client.send(msg);
}
