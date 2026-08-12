"use client";
import Link from "next/link";

import React, { useState } from "react";
import { spdt1Css } from "@/styles/migrated/spdt1Css";

export default function Spdt1Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Inject Orbitron and FontAwesome font assets */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
<link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      {/* Page Scoped CSS Tag Injection */}
      <style dangerouslySetInnerHTML={{ __html: spdt1Css }} />

      <div className="spdt1-page-wrapper">
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

        <section className="homesec">
          <div className="red-section">
            <video autoPlay loop muted playsInline className="background-video">
              <source src="/assets/spd2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>About <strong>SPDT t1</strong></h2>
              <p>
                In a world where climate change is accelerating at an unprecedented rate, SPDt1 emerges as a game-changing innovation—a first-of-its-kind atmospheric defense technology designed to protect Earth from excessive solar radiation. By deploying a high-altitude shielding system, SPDt1 aims to regulate the sun’s impact, mitigate the effects of global warming, and create a future where extreme heatwaves and environmental destruction are no longer inevitable.
              </p>
              <p>
                This bold and disruptive concept is the brainchild of Mr. Raushan Kumar, a visionary entrepreneur and technology leader who believes in leveraging science to reshape the future. Designed and developed in India, SPDt1 is not just an innovation—it’s a global movement towards sustainability, planetary protection, and cutting-edge aerospace engineering.
              </p>
              <p>
                For centuries, humanity has been at the mercy of the sun’s power. But what if we could control how much solar radiation reaches our planet—without affecting natural ecosystems? SPDt1 is designed to do exactly that.
              </p>
            </div>
            <div className="about-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/spdt1.png" alt="SPD t1 solar defense technology concept" />
            </div>
          </div>
        </section>

        <section className="map">
          <div className="map-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/spdtLabel.png" alt="SPD t1 functional layout" />
          </div>
        </section>

        <section className="video-section">
          <div className="container">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/OUFSoPsG374?si=s8Q4ISbooiFEYq25"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="tech">
          <h1>Docking</h1>
        </section>

        <div className="red-section">
          <video autoPlay loop muted playsInline className="background-video">
            <source src="/assets/spd1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>How SPDt1 Works?</h2>
              <p>
                SPDt1 is based on next-generation aerospace technology, using advanced materials that can absorb, deflect, or regulate solar radiation before it reaches the Earth&apos;s surface. Unlike conventional climate solutions that focus on adapting to rising temperatures, SPDt1 proactively prevents excessive heat from ever reaching dangerous levels.
              </p>
              <p>
                SPDt1 isn&apos;t just another climate solution—it is humanity’s first step toward planetary-scale protection. With Earth’s climate rapidly reaching a critical tipping point, this innovation has the power to reshape our future. By merging science, sustainability, and space-age engineering, we are creating a world where the fear of an unlivable planet is replaced with hope, action, and technological mastery.
              </p>
              <p>
                SPDt1 is calling upon scientists, engineers, environmentalists, policymakers, and visionaries to be part of this historic breakthrough. The time to act is now. This isn&apos;t just an idea—it’s the future unfolding before our eyes.
              </p>
            </div>
            <div className="about-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/spdt2.png" alt="SPD t1 solar panel layout diagram" />
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>Our Vision</h2>
              <p>
                At SPDt1, we envision a world where technology works in harmony with nature. Our goal is to develop solutions that not only combat climate change but also enhance the quality of life for all living beings. By deploying advanced shielding mechanisms in the sky, we aim to regulate excessive sunlight, reduce heat waves, and create a more sustainable atmospheric balance without disrupting natural weather patterns.
              </p>
              <p>
                SPDt1 is more than just an innovation—it is a movement toward a greener, safer, and technologically advanced planet. As we work towards bringing this visionary project to life, we welcome collaborations with researchers, scientists, environmentalists, and policymakers who share our vision for a sustainable future.
              </p>
            </div>
          </div>
        </section>

        <section className="founder-section">
          <div className="founder-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/raushan.png" alt="Founder Image" />
          </div>
          <div className="founder-info">
            <h2>Meet Our Founder</h2>
            <h4>Mr. Raushan Kumar</h4>
            <p>
              SPDt1 is the brainchild of Mr. Raushan Kumar, a renowned entrepreneur and innovation leader dedicated to pioneering revolutionary technologies for a sustainable future. Designed and developed in India, SPDt1 represents a bold step towards global climate resilience, reinforcing India’s position as a leader in climate innovation and space technology.
            </p>
            <p>
              According to Mr. Raushan Kumar, “The time for small, incremental changes is over. We need bold, transformational solutions that directly address the challenges we face today.”
            </p>
            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="https://www.instagram.com/raushankumar.in?igsh=YjI0emUyMTdlbHRi" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/raushan-kumar-b60b771b0/?originalSubdomain=in" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
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
          <p>All Right Reserved <b>Vayu Galaxy</b></p>
        </section>
      </div>
    </>
  );
}
