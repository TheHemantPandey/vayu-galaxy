import { NextResponse } from "next/server";
import { sendEmail, DESTINATION_EMAIL } from "@/lib/mailer";
import {
  generateJobApplicationEmail,
  generateCandidateConfirmationEmail,
} from "@/lib/email-templates";
import { jobOpenings } from "@/data/careers";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // 1. Honeypot Spam Protection
    const honeypot = formData.get("honeypot") as string;
    if (honeypot && honeypot.trim() !== "") {
      // Quietly succeed to drop spam bots
      return NextResponse.json(
        { success: true, message: "Application submitted successfully." },
        { status: 200 }
      );
    }

    // 2. Extract Fields
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const jobSlug = formData.get("jobSlug") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const resume = formData.get("resume") as File;

    // Optional Fields
    const linkedinUrl = (formData.get("linkedinUrl") as string) || "";
    const githubUrl = (formData.get("githubUrl") as string) || "";
    const portfolioUrl = (formData.get("portfolioUrl") as string) || "";
    const currentLocation = (formData.get("currentLocation") as string) || "";
    const experience = (formData.get("experience") as string) || "";

    // 3. Required Fields Server Validation
    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !jobSlug?.trim() ||
      !coverLetter?.trim() ||
      !resume
    ) {
      return NextResponse.json(
        { error: "Missing required fields (Full Name, Email, Phone, Cover Letter, and Resume are required)." },
        { status: 400 }
      );
    }

    // 4. Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // 5. URL Format Validations
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/i;
    if (linkedinUrl && !urlRegex.test(linkedinUrl.trim())) {
      return NextResponse.json(
        { error: "Invalid LinkedIn URL format." },
        { status: 400 }
      );
    }
    if (githubUrl && !urlRegex.test(githubUrl.trim())) {
      return NextResponse.json(
        { error: "Invalid GitHub URL format." },
        { status: 400 }
      );
    }
    if (portfolioUrl && !urlRegex.test(portfolioUrl.trim())) {
      return NextResponse.json(
        { error: "Invalid Portfolio URL format." },
        { status: 400 }
      );
    }

    // 6. Match Job Opening
    const matchedJob = jobOpenings.find(
      (job) => job.slug === jobSlug && job.status === "open"
    );
    if (!matchedJob) {
      return NextResponse.json(
        { error: "The position you are applying for is closed or does not exist." },
        { status: 400 }
      );
    }

    // 7. Resume File Type Validation
    const allowedExtensions = [".pdf", ".docx", ".doc"];
    const allowedMimeTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];
    
    const fileName = resume.name.toLowerCase();
    const hasAllowedExtension = allowedExtensions.some((ext) => fileName.endsWith(ext));
    const hasAllowedMime = allowedMimeTypes.includes(resume.type);

    if (!hasAllowedExtension && !hasAllowedMime) {
      return NextResponse.json(
        { error: "Unsupported resume format. Please upload a PDF or DOCX file." },
        { status: 400 }
      );
    }

    // 8. Resume File Size Validation (Max 3MB)
    const maxSizeBytes = 3 * 1024 * 1024;
    if (resume.size > maxSizeBytes) {
      return NextResponse.json(
        { error: "Resume size exceeds the 3 MB limit." },
        { status: 400 }
      );
    }

    // 9. Convert File stream to buffer in memory
    const arrayBuffer = await resume.arrayBuffer();
    const resumeBuffer = Buffer.from(arrayBuffer);

    // 10. Generate Recruitment Notification Email
    const recruitMail = generateJobApplicationEmail({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      jobTitle: matchedJob.title,
      department: matchedJob.department,
      employmentType: matchedJob.employmentType,
      coverLetter: coverLetter.trim(),
      currentLocation: currentLocation.trim(),
      experience: experience.trim(),
      linkedinUrl: linkedinUrl.trim(),
      githubUrl: githubUrl.trim(),
      portfolioUrl: portfolioUrl.trim(),
    });

    // 11. Send Recruitment Notification Email with Resume Attachment
    await sendEmail({
      to: DESTINATION_EMAIL,
      fromName: fullName.trim(),
      replyTo: email.trim(),
      subject: recruitMail.subject,
      text: recruitMail.text,
      html: recruitMail.html,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
          contentType: resume.type,
        },
      ],
    });

    // 12. Send Candidate Confirmation Email
    try {
      const confirmMail = generateCandidateConfirmationEmail({
        fullName: fullName.trim(),
        jobTitle: matchedJob.title,
      });

      await sendEmail({
        to: email.trim(),
        fromName: "Vayu Galaxy Careers",
        replyTo: DESTINATION_EMAIL,
        subject: confirmMail.subject,
        text: confirmMail.text,
        html: confirmMail.html,
      });
    } catch (confError) {
      // Soft fail candidate confirmation logging so we don't break main flow
      console.error("Candidate confirmation email failed to send:", confError);
    }

    return NextResponse.json(
      { success: true, message: "Application submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    console.error("Careers submission server error:", err);
    return NextResponse.json(
      { error: "We couldn't submit your application. Please try again." },
      { status: 500 }
    );
  }
}
