"use client";
import Link from "next/link";

import React, { useState } from "react";
import { protoCss } from "@/styles/migrated/protoCss";

export default function ProtoPage() {
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
      <style dangerouslySetInnerHTML={{ __html: protoCss }} />

      <div className="proto-page-wrapper">
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
              <source src="/assets/proto1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>About <strong>Proto</strong></h2>
              <p>
                Proto is an advanced rolling robot designed by Mr. Raushan Kumar in India to revolutionize emergency rescue operations and logistics. Engineered for speed, efficiency, and reliability, Proto is built to navigate through tough terrains and deliver essential goods, medical supplies, and rescue assistance swiftly.
              </p>
              <p>
                At Proto, we are committed to leveraging innovation and automation to create a safer and more connected world. With its ability to carry up to 10 kg and travel at an impressive 120 km/h, Proto is not just a delivery robot—it’s a lifesaving innovation.
              </p>
              <p>
                We believe in the power of technology to save lives and enhance accessibility. Our vision is to integrate robotics, artificial intelligence, and automation to create smart, self-sufficient solutions that address real-world challenges in healthcare, logistics, and emergency response.
              </p>
            </div>
            <div className="drone-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/protoimg1.png" alt="Proto Robot concept design" />
            </div>
          </div>
        </section>

        <section className="map">
          <div className="map-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/protolable.jpg" alt="Proto Robot layout map" />
          </div>
        </section>

        <section className="tech">
          <h1>Real Time Communication</h1>
        </section>

        <div className="red-section">
          <video autoPlay loop muted playsInline className="background-video">
            <source src="/assets/proto2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>How Proto Works?</h2>
              <p>
                Proto is an advanced AI-powered rolling robot designed for high-speed emergency response, medicine delivery, and smart logistics automation. It operates using a combination of artificial intelligence, autonomous navigation, and real-time monitoring systems, ensuring swift, efficient, and secure deliveries across various terrains. Its self-balancing rolling mechanism enables it to maintain stability while moving at high speeds, making it an ideal solution for critical applications like disaster response and last-mile logistics.
              </p>
              <p>
                At the core of Proto&apos;s functionality is its AI-based autonomous navigation system, which leverages LiDAR sensors, ultrasonic sensors, GPS, and real-time mapping to detect obstacles and determine the most efficient routes. The robot&apos;s AI continuously analyzes the environment, allowing it to navigate safely through urban roads, rough landscapes, and even disaster-hit zones. If required, Proto can also be controlled remotely, providing flexibility in high-risk or mission-critical scenarios.
              </p>
              <p>
                One of Proto’s standout features is its high-speed mobility, reaching up to 120 km/h. This makes it significantly faster than traditional delivery systems, ensuring that emergency medical supplies, rescue kits, and essential goods reach their destinations without delay. Its gyro-stabilization technology helps it maintain balance at high speeds, allowing smooth movement across diverse terrains.
              </p>
            </div>
            <div className="about-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/protoimg3.png" alt="Proto Robot functional detail" />
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
              Raushan Kumar, a visionary entrepreneur and innovator, is the mastermind behind Proto, a cutting-edge rolling robot designed to revolutionize emergency rescue operations, medicine delivery, and smart logistics. With a passion for leveraging AI and robotics for real-world impact, he developed Proto to provide high-speed, autonomous mobility in critical situations.
            </p>
            <p>
              Under his leadership, Proto is setting new standards in robotic automation, ensuring faster, safer, and more efficient solutions for healthcare, disaster response, and last-mile delivery.
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
