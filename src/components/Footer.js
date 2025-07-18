// src/components/Footer.jsx
import React from "react";
import { FaHeart, FaGithub, FaLinkedin,FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-glass">
      <div className="footer-glass-container">
        <div className="footer-top">
          <p className="footer-text">
            © {new Date().getFullYear()} Manish Gupta. All rights reserved.
          </p>
          <div className="footer-icons">
           <a
  href="https://github.com/Guptamanish0990"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="footer-icon-link github-icon"
>
  <FaGithub />
</a>

<a
  href="https://www.linkedin.com/in/guptamanish0990"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="footer-icon-link linkedin-icon"
>
  <FaLinkedin />
</a>

            <a
            href="https://wa.me/919372232566"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-dark text-xl hover:text-green-600 hover:scale-125 transition-transform duration-300"
          >
            <FaWhatsapp />
          </a>
          </div>
        </div>
        <p className="footer-credit">
          Made with <FaHeart className="footer-heart" /> using React.
        </p>
      </div>
    </footer>
  );
}
