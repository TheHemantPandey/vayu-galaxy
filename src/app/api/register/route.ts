import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, fullName, email, phone, city, interestedIn } = body;

    // Validate payload type
    if (type !== "EARLY_REGISTRATION") {
      return NextResponse.json(
        { error: "Invalid submission type" },
        { status: 400 }
      );
    }

    // Server-side validation
    if (!fullName?.trim() || !email?.trim() || !interestedIn?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // If SMTP environment variables are missing, fail the request (which shows the user failure UI)
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error(
        "SMTP Configuration missing in environment variables. Please provide SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS."
      );
      return NextResponse.json(
        { error: "Mail system misconfigured. SMTP credentials missing." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: smtpPort === "465", // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const timestamp = new Date().toLocaleString("en-US", { timeZone: "UTC" }) + " UTC";

    const mailOptions = {
      from: `"${fullName}" <${smtpUser}>`, // Sent from the authorized SMTP user
      to: "info@vayugalaxy.com",
      replyTo: email, // Set reply-to to the registrant's email
      subject: "Early Registration — Vayu Galaxy",
      text: `EARLY REGISTRATION — VAYU GALAXY\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCity / Location: ${city || "N/A"}\nInterested In: ${interestedIn}\n\nSubmission Time: ${timestamp}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as Error;
    console.error("Backend registration email error:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
