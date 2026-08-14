import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      type, 
      fullName, 
      email, 
      phone, 
      city, 
      interestedIn, 
      bookingType, 
      preferredDate, 
      preferredTime, 
      numberOfPeople, 
      message 
    } = body;

    // Validate payload type
    if (type !== "EARLY_REGISTRATION" && type !== "NEWSLETTER_SUBSCRIPTION" && type !== "BOOKING_REQUEST") {
      return NextResponse.json(
        { error: "Invalid submission type" },
        { status: 400 }
      );
    }

    // Server-side validation
    if (type === "EARLY_REGISTRATION") {
      if (!fullName?.trim() || !email?.trim() || !interestedIn?.trim()) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }
    } else if (type === "NEWSLETTER_SUBSCRIPTION") {
      if (!email?.trim()) {
        return NextResponse.json(
          { error: "Missing email address" },
          { status: 400 }
        );
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { error: "Invalid email address" },
          { status: 400 }
        );
      }
    } else if (type === "BOOKING_REQUEST") {
      if (
        !fullName?.trim() || 
        !email?.trim() || 
        !phone?.trim() || 
        !city?.trim() || 
        !bookingType?.trim() || 
        !preferredDate?.trim()
      ) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { error: "Invalid email address" },
          { status: 400 }
        );
      }

      // Server-side date validation (must not be in the past)
      const dateObj = new Date(preferredDate);
      if (isNaN(dateObj.getTime())) {
        return NextResponse.json(
          { error: "Invalid preferred date" },
          { status: 400 }
        );
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (dateObj < today) {
        return NextResponse.json(
          { error: "Preferred date cannot be in the past" },
          { status: 400 }
        );
      }
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

    let mailOptions;
    if (type === "EARLY_REGISTRATION") {
      mailOptions = {
        from: `"${fullName}" <${smtpUser}>`, // Sent from the authorized SMTP user
        to: "info@vayugalaxy.com",
        replyTo: email, // Set reply-to to the registrant's email
        subject: "Early Registration — Vayu Galaxy",
        text: `EARLY REGISTRATION — VAYU GALAXY\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCity / Location: ${city || "N/A"}\nInterested In: ${interestedIn}\n\nSubmission Time: ${timestamp}`,
      };
    } else if (type === "NEWSLETTER_SUBSCRIPTION") {
      mailOptions = {
        from: `"Vayu Galaxy Newsletter" <${smtpUser}>`,
        to: "info@vayugalaxy.com",
        replyTo: email.trim(),
        subject: "Newsletter Subscription — Vayu Galaxy",
        text: `NEW NEWSLETTER SUBSCRIPTION\n\nEmail: ${email.trim()}\n\nSubmission Time: ${timestamp}`,
      };
    } else {
      mailOptions = {
        from: `"${fullName}" <${smtpUser}>`,
        to: "info@vayugalaxy.com",
        replyTo: email.trim(),
        subject: "New Free Booking Request — Vayu Galaxy",
        text: `NEW FREE BOOKING REQUEST\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nCity / Location: ${city}\n\nBooking Type: ${bookingType}\n\nPreferred Date: ${preferredDate}\nPreferred Time: ${preferredTime || "N/A"}\n\nNumber of People: ${numberOfPeople || "1"}\n\nAdditional Requirements:\n${message || "None"}\n\nSubmission Time:\n${timestamp}`,
      };
    }

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
