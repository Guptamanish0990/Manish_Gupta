// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/MH-logo.png";
import "./Navbar.css";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  // Toggle menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // === Bounce animation on first load ===
  useEffect(() => {
    let i = 1;
    const stop = 4;
    const interval = setInterval(() => {
      if (i > stop) {
        clearInterval(interval);
        return;
      }
      const el = document.getElementById("len" + i);
      if (el) {
        el.classList.add("bounce");
        setTimeout(() => el.classList.remove("bounce"), 2000);
      }
      i++;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // === Scroll-based effect ===
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Auto close on route change ===
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar-3d-header ${scrolled ? "scrolled" : ""}`}>
      {/* Animated Background */}
      <div className="navbar-bg-animation">
        <div className="navbar-wave navbar-wave-1"></div>
        <div className="navbar-wave navbar-wave-2"></div>
      </div>

      {/* Floating Particles */}
      <div className="navbar-particles">
        <div className="nav-particle nav-particle-1"></div>
        <div className="nav-particle nav-particle-2"></div>
        <div className="nav-particle nav-particle-3"></div>
      </div>

      <nav className="navbar-3d-container">
        {/* === Left Logo === */}
        <div className="navbar-left-3d">
          <Link to="/" className="navbar-logo-3d" onClick={() => setMenuOpen(false)}>
            <div className="logo-glow"></div>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* === Hamburger Button === */}
        <button
          className={`navbar-toggle-3d ${menuOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className="bar-3d"></span>
          <span className="bar-3d"></span>
          <span className="bar-3d"></span>
        </button>

        {/* === Menu Items === */}
        <div className={`navbar-menu-wrapper-3d ${menuOpen ? "active" : ""}`}>
          <ul className="navbar-menu-3d">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={`nav-link-3d ${location.pathname === "/" ? "active" : ""} ${hoveredItem === 0 ? "hovered" : ""}`}
                id="len1"
                onMouseEnter={() => setHoveredItem(0)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="link-glow"></div>
                <FaHome className="nav-icon-3d" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={`nav-link-3d ${location.pathname === "/about" ? "active" : ""} ${hoveredItem === 1 ? "hovered" : ""}`}
                id="len2"
                onMouseEnter={() => setHoveredItem(1)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="link-glow"></div>
                <FaUser className="nav-icon-3d" />
                <span>About Me</span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className={`nav-link-3d ${location.pathname === "/projects" ? "active" : ""} ${hoveredItem === 2 ? "hovered" : ""}`}
                id="len3"
                onMouseEnter={() => setHoveredItem(2)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="link-glow"></div>
                <FaProjectDiagram className="nav-icon-3d" />
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={`nav-link-3d ${location.pathname === "/contact" ? "active" : ""} ${hoveredItem === 3 ? "hovered" : ""}`}
                id="len4"
                onMouseEnter={() => setHoveredItem(3)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="link-glow"></div>
                <FaEnvelope className="nav-icon-3d" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>

          {/* === Resume Button === */}
          <div className="navbar-right-3d">
            <a
              href={`${process.env.PUBLIC_URL}/Manish-Gupta-Resume.pdf`}
              download="Manish-Gupta-Resume.pdf"
              className="resume-btn-3d"
              onClick={() => setMenuOpen(false)}
            >
              <div className="resume-glow"></div>
              <span>Resume</span>
              <span className="resume-icon">⚡</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}