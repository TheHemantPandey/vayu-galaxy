"use client";
import Link from "next/link";

import React, { useState } from "react";
import { aboutCss } from "@/styles/migrated/aboutCss";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Inject FontAwesome font assets */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      {/* Page Scoped CSS Tag Injection */}
      <style dangerouslySetInnerHTML={{ __html: aboutCss }} />

      <div className="about-page-wrapper">
        <nav className="navbar">
          <div className="logo">Vayu Galaxy</div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/spdt1">Project</Link></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </div>
        </nav>

        <div className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/about" onClick={toggleMenu}>About</Link>
          <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          <Link href="/spdt1" onClick={toggleMenu}>Project</Link>
          <a href="#" onClick={toggleMenu}>Blog</a>
          <a href="#" onClick={toggleMenu}>FAQ</a>
        </div>

        <div className="red-section">
          <div className="content">
            <h1>About Us</h1>
          </div>
        </div>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>What is vayu Galaxy?</h2>
              <p>
                Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress.
              </p>
              <p>
                Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress.
              </p>
              <p>
                Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress. Vayu Galaxy is built on innovation and excellence. Our journey is driven by groundbreaking solutions and a passion for progress.
              </p>
            </div>
            <div className="about-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/aboutus.png" alt="About Us" />
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="tech">
          <h1>Project</h1>
        </section>

        <div className="container">
          <Link href="/proto">
            <div className="box" style={{ backgroundImage: "url('/assets/1.png')" }}>
              <div className="overlay">Proto Robot</div>
            </div>
          </Link>
          <Link href="/devi">
            <div className="box" style={{ backgroundImage: "url('/assets/2.png')" }}>
              <div className="overlay">Devi Drone</div>
            </div>
          </Link>
          <a href="#">
            <div className="box" style={{ backgroundImage: "url('/assets/4.png')" }}>
              <div className="overlay">Lord Vishnu</div>
            </div>
          </a>
          <Link href="/spdt1">
            <div className="box" style={{ backgroundImage: "url('/assets/3.png')" }}>
              <div className="overlay">SPD t1</div>
            </div>
          </Link>
        </div>

        <section className="founder-section">
          <div className="founder-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/raushan.png" alt="Founder Image" />
          </div>
          <div className="founder-info">
            <h2>Meet Our Founder</h2>
            <h4>Mr. Raushan Kumar</h4>
            <p>
              Our visionary leader has built Vayu Galaxy with innovation and excellence at its core. 
              Their journey is an inspiration, leading the way in the industry with groundbreaking 
              solutions and a passion for progress.
            </p>
            <p>
              Our visionary leader has built Vayu Galaxy with innovation and excellence at its core. 
            </p>
            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </section>

        <section className="bottom">
          <footer className="footer">
            <div className="footer-grid">
              <div>
                <h3>ABOUT</h3>
                <ul>
                  <li><a href="#">What is Vayu Galaxy</a></li>
                  <li><a href="#">Vayu Galaxy Founder</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3>PROJECTS</h3>
                <ul>
                  <li><Link href="/spdt1">SPD t1</Link></li>
                  <li><Link href="/proto">Proto Robot</Link></li>
                  <li><Link href="/devi">Devi Drone</Link></li>
                  <li><a href="#">Lord Vishnu Statue</a></li>
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
                  <li><a href="#">Working at Vayu Galaxy</a></li>
                </ul>
              </div>
              <div>
                <h3>CONTACT US</h3>
                <ul>
                  <li><a href="#"><b>Email:</b><br />contact@vayugalaxy.com</a></li><br />
                  <li><a href="#"><b>Address:</b><br />Metroplex East Tower, Office No. 147, Laxmi Nagar, New Delhi 110092</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <h3>FOLLOW VAYU GALAXY</h3>
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
          <p>All Right Reserved <b>Vayu Galaxy</b> 2025</p>
        </section>
      </div>
    </>
  );
}
