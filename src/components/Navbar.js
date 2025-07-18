// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/MH-logo.png";
import "./Navbar.css";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-menu-wrapper ${menuOpen ? "active" : ""}`}>
         <ul className="navbar-menu">
  <li>
    <Link to="/" onClick={() => setMenuOpen(false)} className="hoverable" id="len1">
      <FaHome className="nav-icon" /> Home
    </Link>
  </li>
  <li>
    <Link to="/about" onClick={() => setMenuOpen(false)} className="hoverable" id="len2">
      <FaUser className="nav-icon" /> About Me
    </Link>
  </li>
  <li>
    <Link to="/projects" onClick={() => setMenuOpen(false)} className="hoverable" id="len3">
      <FaProjectDiagram className="nav-icon" /> Project
    </Link>
  </li>
  <li>
    <Link to="/contact" onClick={() => setMenuOpen(false)} className="hoverable" id="len4">
      <FaEnvelope className="nav-icon" /> Contact Me
    </Link>
  </li>
</ul>

<div className="navbar-right">
  <a
    href="/skills/Manish-gupta%202025.pdf"
    download="Manish-Gupta-Resume.pdf"
    className="resume-btn hoverable"
    onClick={() => setMenuOpen(false)} // 👈 Add this line
  >
    Resume <span className="icon">⚡</span>
  </a>
</div>

        </div>
      </nav>
    </header>
  );
}

// Add this JS code to trigger bounce effect (recommended to put in main layout or App.js if using React)
// useEffect(() => {
//   let i = 1;
//   const stop = 4;
//   const interval = setInterval(() => {
//     if (i > stop) return;
//     const el = document.getElementById('len' + i);
//     if (el) el.classList.toggle('bounce');
//     i++;
//   }, 500);
//   return () => clearInterval(interval);
// }, []);
