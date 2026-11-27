<div align="center">

# 🌌 Vayu Galaxy

**Future Living. Technology. Innovation.**

A modern, interactive web platform for **Vayu Galaxy** — showcasing next-generation urban ecosystems, autonomous UAVs (**Devi Drone**), high-speed robotics (**Proto Robot**), and atmospheric solar defense concepts (**SPD T1**).

[![Live Website](https://img.shields.io/badge/Live-vayugalaxy.com-DFCFB7?style=for-the-badge&logo=vercel&logoColor=black)](https://vayugalaxy.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)

</div>

---

## ✨ Key Features

- **Immersive 3D & Motion Experience**: Built with **Three.js / React Three Fiber**, **GSAP**, **Framer Motion**, and **Lenis** smooth scrolling with reduced-motion support (`useReducedMotion`).
- **Product & Research Showcases**: Dedicated interactive pages for **Vayu Galaxy** (`/`), **Devi Drone** (`/devi`), **Proto Robot** (`/proto`), and **SPD T1** (`/spdt1`).
- **Full-Stack Forms & Transactional Emails**:
  - **Contact, Early Access, Booking & Newsletter** (`/api/register`) with server-side validation and dark-themed HTML email templates via **Nodemailer**.
  - **Careers Portal & Application Pipeline** (`/careers`, `/api/careers`) supporting job filtering, honeypot spam protection, PDF/DOCX/DOC resume uploads (up to 3 MB), and automated candidate confirmation emails.
- **SEO & Analytics Ready**: Centralized metadata, Open Graph, Twitter cards, JSON-LD structured data (`Organization`, `WebSite`), dynamic `sitemap.ts` & `robots.ts`, plus optional **Google Analytics 4** and **Microsoft Clarity** integration.
- **Editorial Blog & Legal Pages**: Dynamic blog routes (`/blog/[slug]`) and complete legal compliance pages (Privacy Policy, Terms & Conditions, Cookie Policy, Disclaimer, Refund Policy).

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, React Compiler), React 19, TypeScript |
| **Styling** | Tailwind CSS v4, Custom CSS Design System (`Space Grotesk`) |
| **3D & Animation** | Three.js, `@react-three/fiber`, `@react-three/drei`, GSAP, Framer Motion, Lenis |
| **Backend & Email** | Next.js Route Handlers, Nodemailer (SMTP) |
| **Analytics & SEO** | Google Analytics 4 (GA4), Microsoft Clarity, JSON-LD Schema, Dynamic Sitemap |

---

## 📁 Project Structure

```text
src/
├── animations/          # GSAP easing, parallax, reveal, and scroll utilities
├── app/                 # Next.js App Router pages, legal routes & API endpoints
│   ├── api/
│   │   ├── careers/     # Job application handler + resume attachment mailer
│   │   └── register/    # Contact, early access, booking & newsletter handler
│   ├── about/           # Company mission, vision & founder overview
│   ├── blog/            # Journal listing and dynamic [slug] articles
│   ├── book-now/        # Early registration & booking flow
│   ├── careers/         # Open roles and application form
│   ├── contact/         # Contact page & inquiry form
│   ├── devi/            # Devi Drone UAV showcase
│   ├── proto/           # Proto Robot showcase
│   └── spdt1/           # SPD T1 atmospheric defense concept
├── components/          # Modular UI, hero, analytics, navigation & layout components
├── data/                # Structured content for projects, blog, careers & navigation
├── hooks/               # Custom hooks (useLenis, useReducedMotion, useScrollProgress)
└── lib/                 # Mailer, HTML email templates, analytics & SEO configuration
```

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/<your-username>/vayu-galaxy.git
cd vayu-galaxy
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Required for Contact, Booking, Newsletter, and Careers email notifications
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your-smtp-user@example.com
SMTP_PASS=your-smtp-password

# Optional: Override recipient inbox (defaults to SMTP_USER if omitted)
DESTINATION_EMAIL=inbox@example.com

# Optional: Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxxx
```

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the production bundle (`next build --webpack`) |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint across the codebase |

---

## 👤 Author

**Hemant Pandey**

---

<div align="center">
  <sub>Built with Next.js, TypeScript, Three.js, and GSAP.</sub>
</div>
