import { NextResponse } from "next/server";
import { sendEmail, DESTINATION_EMAIL } from "@/lib/mailer";
import {
  generateContactEmail,
  generateEarlyRegistrationEmail,
  generateNewsletterEmail,
  generateBookingRequestEmail,
} from "@/lib/email-templates";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      type,
      fullName,
      email,
      phone,
      city,
      organization,
      subject: customSubject,
      interestedIn,
      bookingType,
      preferredDate,
      preferredTime,
      numberOfPeople,
      message,
      ageGroup,
      lookingFor,
      interestLevel,
      referralSource,
      referralOther,
      occupation,
      timeline,
      questions,
    } = body;

    const normalizedType = type === "CONTACT_QUERY" ? "CONTACT_FORM" : type;

    // Validate submission type
    if (
      normalizedType !== "EARLY_REGISTRATION" &&
      normalizedType !== "NEWSLETTER_SUBSCRIPTION" &&
      normalizedType !== "CONTACT_FORM" &&
      normalizedType !== "BOOKING_REQUEST"
    ) {
      return NextResponse.json(
        { error: "Invalid submission type" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 1. CONTACT FORM / QUERY VALIDATION & DISPATCH
    if (normalizedType === "CONTACT_FORM") {
      if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
        return NextResponse.json(
          { error: "Missing required fields (Full Name, Email, and Message are required)." },
          { status: 400 }
        );
      }

      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { error: "Invalid email address format." },
          { status: 400 }
        );
      }

      const { subject, html, text } = generateContactEmail({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone?.trim(),
        organization: organization?.trim(),
        subject: customSubject?.trim(),
        message: message.trim(),
      });

      await sendEmail({
        to: DESTINATION_EMAIL,
        fromName: fullName.trim(),
        replyTo: email.trim(),
        subject,
        text,
        html,
      });

      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. EARLY REGISTRATION VALIDATION & DISPATCH
    if (normalizedType === "EARLY_REGISTRATION") {
      if (!fullName?.trim() || !email?.trim()) {
        return NextResponse.json(
          { error: "Missing required fields (Full Name and Email are required)." },
          { status: 400 }
        );
      }

      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { error: "Invalid email address format." },
          { status: 400 }
        );
      }

      const { subject, html, text } = generateEarlyRegistrationEmail({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone?.trim(),
        city: city?.trim(),
        ageGroup,
        interestedIn,
        lookingFor,
        interestLevel,
        referralSource,
        referralOther: referralOther?.trim(),
        occupation: occupation?.trim(),
        timeline,
        questions: questions?.trim(),
        message: message?.trim(),
      });

      await sendEmail({
        to: DESTINATION_EMAIL,
        fromName: fullName.trim(),
        replyTo: email.trim(),
        subject,
        text,
        html,
      });

      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 3. NEWSLETTER SUBSCRIPTION VALIDATION & DISPATCH
    if (normalizedType === "NEWSLETTER_SUBSCRIPTION") {
      if (!email?.trim()) {
        return NextResponse.json(
          { error: "Missing email address." },
          { status: 400 }
        );
      }

      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { error: "Invalid email address format." },
          { status: 400 }
        );
      }

      const { subject, html, text } = generateNewsletterEmail({
        email: email.trim(),
      });

      await sendEmail({
        to: DESTINATION_EMAIL,
        fromName: "Vayu Galaxy Newsletter",
        replyTo: email.trim(),
        subject,
        text,
        html,
      });

      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 4. BOOKING REQUEST VALIDATION & DISPATCH
    if (normalizedType === "BOOKING_REQUEST") {
      if (
        !fullName?.trim() ||
        !email?.trim() ||
        !phone?.trim() ||
        !city?.trim() ||
        !bookingType?.trim() ||
        !preferredDate?.trim()
      ) {
        return NextResponse.json(
          { error: "Missing required booking fields." },
          { status: 400 }
        );
      }

      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { error: "Invalid email address format." },
          { status: 400 }
        );
      }

      const { subject, html, text } = generateBookingRequestEmail({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        city: city.trim(),
        bookingType: bookingType.trim(),
        preferredDate: preferredDate.trim(),
        preferredTime: preferredTime?.trim(),
        numberOfPeople: numberOfPeople?.trim(),
        message: message?.trim(),
      });

      await sendEmail({
        to: DESTINATION_EMAIL,
        fromName: fullName.trim(),
        replyTo: email.trim(),
        subject,
        text,
        html,
      });

      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json(
      { error: "Invalid request payload" },
      { status: 400 }
    );
  } catch (error) {
    const err = error as Error;
    console.error("Backend form processing error:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
