import nodemailer from "nodemailer";

export const DESTINATION_EMAIL = "docvayugalaxy@gmail.com";

interface SendMailOptions {
  to?: string;
  fromName?: string;
  replyTo?: string;
  subject: string;
  text: string;
  html?: string;
  attachments?: {
    filename: string;
    content: Buffer;
    contentType?: string;
  }[];
}

/**
 * Centralized mailer utility for Vayu Galaxy forms.
 * All notification emails are dispatched to docvayugalaxy@gmail.com.
 */
export async function sendEmail({
  to = DESTINATION_EMAIL,
  fromName,
  replyTo,
  subject,
  text,
  html,
  attachments,
}: SendMailOptions) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    throw new Error(
      "SMTP Configuration missing in environment variables. Please configure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS."
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort, 10),
    secure: smtpPort === "465", // true for port 465, false for 587/others
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const senderName = fromName ? `"${fromName.replace(/"/g, "")}"` : '"Vayu Galaxy"';

  const mailOptions: {
    from: string;
    to: string;
    replyTo: string;
    subject: string;
    text: string;
    html?: string;
    attachments?: {
      filename: string;
      content: Buffer;
      contentType?: string;
    }[];
  } = {
    from: `${senderName} <${smtpUser}>`,
    to: to || DESTINATION_EMAIL,
    replyTo: replyTo || smtpUser,
    subject,
    text,
  };

  if (html) {
    mailOptions.html = html;
  }

  if (attachments) {
    mailOptions.attachments = attachments;
  }

  return await transporter.sendMail(mailOptions);
}
