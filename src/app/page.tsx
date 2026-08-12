"use client";
import Link from "next/link";

import React, { useState } from "react";
import { styleCss } from "@/styles/migrated/styleCss";

export default function HomePage() {
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
      <style dangerouslySetInnerHTML={{ __html: styleCss }} />

      <div className="home-page-wrapper">
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
          <video autoPlay loop muted playsInline className="background-video">
            <source src="/assets/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content">
            <h1>World&apos;s First Township in the Air</h1>
            <p>Experience the future of living above the skies</p>
          </div>
        </div>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>8th World of Wonder, Coming Soon!</h2>
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
              <img src="/assets/about.jpeg" alt="About Us" />
            </div>
          </div>
        </section>

        <section className="video-section">
          <div className="container">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/sxrE57rn3rY?si=2Nrp32RVRf2NtMbI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <div className="bg-section">
          <video autoPlay loop muted playsInline className="bg-video">
            <source src="/assets/bgvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Technology Section */}
        <section className="tech">
          <h1>Cities at Risk</h1>
        </section>

        <section className="risk-section">
          <div className="risk-container">
            <div className="risk-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/dwarka.jpg" alt="Dwarka" />
            </div>
            <div className="risk-content">
              <h2>Dwarka. Gujrat</h2>
              <p>
                Dwarka, often associated with Lord Krishna, holds significant mythological importance in Indian history. According to ancient Hindu scriptures like the Mahabharata and Harivamsa, Dwarka was a city built by Krishna after moving from Mathura. It is described as a magnificent and prosperous city with elaborate palaces, gardens, and advanced infrastructure.
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        </section>

        <section className="risk-section">
          <div className="risk-container">
            <div className="risk-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/jakarta.webp" alt="Jakarta" />
            </div>
            <div className="risk-content">
              <h2>Jakarta. Indonesia</h2>
              <p>
                Jakarta, the capital city of Indonesia, faces significant challenges due to subsidence and rising sea levels. This has led to the decision to relocate the capital to a new site on Borneo Island. Jakarta is sinking at an alarming rate of approximately 1 to 15 cm per year. Northern Jakarta has sunk by an average of 2.5 meters over the last decade.
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        </section>

        <section className="risk-section">
          <div className="risk-container">
            <div className="risk-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/mumbai.jpg" alt="Mumbai" />
            </div>
            <div className="risk-content">
              <h2>Mumbai. Maharastra</h2>
              <p>
                Global warming is not a distant threat but an immediate crisis requiring urgent action. The effects of rising temperatures, melting ice caps, and rising sea levels are already being felt worldwide, from the shifting capital of Indonesia to the potential submersion of Mumbai. It is imperative to take bold steps to mitigate these impacts and adapt to the changing climate to protect future generations.
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        </section>

        <section className="map">
          <div className="map-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/location.png" alt="Location Map" />
          </div>
        </section>

        <section className="map">
          <div className="map-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/map.png" alt="Map View" />
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>World&apos;s Biggest Load Vishnu Statue in the air.</h2>
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
              <img src="/assets/loadvishnu.jpeg" alt="Lord Vishnu" />
            </div>
          </div>
        </section>

        <section className="drone-section">
          <div className="drone-container">
            <div className="drone-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/drone.png" alt="Drone" />
            </div>
            <div className="drone-content">
              <h2>Devi Drone</h2>
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
          <p>All Right Reserved <b>Vayu Galaxy</b></p>
        </section>
      </div>
    </>
  );
}
