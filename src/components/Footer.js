// src/components/Footer.jsx
import React, { useState } from "react";
import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

// Import your logo
import logo from "../assets/MH-logo.png";

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleLogoClick = () => {
    // Scroll to top when logo is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-3d-wrapper">
      {/* Animated Background */}
      <div className="footer-bg-animation">
        <div className="footer-wave footer-wave-1"></div>
        <div className="footer-wave footer-wave-2"></div>
        <div className="footer-wave footer-wave-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="footer-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      <div className="footer-3d-container">
        <div className="footer-content-3d">
          {/* Left Section */}
          <div className="footer-left-3d">
            <div className="footer-brand">
              <Link 
                to="/"
                onClick={handleLogoClick}
                className="brand-logo-link"
                aria-label="Go to home page"
              >
                <img 
                  src={logo} 
                  alt="Manish Gupta Logo" 
                  className="brand-logo"
                />
              </Link>
             
            </div>
            <p className="footer-copyright">
               {new Date().getFullYear()} All rights reserved by Manish Gupta.
            </p>
          </div>

          {/* Center Section - Social Icons */}
          <div className="footer-center-3d">
            <div className="social-icons-3d">
              {/* GitHub */}
              <a
                href="https://github.com/Guptamanish0990"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`social-icon-3d github-3d ${hoveredIcon === "github" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIcon("github")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="icon-glow github-glow"></div>
                <FaGithub className="icon-svg" />
                <span className="icon-label">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/manish-gupta-0990"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`social-icon-3d linkedin-3d ${hoveredIcon === "linkedin" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIcon("linkedin")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="icon-glow linkedin-glow"></div>
                <FaLinkedin className="icon-svg" />
                <span className="icon-label">LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/0990_manish?igsh=MWR0NWV3N2tteDlzbg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`social-icon-3d instagram-3d ${hoveredIcon === "instagram" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIcon("instagram")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="icon-glow instagram-glow"></div>
                <FaInstagram className="icon-svg" />
                <span className="icon-label">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credit */}
        <div className="footer-credit-3d">
          <p className="credit-text">
            Crafted with <FaHeart className="heart-icon-3d" /> using React & Modern Web Technologies
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="deco-circle deco-circle-1"></div>
        <div className="deco-circle deco-circle-2"></div>
        <div className="deco-circle deco-circle-3"></div>
      </div>
    </footer>
  );
}