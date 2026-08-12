"use client";
import Link from "next/link";

import React, { useState } from "react";
import { spdt1Css } from "@/styles/migrated/spdt1Css";

export default function DeviPage() {
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
      <style dangerouslySetInnerHTML={{ __html: spdt1Css }} />

      <div className="devi-page-wrapper">
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
              <source src="/assets/devibg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>About <strong>Devi Drone</strong></h2>
              <p>
                Devi Drone is a cutting-edge unmanned aerial vehicle (UAV) designed to cater to various industries, including defense, surveillance, disaster management, agriculture, and logistics. Built with precision engineering and advanced technology, it provides a reliable and efficient solution for aerial monitoring and autonomous operations. Equipped with high-resolution cameras, thermal imaging sensors, and AI-powered navigation, Devi Drone can operate in diverse environments, from urban landscapes to remote areas. Its robust design ensures durability, making it suitable for challenging weather conditions.
              </p>
              <p>
                One of the standout features of Devi Drone is its adaptability. It can be modified for multiple applications, such as search-and-rescue missions, crop health monitoring, border surveillance, and emergency medical deliveries. With an emphasis on efficiency and safety, the drone is designed to support industries that require quick and accurate aerial insights. Whether used for security purposes, environmental monitoring, or commercial deliveries, Devi Drone offers a dependable, high-tech solution.
              </p>
            </div>
            <div className="about-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/drone1.png" alt="Devi Drone concept" />
            </div>
          </div>
        </section>

        <section className="map">
          <div className="map-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/5km.png" alt="Devi Drone range specifications" />
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>How Devi Drone Works?</h2>
              <p>
                Devi Drone functions through a combination of GPS-based autonomous flight, real-time data processing, and AI-driven obstacle detection. It is equipped with advanced sensors that allow it to map out its surroundings and navigate seamlessly without manual intervention. The drone can be operated in different modes, including fully autonomous flight, semi-autonomous control, and manual operation via a remote control system or a mobile application.
              </p>
              <p>
                To ensure precision and safety, Devi Drone uses a sophisticated flight control system that continuously analyzes environmental data, adjusting its path in real time to avoid obstacles. Its high-definition cameras and thermal sensors transmit live footage to operators, providing crucial information for decision-making in applications such as security monitoring or disaster relief.
              </p>
              <p>
                The drone is powered by rechargeable lithium-ion batteries or a hybrid fuel system, depending on the model, enabling extended flight durations for long-distance operations. Its modular design allows for quick attachment of specialized equipment, such as spraying mechanisms for agricultural use or payload compartments for medical deliveries. Devi Drone can be programmed to follow specific flight paths, return to base automatically when low on battery, and communicate with other drones in a network for coordinated missions.
              </p>
            </div>
            <div className="about-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/drone2.png" alt="Devi Drone operational view" />
            </div>
          </div>
        </section>

        <section className="map">
          <div className="map-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/dronelable.png" alt="Devi Drone structural specifications" />
          </div>
        </section>

        <section className="video-section">
          <div className="container">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/AN72t94dIaI?si=e8SXtFbvgx4E1YSt"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="tech">
          <h1>Medical Emergency</h1>
        </section>

        <div className="red-section">
          <video autoPlay loop muted playsInline className="background-video">
            <source src="/assets/medicalbg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <section className="map">
          <div className="map-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/devibg.png" alt="Devi Drone grid layout" />
          </div>
        </section>

        <section className="map">
          <div className="map-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/24x7.png" alt="24x7 Emergency Service" />
          </div>
        </section>

        <div className="red-section">
          <video autoPlay loop muted playsInline className="background-video">
            <source src="/assets/devibg2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
              Raushan Kumar, an entrepreneur and innovation-driven mentor, is the visionary behind Devi Drone, a cutting-edge unmanned aerial vehicle (UAV) designed for multiple applications, including surveillance, disaster management, agriculture, and logistics. With a strong background in revolutionary technology, he has developed Devi Drone to enhance efficiency in critical operations, integrating AI-powered navigation, real-time data transmission, and autonomous flight capabilities.
            </p>
            <p>
              The drone&apos;s modular design allows customization for various industries, making it a versatile solution for aerial monitoring and emergency response. Raushan Kumar’s commitment to technological advancements continues to drive innovation in the UAV sector.
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
