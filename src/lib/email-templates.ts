/**
 * VAYU GALAXY — PREMIUM HTML EMAIL SYSTEM
 * Design Language: Dark aesthetic (#050505, #111111, #171717) with Champagne Accent (#DFCFB7)
 * Safe cross-client HTML/CSS for Gmail, Apple Mail, and Outlook.
 */

export function escapeHtml(str: unknown): string {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function formatTimestamp(): string {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });
  return `${dateStr}, ${timeStr} IST`;
}

// Common HTML Email Wrapper Layout
function wrapEmailHtml({
  badge,
  title,
  intro,
  contentHtml,
  timestamp,
}: {
  badge: string;
  title: string;
  intro: string;
  contentHtml: string;
  timestamp: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: Arial, Helvetica, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #F5F5F5;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #050505; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Email Card Container (Max-Width 600px) -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #111111; border: 1px solid #2A2A2A; border-radius: 12px; overflow: hidden; text-align: left;">
          
          <!-- Header Bar -->
          <tr>
            <td style="padding: 28px 32px 20px 32px; background-color: #111111;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 10px; font-weight: bold; letter-spacing: 2px; color: #A1A1AA; text-transform: uppercase; display: block; margin-bottom: 4px;">
                      VAYU GALAXY / SYSTEM NOTIFICATION
                    </span>
                    <span style="font-size: 22px; font-weight: 800; letter-spacing: 3px; color: #F5F5F5; text-transform: uppercase;">
                      VAYU GALAXY
                    </span>
                  </td>
                </tr>
              </table>
              <!-- Accent Line -->
              <div style="height: 2px; background-color: #DFCFB7; margin-top: 18px; width: 100%;"></div>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 10px 32px 32px 32px;">
              
              <!-- Form Badge & Title -->
              <div style="margin-bottom: 24px;">
                <span style="display: inline-block; padding: 4px 10px; background-color: #171717; border: 1px solid #2A2A2A; border-radius: 4px; font-size: 10px; font-weight: bold; letter-spacing: 1.5px; color: #DFCFB7; text-transform: uppercase; margin-bottom: 8px;">
                  ${escapeHtml(badge)}
                </span>
                <h1 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 700; color: #F5F5F5; letter-spacing: 1px; text-transform: uppercase; line-height: 1.3;">
                  ${escapeHtml(title)}
                </h1>
                <p style="margin: 0; font-size: 13px; color: #A1A1AA; line-height: 1.5;">
                  ${escapeHtml(intro)}
                </p>
              </div>

              <!-- Main Dynamic Content -->
              ${contentHtml}

              <!-- Submission Metadata -->
              <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #2A2A2A;">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding-bottom: 6px;">
                      <span style="font-size: 10px; font-weight: bold; letter-spacing: 1.5px; color: #A1A1AA; text-transform: uppercase;">RECEIVED AT</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-size: 13px; color: #DFCFB7; font-weight: 600;">${escapeHtml(timestamp)}</span>
                    </td>
                  </tr>
                </table>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 32px; background-color: #0A0A0A; border-top: 1px solid #2A2A2A; text-align: center;">
              <span style="font-size: 12px; font-weight: bold; letter-spacing: 2px; color: #F5F5F5; text-transform: uppercase; display: block; margin-bottom: 4px;">
                VAYU GALAXY
              </span>
              <span style="font-size: 11px; color: #A1A1AA; display: block; margin-bottom: 8px;">
                Future Living. Technology. Innovation.
              </span>
              <span style="font-size: 10px; color: #666666; display: block;">
                Delhi NCR, India &bull; docvayugalaxy@gmail.com &bull; <a href="https://vayugalaxy.com" style="color: #DFCFB7; text-decoration: none;">vayugalaxy.com</a>
              </span>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Field Section Component Helper
function renderSection(sectionTitle: string, fieldRowsHtml: string): string {
  return `
  <div style="margin-bottom: 24px;">
    <div style="font-size: 11px; font-weight: bold; letter-spacing: 1.5px; color: #DFCFB7; text-transform: uppercase; padding-bottom: 6px; border-bottom: 1px solid #2A2A2A; margin-bottom: 12px;">
      ${escapeHtml(sectionTitle)}
    </div>
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
      ${fieldRowsHtml}
    </table>
  </div>`;
}

// Single Field Row Helper
function renderFieldRow(label: string, value: unknown, isLast = false): string {
  const valStr = value !== null && value !== undefined && String(value).trim() !== "" 
    ? String(value).trim() 
    : "Not provided";
  const isNotProvided = valStr === "Not provided";

  return `
  <tr>
    <td style="padding-bottom: ${isLast ? "0" : "10px"};">
      <span style="font-size: 10px; font-weight: bold; letter-spacing: 1px; color: #A1A1AA; text-transform: uppercase; display: block; margin-bottom: 2px;">
        ${escapeHtml(label)}
      </span>
      <span style="font-size: 14px; color: ${isNotProvided ? "#666666" : "#F5F5F5"}; font-weight: ${isNotProvided ? "normal" : "600"}; line-height: 1.4; word-break: break-word;">
        ${escapeHtml(valStr)}
      </span>
    </td>
  </tr>`;
}

// Dedicated Message Box Helper
function renderMessageBox(title: string, message: unknown): string {
  const msgStr = message !== null && message !== undefined && String(message).trim() !== ""
    ? String(message).trim()
    : "None";

  return `
  <div style="margin-bottom: 24px;">
    <div style="font-size: 11px; font-weight: bold; letter-spacing: 1.5px; color: #DFCFB7; text-transform: uppercase; padding-bottom: 6px; border-bottom: 1px solid #2A2A2A; margin-bottom: 12px;">
      ${escapeHtml(title)}
    </div>
    <div style="background-color: #171717; border: 1px solid #2A2A2A; border-left: 3px solid #DFCFB7; border-radius: 6px; padding: 16px; font-size: 14px; color: #F5F5F5; line-height: 1.6; white-space: pre-wrap; word-break: break-word;">
      ${escapeHtml(msgStr)}
    </div>
  </div>`;
}

// 1. CONTACT FORM EMAIL TEMPLATE
export function generateContactEmail(data: {
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  subject?: string;
  message: string;
}) {
  const timestamp = formatTimestamp();
  const userName = data.fullName?.trim() || "User";
  const userSubject = data.subject?.trim() || "General Inquiry";
  
  const subjectLine = `[VAYU GALAXY] New Contact Inquiry — ${userName} (${userSubject})`;

  const fieldsHtml = `
    ${renderFieldRow("FULL NAME", data.fullName)}
    ${renderFieldRow("EMAIL ADDRESS", data.email)}
    ${renderFieldRow("PHONE NUMBER", data.phone)}
    ${renderFieldRow("ORGANIZATION / COMPANY", data.organization)}
    ${renderFieldRow("SUBJECT / TOPIC", data.subject || "General Inquiry", true)}
  `;

  const contentHtml = `
    ${renderSection("CONTACT INFORMATION", fieldsHtml)}
    ${renderMessageBox("MESSAGE", data.message)}
  `;

  const html = wrapEmailHtml({
    badge: "CONTACT / VAYU GALAXY",
    title: "NEW CONTACT INQUIRY",
    intro: "A new contact query has been submitted through the Vayu Galaxy website.",
    contentHtml,
    timestamp,
  });

  const text = `VAYU GALAXY WEBSITE
NEW CONTACT INQUIRY

--------------------------------
CONTACT INFORMATION
--------------------------------

Full Name: ${data.fullName?.trim() || "N/A"}
Email Address: ${data.email?.trim() || "N/A"}
Phone Number: ${data.phone?.trim() || "Not provided"}
Organization: ${data.organization?.trim() || "Not provided"}
Subject / Topic: ${data.subject?.trim() || "General Inquiry"}

--------------------------------
MESSAGE
--------------------------------

${data.message?.trim() || "None"}

--------------------------------
SUBMISSION DETAILS
--------------------------------

Received At: ${timestamp}

--------------------------------
Vayu Galaxy — Future Living. Technology. Innovation.
docvayugalaxy@gmail.com | vayugalaxy.com`;

  return { subject: subjectLine, html, text };
}

// 2. EARLY REGISTRATION EMAIL TEMPLATE
export function generateEarlyRegistrationEmail(data: {
  fullName: string;
  email: string;
  phone?: string;
  city?: string;
  ageGroup?: string;
  interestedIn?: string | string[];
  lookingFor?: string | string[];
  interestLevel?: string;
  referralSource?: string;
  referralOther?: string;
  occupation?: string;
  timeline?: string;
  questions?: string;
  message?: string;
}) {
  const timestamp = formatTimestamp();
  const userName = data.fullName?.trim() || "Registrant";
  const userCity = data.city?.trim() ? ` — ${data.city.trim()}` : "";
  
  const subjectLine = `[VAYU GALAXY] New Early Registration — ${userName}${userCity}`;

  const personalFields = `
    ${renderFieldRow("FULL NAME", data.fullName)}
    ${renderFieldRow("EMAIL ADDRESS", data.email)}
    ${renderFieldRow("PHONE NUMBER", data.phone)}
    ${renderFieldRow("CITY / LOCATION", data.city)}
    ${renderFieldRow("AGE GROUP", data.ageGroup)}
    ${renderFieldRow("OCCUPATION / PROFESSION", data.occupation, true)}
  `;

  const interestsText = Array.isArray(data.interestedIn)
    ? data.interestedIn.join(", ")
    : data.interestedIn;

  const lookingForText = Array.isArray(data.lookingFor)
    ? data.lookingFor.join(", ")
    : data.lookingFor;

  let referralText = data.referralSource;
  if (data.referralSource === "Other" && data.referralOther) {
    referralText = `Other (${data.referralOther})`;
  }

  const interestFields = `
    ${renderFieldRow("WHAT INTERESTS YOU", interestsText)}
    ${renderFieldRow("WHAT YOU'RE LOOKING FOR", lookingForText)}
    ${renderFieldRow("INTEREST LEVEL", data.interestLevel, true)}
  `;

  const discoveryFields = `
    ${renderFieldRow("HOW THEY HEARD ABOUT VAYU GALAXY", referralText)}
    ${renderFieldRow("EXPECTED TIMELINE", data.timeline, true)}
  `;

  let contentHtml = `
    ${renderSection("PERSONAL INFORMATION", personalFields)}
    ${renderSection("YOUR INTEREST", interestFields)}
    ${renderSection("DISCOVERY & TIMELINE", discoveryFields)}
  `;

  if (data.questions && data.questions.trim() !== "") {
    contentHtml += renderMessageBox("QUESTIONS THEY WOULD LIKE TO KNOW", data.questions);
  }

  if (data.message && data.message.trim() !== "") {
    contentHtml += renderMessageBox("ADDITIONAL MESSAGE", data.message);
  }

  const html = wrapEmailHtml({
    badge: "EARLY ACCESS / VAYU GALAXY",
    title: "NEW VAYU GALAXY EARLY REGISTRATION",
    intro: "A new early registration request has been submitted through the Vayu Galaxy website.",
    contentHtml,
    timestamp,
  });

  const text = `VAYU GALAXY WEBSITE
NEW EARLY REGISTRATION

--------------------------------
PERSONAL INFORMATION
--------------------------------

Full Name: ${data.fullName?.trim() || "N/A"}
Email Address: ${data.email?.trim() || "N/A"}
Phone Number: ${data.phone?.trim() || "Not provided"}
City / Location: ${data.city?.trim() || "Not provided"}
Age Group: ${data.ageGroup?.trim() || "Not provided"}
Occupation: ${data.occupation?.trim() || "Not provided"}

--------------------------------
YOUR INTEREST
--------------------------------

What Interests You: ${interestsText || "Not provided"}
What You're Looking For: ${lookingForText || "Not provided"}
Interest Level: ${data.interestLevel || "Not provided"}

--------------------------------
DISCOVERY & TIMELINE
--------------------------------

How They Heard: ${referralText || "Not provided"}
Expected Timeline: ${data.timeline || "Not provided"}

--------------------------------
QUESTIONS / ADDITIONAL MESSAGE
--------------------------------

Questions:
${data.questions?.trim() || "None"}

Additional Message:
${data.message?.trim() || "None"}

--------------------------------
SUBMISSION DETAILS
--------------------------------

Received At: ${timestamp}

--------------------------------
Vayu Galaxy — Future Living. Technology. Innovation.
docvayugalaxy@gmail.com | vayugalaxy.com`;

  return { subject: subjectLine, html, text };
}

// 3. NEWSLETTER SUBSCRIPTION EMAIL TEMPLATE
export function generateNewsletterEmail(data: { email: string }) {
  const timestamp = formatTimestamp();
  const subscriberEmail = data.email?.trim() || "";
  
  const subjectLine = `[VAYU GALAXY] New Newsletter Subscription — ${subscriberEmail}`;

  const fieldsHtml = `
    ${renderFieldRow("SUBSCRIBER EMAIL ADDRESS", data.email, true)}
  `;

  const contentHtml = `
    ${renderSection("SUBSCRIBER CARD", fieldsHtml)}
  `;

  const html = wrapEmailHtml({
    badge: "NEWSLETTER / VAYU GALAXY",
    title: "NEW NEWSLETTER SUBSCRIPTION",
    intro: "A new subscriber has joined the Vayu Galaxy updates & journal mailing list.",
    contentHtml,
    timestamp,
  });

  const text = `VAYU GALAXY WEBSITE
NEW NEWSLETTER SUBSCRIPTION

--------------------------------
SUBSCRIBER DETAILS
--------------------------------

Email Address: ${subscriberEmail}

--------------------------------
SUBMISSION DETAILS
--------------------------------

Received At: ${timestamp}

--------------------------------
Vayu Galaxy — Future Living. Technology. Innovation.
docvayugalaxy@gmail.com | vayugalaxy.com`;

  return { subject: subjectLine, html, text };
}

// 4. BOOKING REQUEST EMAIL TEMPLATE
export function generateBookingRequestEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  bookingType: string;
  preferredDate: string;
  preferredTime?: string;
  numberOfPeople?: string;
  message?: string;
}) {
  const timestamp = formatTimestamp();
  const userName = data.fullName?.trim() || "Registrant";
  
  const subjectLine = `[VAYU GALAXY] New Booking Request — ${userName}`;

  const fieldsHtml = `
    ${renderFieldRow("FULL NAME", data.fullName)}
    ${renderFieldRow("EMAIL ADDRESS", data.email)}
    ${renderFieldRow("PHONE NUMBER", data.phone)}
    ${renderFieldRow("CITY / LOCATION", data.city)}
    ${renderFieldRow("BOOKING TYPE", data.bookingType)}
    ${renderFieldRow("PREFERRED DATE", data.preferredDate)}
    ${renderFieldRow("PREFERRED TIME", data.preferredTime)}
    ${renderFieldRow("NUMBER OF PEOPLE", data.numberOfPeople, true)}
  `;

  let contentHtml = `
    ${renderSection("BOOKING DETAILS", fieldsHtml)}
  `;

  if (data.message && data.message.trim() !== "") {
    contentHtml += renderMessageBox("ADDITIONAL REQUIREMENTS", data.message);
  }

  const html = wrapEmailHtml({
    badge: "REGISTRATION / VAYU GALAXY",
    title: "NEW BOOKING REQUEST",
    intro: "A new free booking / registration request has been submitted through the Vayu Galaxy website.",
    contentHtml,
    timestamp,
  });

  const text = `VAYU GALAXY WEBSITE
NEW BOOKING REQUEST

--------------------------------
BOOKING DETAILS
--------------------------------

Full Name: ${data.fullName?.trim() || "N/A"}
Email Address: ${data.email?.trim() || "N/A"}
Phone Number: ${data.phone?.trim() || "N/A"}
City / Location: ${data.city?.trim() || "N/A"}
Booking Type: ${data.bookingType?.trim() || "N/A"}
Preferred Date: ${data.preferredDate?.trim() || "N/A"}
Preferred Time: ${data.preferredTime?.trim() || "Not provided"}
Number of People: ${data.numberOfPeople || "1"}

--------------------------------
ADDITIONAL REQUIREMENTS
--------------------------------

${data.message?.trim() || "None"}

--------------------------------
SUBMISSION DETAILS
--------------------------------

Received At: ${timestamp}

--------------------------------
Vayu Galaxy — Future Living. Technology. Innovation.
docvayugalaxy@gmail.com | vayugalaxy.com`;

  return { subject: subjectLine, html, text };
}
