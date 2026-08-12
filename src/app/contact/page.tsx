"use client";
import Link from "next/link";

import React, { useState } from "react";
import { contactCss } from "@/styles/migrated/contactCss";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you! Your message has been recorded.");
    setFormData({ message: "", name: "", email: "" });
  };

  return (
    <>
      {/* Inject CDN Stylesheets for the template layout */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.0/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css"
      />

      {/* Page Scoped CSS Tag Injection */}
      <style dangerouslySetInnerHTML={{ __html: contactCss }} />

      {/* Add body background override styles for contact page */}
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          background-color: #ffffff !important;
          color: #635c5c !important;
          font-family: "Poppins", sans-serif !important;
        }
      ` }} />

      <div className="contact-page-wrapper">
        <header>
          {/* Header Start */}
          <div className="header-area">
            <div className="main-header header-sticky">
              <div className="container-fluid">
                <div className="row align-items-center">
                  {/* Logo */}
                  <div className="col-xl-2 col-lg-2 col-md-1">
                    <div className="logo">
                      <Link href="/">
                        {/* Fallback to Vayu text if logo image doesn&apos;t exist */}
                        <span style={{ color: "#000", fontWeight: "bold", fontSize: "24px", fontFamily: "Poppins" }}>
                          Vayu Galaxy
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-10">
                    <div className="menu-main d-flex align-items-center justify-content-end">
                      {/* Main-menu (Desktop) */}
                      <div className="main-menu f-right d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><a href="#">Services</a></li>
                            <li>
                              <a href="#">Blog</a>
                              <ul className="submenu">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Blog Details</a></li>
                                <li><a href="#">Element</a></li>
                              </ul>
                            </li>
                            <li><Link href="/contact">Contact</Link></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* Mobile Menu */}
                  <div className="col-12 d-block d-lg-none">
                    <div className="d-flex justify-content-between align-items-center py-3" style={{ borderTop: "1px solid #eee" }}>
                      <span style={{ color: "#000", fontWeight: "bold" }}>MENU</span>
                      <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ color: "#5AAC4E", background: "none", border: "none", fontSize: "22px", cursor: "pointer", outline: "none" }}
                      >
                        {isMenuOpen ? "✕" : "☰"}
                      </button>
                    </div>
                    {isMenuOpen && (
                      <div className="mobile-menu-dropdown pb-3" style={{ background: "#ffffff" }}>
                        <ul className="list-unstyled pl-0" style={{ margin: 0 }}>
                          <li className="py-2" style={{ borderBottom: "1px solid #f5f5f5" }}>
                            <Link href="/" style={{ color: "#333", display: "block" }}>Home</Link>
                          </li>
                          <li className="py-2" style={{ borderBottom: "1px solid #f5f5f5" }}>
                            <Link href="/about" style={{ color: "#333", display: "block" }}>About</Link>
                          </li>
                          <li className="py-2" style={{ borderBottom: "1px solid #f5f5f5" }}>
                            <a href="#" style={{ color: "#333", display: "block" }}>Services</a>
                          </li>
                          <li className="py-2" style={{ borderBottom: "1px solid #f5f5f5" }}>
                            <div className="d-flex justify-content-between align-items-center" onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)} style={{ cursor: "pointer" }}>
                              <span style={{ color: "#333" }}>Blog</span>
                              <span style={{ color: "#666", fontSize: "10px" }}>{isBlogDropdownOpen ? "▲" : "▼"}</span>
                            </div>
                            {isBlogDropdownOpen && (
                              <ul className="list-unstyled pl-3 mt-2">
                                <li className="py-1"><a href="#" style={{ color: "#666" }}>Blog</a></li>
                                <li className="py-1"><a href="#" style={{ color: "#666" }}>Blog Details</a></li>
                                <li className="py-1"><a href="#" style={{ color: "#666" }}>Element</a></li>
                              </ul>
                            )}
                          </li>
                          <li className="py-2">
                            <Link href="/contact" style={{ color: "#333", display: "block" }}>Contact</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Header End */}
        </header>

        <main>
          {/* Slider Area Start */}
          <div className="slider-area slider-area2">
            <div className="slider-active dot-style">
              {/* Slider Single */}
              <div className="single-slider d-flex align-items-center slider-height2">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                      <div className="hero-wrapper">
                        <div className="hero__caption">
                          <h1 data-animation="fadeInUp" data-delay=".3s">Contact</h1>
                          <p data-animation="fadeInUp" data-delay=".6s">We&apos;d Love to Hear from You!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slider Area End */}

          {/* About-2 Area Start */}
          <div className="about-area2 section-padding40">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="about-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/office.webp" alt="Office building concept" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="about-caption mb-50">
                    <div className="section-tittle mb-35"></div>
                    <p className="pera-top mb-40"><strong>We&apos;d Love to Hear from You!</strong></p>
                    <p className="pera-bottom mb-30">
                      At Mission200, we are committed to helping individuals achieve a longer, healthier life through natural and science-backed approaches. Whether you have questions, want to collaborate, or are interested in learning more about our work, we’re here to connect!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Area start */}
          <section className="contact-section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="contact-title">Get in Touch</h2>
                </div>
                <div className="col-lg-8">
                  <form className="form-contact contact_form" onSubmit={handleSubmit} id="contactForm" noValidate>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control w-100"
                            name="message"
                            id="message"
                            cols={30}
                            rows={9}
                            placeholder="Enter Message"
                            value={formData.message}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control valid"
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control valid"
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                    </div>
                  </form>
                </div>
                <div className="col-lg-3 offset-lg-1">
                  <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-home"></i></span>
                    <div className="media-body">
                      <h3>Metroplex East Tower</h3>
                      <p>Office No. 147, Laxmi Nagar, New Delhi 110092</p>
                    </div>
                  </div>
                  <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-email"></i></span>
                    <div className="media-body">
                      <h3>contact@mission200.in</h3>
                      <p>Send us your query!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Area End */}

          <section className="mapsec">
            <center>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.85441531621345!2d77.28409912108377!3d28.639631610284848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd8fb387aa4d%3A0xa23be56489eee410!2sMission200!5e0!3m2!1sen!2sin!4v1740642186066!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps Location"
                  style={{ border: 0, width: "100%", height: "450px" }}
                ></iframe>
              </div>
            </center>
          </section>
        </main>

        <section className="bottom">
          <footer className="footer">
            <div className="footer-grid">
              <div>
                <h3>ABOUT</h3>
                <ul>
                  <li><a href="#">Mission200 is dedicated to revolutionizing the way we think about aging and longevity.</a></li>
                </ul>
              </div>
              <div>
                <h3>PAGES</h3>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                  <li><a href="#">Services</a></li>
                </ul>
              </div>
              <div>
                <h3>NEWS & SOCIAL</h3>
                <ul>
                  <li><a href="#">News and Media</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Linkedin</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Facebook</a></li>
                </ul>
              </div>

              <div>
                <h3>CAREERS</h3>
                <ul>
                  <li><a href="#">Working at Mission 200</a></li>
                </ul>
              </div>
              <div>
                <h3>CONTACT US</h3>
                <ul>
                  <li><a href="#"><strong>Email:</strong><br />contact@mission200.in</a></li><br />
                  <li><a href="#"><strong>Address:</strong><br />Metroplex East Tower, Office No. 147, Laxmi Nagar, New Delhi 110092</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <h3>FOLLOW MISSION 200</h3>
              <div className="social-icons">
                <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="icon"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </footer>
        </section>
        <section className="copyright">
          <p>All Right Reserved | <strong>Mission 200</strong></p>
        </section>
      </div>
    </>
  );
}
