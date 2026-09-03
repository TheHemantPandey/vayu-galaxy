"use client";

import React, { useState, useRef } from "react";
import { JobOpening } from "@/data/careers";
import { trackLead } from "@/lib/analytics";

interface JobApplicationFormProps {
  job: JobOpening;
}

export default function JobApplicationForm({ job }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentLocation: "",
    experience: "",
    linkedinUrl: "",
    githubUrl: "",
    portfolioUrl: "",
    coverLetter: "",
    honeypot: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setErrors((prev) => ({ ...prev, resume: "" }));

      // Immediate frontend check: Size limit 3MB
      const maxBytes = 3 * 1024 * 1024;
      if (file.size > maxBytes) {
        setErrors((prev) => ({
          ...prev,
          resume: "File size exceeds the 3 MB limit.",
        }));
        setResumeFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      // Immediate frontend check: Type limit (PDF, DOCX)
      const allowedExtensions = [".pdf", ".docx", ".doc"];
      const allowedMimes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ];
      const fileName = file.name.toLowerCase();
      const isValidExt = allowedExtensions.some((ext) => fileName.endsWith(ext));
      const isValidMime = allowedMimes.includes(file.type);

      if (!isValidExt && !isValidMime) {
        setErrors((prev) => ({
          ...prev,
          resume: "Unsupported format. Only PDF and DOCX files are allowed.",
        }));
        setResumeFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      setResumeFile(file);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter details are required.";
    if (!resumeFile) newErrors.resume = "Please upload your resume.";

    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/i;
    if (formData.linkedinUrl && !urlRegex.test(formData.linkedinUrl.trim())) {
      newErrors.linkedinUrl = "Please enter a valid URL.";
    }
    if (formData.githubUrl && !urlRegex.test(formData.githubUrl.trim())) {
      newErrors.githubUrl = "Please enter a valid URL.";
    }
    if (formData.portfolioUrl && !urlRegex.test(formData.portfolioUrl.trim())) {
      newErrors.portfolioUrl = "Please enter a valid URL.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) {
      // Scroll to errors safely
      const errorKeys = Object.keys(errors);
      if (errorKeys.length > 0) {
        const errorEl = document.getElementsByName(errorKeys[0])[0];
        if (errorEl) {
          errorEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append("fullName", formData.fullName);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("jobSlug", job.slug);
      submitData.append("currentLocation", formData.currentLocation);
      submitData.append("experience", formData.experience);
      submitData.append("linkedinUrl", formData.linkedinUrl);
      submitData.append("githubUrl", formData.githubUrl);
      submitData.append("portfolioUrl", formData.portfolioUrl);
      submitData.append("coverLetter", formData.coverLetter);
      submitData.append("honeypot", formData.honeypot);

      if (resumeFile) {
        submitData.append("resume", resumeFile);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: submitData,
      });

      const resBody = await response.json();

      if (response.ok && resBody.success) {
        setIsSubmitted(true);

        // Track successful job application lead (strictly non-PII)
        trackLead("job_application", {
          form_name: "job_application",
          job_slug: job.slug,
          job_title: job.title,
          job_department: job.department,
          employment_type: job.employmentType,
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          currentLocation: "",
          experience: "",
          linkedinUrl: "",
          githubUrl: "",
          portfolioUrl: "",
          coverLetter: "",
          honeypot: "",
        });
        setResumeFile(null);
      } else {
        setSubmitError(resBody.error || "We couldn't submit your application. Please try again.");
      }
    } catch {
      setSubmitError("We couldn't submit your application due to a network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "bg-white/[0.03] border border-white/15 focus:border-[#DFCFB7] focus:ring-1 focus:ring-[#DFCFB7] text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm w-full transition-colors focus:outline-none font-space-grotesk disabled:opacity-50";

  const labelClass =
    "text-[10px] font-mono font-bold uppercase tracking-widest text-[#DFCFB7] block mb-1.5";

  const errorClass = "text-xs text-red-400 font-mono mt-1.5 block uppercase tracking-wide";

  if (isSubmitted) {
    return (
      <div className="border border-cyan-400/20 bg-zinc-950/40 p-8 sm:p-12 rounded-3xl text-center font-space-grotesk relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="relative z-10 space-y-6">
          <span className="inline-flex h-3 w-3 rounded-full bg-cyan-400 animate-pulse mb-2"></span>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white leading-tight">
            Application Received
          </h3>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Thank you for applying to the <strong>{job.title}</strong> role at Vayu Galaxy. A confirmation email has been dispatched to your inbox.
          </p>
          <div className="pt-6">
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="bg-white hover:bg-[#DFCFB7] text-black font-mono font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-colors cursor-pointer select-none"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="border border-white/10 bg-zinc-950/20 p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl font-space-grotesk space-y-6"
      data-clarity-mask="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Honeypot hidden input */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="relative z-10 border-b border-white/5 pb-4 mb-6">
        <span className="text-[10px] font-mono tracking-widest text-[#DFCFB7] font-bold uppercase block mb-1">
          Apply For Position
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
          {job.title}
        </h3>
      </div>

      {submitError && (
        <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-4 text-xs font-mono text-red-400 uppercase tracking-wide">
          ⚠️ {submitError}
        </div>
      )}

      {/* Grid wrapper for Personal Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
        <div className="space-y-1">
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="ARTHUR PENDELTON"
            className={inputClass}
            disabled={isSubmitting}
            required
          />
          {errors.fullName && <span className={errorClass}>{errors.fullName}</span>}
        </div>

        <div className="space-y-1">
          <label className={labelClass}>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ARTHUR@COMPANY.COM"
            className={inputClass}
            disabled={isSubmitting}
            required
          />
          {errors.email && <span className={errorClass}>{errors.email}</span>}
        </div>

        <div className="space-y-1">
          <label className={labelClass}>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
            disabled={isSubmitting}
            required
          />
          {errors.phone && <span className={errorClass}>{errors.phone}</span>}
        </div>

        <div className="space-y-1">
          <label className={labelClass}>Current Location</label>
          <input
            type="text"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleInputChange}
            placeholder="DELHI NCR, INDIA"
            className={inputClass}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-1">
          <label className={labelClass}>Years of Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            placeholder="e.g. 3 YEARS"
            className={inputClass}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-1">
          <label className={labelClass}>LinkedIn URL</label>
          <input
            type="url"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleInputChange}
            placeholder="HTTPS://LINKEDIN.COM/IN/..."
            className={inputClass}
            disabled={isSubmitting}
          />
          {errors.linkedinUrl && <span className={errorClass}>{errors.linkedinUrl}</span>}
        </div>

        <div className="space-y-1">
          <label className={labelClass}>GitHub URL</label>
          <input
            type="url"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleInputChange}
            placeholder="HTTPS://GITHUB.COM/..."
            className={inputClass}
            disabled={isSubmitting}
          />
          {errors.githubUrl && <span className={errorClass}>{errors.githubUrl}</span>}
        </div>

        <div className="space-y-1">
          <label className={labelClass}>Portfolio URL</label>
          <input
            type="url"
            name="portfolioUrl"
            value={formData.portfolioUrl}
            onChange={handleInputChange}
            placeholder="HTTPS://..."
            className={inputClass}
            disabled={isSubmitting}
          />
          {errors.portfolioUrl && <span className={errorClass}>{errors.portfolioUrl}</span>}
        </div>
      </div>

      {/* Resume File Input */}
      <div className="space-y-1 relative z-10">
        <label className={labelClass}>Upload Resume (PDF, DOCX — Max 3MB) *</label>
        <div className="relative flex items-center bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all rounded-xl p-2.5">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.docx,.doc"
            className="hidden"
            id="careers-resume-upload"
            disabled={isSubmitting}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="bg-white/10 hover:bg-white/15 text-white font-mono text-[10px] uppercase tracking-wider py-2.5 px-4 rounded-lg border border-white/5 transition-all select-none cursor-pointer disabled:opacity-50"
            disabled={isSubmitting}
          >
            Choose File
          </button>
          <span className="ml-4 text-xs font-mono text-zinc-400 select-none truncate">
            {resumeFile ? resumeFile.name.toUpperCase() : "NO FILE CHOSEN"}
          </span>
        </div>
        {errors.resume && <span className={errorClass}>{errors.resume}</span>}
      </div>

      {/* Cover Letter Input */}
      <div className="space-y-1 relative z-10">
        <label className={labelClass}>Cover Letter &amp; Professional Statement *</label>
        <textarea
          name="coverLetter"
          rows={6}
          value={formData.coverLetter}
          onChange={handleInputChange}
          placeholder="DESCRIBE YOUR CORE SKILLS, WHY YOU WANT TO JOIN VAYU GALAXY, AND WHAT PROBLEMS YOU WANT TO SOLVE..."
          className={`${inputClass} resize-y`}
          disabled={isSubmitting}
          required
        />
        {errors.coverLetter && <span className={errorClass}>{errors.coverLetter}</span>}
      </div>

      {/* Submit Button */}
      <div className="pt-4 relative z-10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white hover:bg-[#DFCFB7] text-black font-mono font-bold text-xs uppercase tracking-widest py-4 rounded-full shadow-lg transition-colors flex items-center justify-center space-x-2 disabled:bg-white/40 cursor-pointer disabled:cursor-not-allowed select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DFCFB7]"
        >
          {isSubmitting ? (
            <span>PROCESSING APPLICATION...</span>
          ) : (
            <span>SUBMIT APPLICATION</span>
          )}
        </button>
      </div>
    </form>
  );
}
