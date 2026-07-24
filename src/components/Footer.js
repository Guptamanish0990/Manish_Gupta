import React from "react";
import { Link } from "react-router-dom";
import { 
  FaGithub, FaLinkedin, FaInstagram, FaHeart, FaEnvelope, 
  FaMapMarkerAlt, FaCode, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt 
} from "react-icons/fa";
import { 
  SiReact, SiTailwindcss, SiWordpress, SiJavascript, 
  SiPython, SiNodedotjs, SiDjango 
} from "react-icons/si";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-light">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <em>MG</em> / Frontend Dev
          </Link>
          <p className="footer-tagline">Crafting digital experiences that work for people.</p>
        </div>

        {/* Explore Links */}
        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:manishgupta.webdev@gmail.com" className="contact-link">
              manishgupta.webdev@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Mumbai, India</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="footer-tech">
          <h4>Tech Stack</h4>
          <div className="tech-icons">
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <SiJavascript title="JavaScript" />
            <SiReact title="React" />
            <FaBootstrap title="Bootstrap" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiWordpress title="WordPress" />
            <SiPython title="Python" />
            <SiNodedotjs title="Node.js" />
            <SiDjango title="Django" />
            <FaGitAlt title="Git" />
            <FaCode title="VS Code" />
          </div>
          <p className="tech-note">Always learning, always building.</p>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://github.com/Guptamanish0990" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/manish-gupta-0990" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/0990_manish" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} <strong>Manish Gupta</strong>. All rights reserved.</p>
        <div className="footer-bottom-right">
          <a 
            href="https://github.com/Guptamanish0990" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-footer-link"
            aria-label="GitHub (all code pushed here)"
          >
            <FaGithub /> View all projects on GitHub
          </a>
          <p className="footer-credit">
            Crafted with <FaHeart className="heart-icon" /> using React.js
          </p>
        </div>
      </div>
    </footer>
  );
}