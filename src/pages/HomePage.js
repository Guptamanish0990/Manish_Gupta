// src/pages/HomePage.js
import "./HomePage.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaHandPeace, /*FaGithub, FaLinkedin, FaTwitter, FaDownload,*/ FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Skill tags
  const skills = [
    "React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", 
    "Tailwind CSS", "WordPress", "Git", "Responsive Design", "UI/UX"
  ];

  return (
    <>
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <section className="split-hero">
        {/* === LEFT PANEL === */}
        <motion.div
          className="left-panel"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        >
          {/* Status Badge
          <motion.div
            className="status-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* <span className="status-dot"></span>
            Available for opportunities *
          </motion.div> */}

          {/* Intro */}
          <motion.h4
            className="intro-line"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hey there, I'm
          </motion.h4>

          {/* Main Heading with gradient */}
          <motion.h1
            className="main-heading gradient-text"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Manish Gupta
          </motion.h1>

          {/* Typewriter Section */}
          <motion.h2 className="sub-heading">
            <FaCode className="inline-icon" />
            <strong>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer 🚀",
                    "WordPress Expert 💼",
                    "React.js Developer ⚛️",
                    // "UI/UX Enthusiast 🎨"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30
                }}
              />
            </strong>
          </motion.h2>

          {/* Greeting */}
          <motion.h3
            className="location-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FaHandPeace className="wave-emoji" />
            Welcome to <strong>my portfolio!</strong>
          </motion.h3>

          {/* Bio with icons */}
          <motion.p
            className="hero-bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <FaLaptopCode className="bio-icon" />
            As a <strong className="highlight">skilled frontend developer</strong>, I am dedicated to turning ideas into
            innovative web applications. Explore my latest projects and articles,
            showcasing my expertise in <strong className="highlight">React.js</strong>,{" "}
            <strong className="highlight">WordPress</strong>, and modern web development.
          </motion.p>

          {/* Skills Tags */}
          <motion.div
            className="skills-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            {skills.slice(0, 6).map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="project-contact-buttons"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/projects" className="view-projects">
              <FaRocket className="button-icon" />
              <span>My Projects</span>
            </Link>
            <Link to="/contact" className="contact-me">
              <span>Contact Me</span>
            </Link>
            {/* <button className="download-cv">
              <FaDownload className="button-icon" />
              <span>Download CV</span>
            </button> */}
          </motion.div>

          {/* Social Links 
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
          </motion.div>*/}

          {/* Stats Counter
          <motion.div
            className="stats-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Projects</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">3+</h3>
              <p className="stat-label">Years Exp</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">30+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
          </motion.div> */}
        </motion.div>

        {/* === RIGHT PANEL WITH SVG ILLUSTRATION === */}
        <motion.div
          className="right-panel"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
          }}
        >
          <div className="svg-illustration-wrapper">
            {/* Decorative elements */}
            <motion.div
              className="floating-element element-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💻
            </motion.div>
            <motion.div
              className="floating-element element-2"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              ⚛️
            </motion.div>
            <motion.div
              className="floating-element element-3"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              🚀
            </motion.div>

            <svg viewBox="0 0 520 450" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="shadowGradient">
                  <stop offset="0%" style={{stopColor:"#000", stopOpacity:0.3}} />
                  <stop offset="100%" style={{stopColor:"#000", stopOpacity:0}} />
                </radialGradient>
                <linearGradient id="deskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#f9fafb", stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#e5e7eb", stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="monitorGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#667eea", stopOpacity:0.8}} />
                  <stop offset="100%" style={{stopColor:"#764ba2", stopOpacity:0.8}} />
                </linearGradient>
                <linearGradient id="jacketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#1e3a8a", stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#0a1f44", stopOpacity:1}} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <ellipse cx="260" cy="415" rx="250" ry="25" fill="url(#shadowGradient)"/>
              
              {/* Desk drawers */}
              <rect x="380" y="220" width="120" height="180" fill="#d1d5db" rx="5"/>
              <rect x="385" y="225" width="110" height="170" fill="#e5e7eb" rx="3"/>
              <rect x="390" y="240" width="100" height="4" fill="#0a1f44" rx="2"/>
              <circle cx="445" cy="242" r="4" fill="#667eea"/>
              <rect x="390" y="270" width="100" height="4" fill="#0a1f44" rx="2"/>
              <circle cx="445" cy="272" r="4" fill="#667eea"/>
              <rect x="390" y="300" width="100" height="4" fill="#0a1f44" rx="2"/>
              <circle cx="445" cy="302" r="4" fill="#667eea"/>
              <rect x="390" y="330" width="100" height="4" fill="#0a1f44" rx="2"/>
              <circle cx="445" cy="332" r="4" fill="#667eea"/>
              <rect x="390" y="360" width="100" height="4" fill="#0a1f44" rx="2"/>
              <circle cx="445" cy="362" r="4" fill="#667eea"/>
              
              <rect x="20" y="220" width="120" height="180" fill="#d1d5db" rx="5"/>
              <rect x="25" y="225" width="110" height="170" fill="#e5e7eb" rx="3"/>
              <rect x="30" y="240" width="100" height="4" fill="#0a1f44" rx="2"/>
              <circle cx="75" cy="242" r="4" fill="#667eea"/>
              <rect x="30" y="270" width="100" height="4" fill="#0a1f44" rx="2"/>
              <circle cx="75" cy="272" r="4" fill="#667eea"/>
              <rect x="30" y="300" width="100" height="4" fill="#0a1f44" rx="2"/>
              <circle cx="75" cy="302" r="4" fill="#667eea"/>
              <rect x="30" y="330" width="100" height="4" fill="#0a1f44" rx="2"/>
              <circle cx="75" cy="332" r="4" fill="#667eea"/>
              
              {/* Enhanced desk */}
              <rect x="10" y="210" width="500" height="35" fill="url(#deskGradient)" rx="8"/>
              <rect x="10" y="210" width="500" height="5" fill="rgba(255,255,255,0.5)" rx="8"/>
              
              {/* Monitor */}
              <ellipse cx="365" cy="245" rx="18" ry="10" fill="#1e293b"/>
              <rect x="356" y="232" width="18" height="18" fill="#1e293b" rx="3"/>
              
              <rect x="278" y="78" width="184" height="144" fill="#1e293b" rx="10"/>
              <rect x="280" y="80" width="180" height="140" fill="#0a1f44" rx="8" filter="url(#glow)"/>
              <rect x="288" y="88" width="164" height="124" fill="url(#monitorGlow)" rx="5" opacity="0.2"/>
              <rect x="290" y="90" width="160" height="120" fill="#ffffff" rx="4"/>
              
              {/* Animated code */}
              <g className="code-lines">
                <rect x="308" y="108" width="28" height="6" fill="#667eea" rx="3" opacity="0.9">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                </rect>
                <rect x="342" y="108" width="48" height="6" fill="#ec4899" rx="3" opacity="0.9">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite"/>
                </rect>
                <rect x="395" y="108" width="28" height="6" fill="#10b981" rx="3" opacity="0.9">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.7s" repeatCount="indefinite"/>
                </rect>
                
                <rect x="303" y="122" width="18" height="6" fill="#f59e0b" rx="3" opacity="0.8">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite"/>
                </rect>
                <rect x="326" y="122" width="58" height="6" fill="#667eea" rx="3" opacity="0.8">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="389" y="122" width="28" height="6" fill="#8b5cf6" rx="3" opacity="0.8">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.9s" repeatCount="indefinite"/>
                </rect>
                
                <rect x="308" y="136" width="38" height="6" fill="#10b981" rx="3" opacity="0.9">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite"/>
                </rect>
                <rect x="352" y="136" width="48" height="6" fill="#ec4899" rx="3" opacity="0.9">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.6s" repeatCount="indefinite"/>
                </rect>
              </g>
              
              {/* Mouse */}
              <ellipse cx="422" cy="233" rx="14" ry="20" fill="rgba(0,0,0,0.2)"/>
              <ellipse cx="420" cy="230" rx="13" ry="19" fill="#1e293b"/>
              <ellipse cx="420" cy="228" rx="11" ry="16" fill="#334155"/>
              <line x1="420" y1="214" x2="420" y2="238" stroke="#64748b" strokeWidth="2"/>
              <circle cx="420" cy="225" r="2" fill="#667eea">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
              </circle>
              
              {/* Person */}
              <ellipse cx="97" cy="443" rx="30" ry="14" fill="rgba(0,0,0,0.2)"/>
              <ellipse cx="77" cy="388" rx="30" ry="14" fill="rgba(0,0,0,0.2)"/>
              <ellipse cx="95" cy="440" rx="29" ry="13" fill="#0a1f44"/>
              <ellipse cx="75" cy="385" rx="29" ry="13" fill="#0a1f44"/>
              
              <path d="M 60 250 Q 50 280 55 320 L 65 385 Q 70 390 80 385 L 85 330 Q 90 280 95 250 Z" fill="#0a1f44"/>
              <path d="M 95 250 Q 100 300 100 360 L 105 430 Q 108 438 115 435 L 118 365 Q 115 310 110 250 Z" fill="#0a1f44"/>
              
              <ellipse cx="85" cy="245" rx="47" ry="27" fill="#0a1f44"/>
              
              <path d="M 50 150 Q 45 180 50 220 L 60 250 Q 85 260 110 250 L 120 220 Q 125 180 120 150 Q 115 130 85 125 Q 55 130 50 150 Z" fill="url(#jacketGradient)"/>
              
              <rect x="70" y="138" width="30" height="55" fill="#3b82f6" rx="6"/>
              <rect x="72" y="140" width="26" height="5" fill="#60a5fa" rx="2" opacity="0.5"/>
              
              <ellipse cx="48" cy="175" rx="13" ry="36" fill="url(#jacketGradient)" transform="rotate(-25 48 175)"/>
              <ellipse cx="122" cy="175" rx="13" ry="36" fill="url(#jacketGradient)" transform="rotate(25 122 175)"/>
              
              <ellipse cx="62" cy="243" rx="17" ry="12" fill="rgba(252, 165, 165, 0.4)"/>
              <ellipse cx="112" cy="243" rx="17" ry="12" fill="rgba(252, 165, 165, 0.4)"/>
              <ellipse cx="60" cy="240" rx="16" ry="11" fill="#fca5a5"/>
              <ellipse cx="110" cy="240" rx="16" ry="11" fill="#fca5a5"/>
              
              <rect x="74" y="118" width="22" height="28" fill="#fca5a5" rx="4"/>
              
              <ellipse cx="85" cy="98" rx="37" ry="42" fill="#fca5a5"/>
              <ellipse cx="85" cy="95" rx="35" ry="38" fill="#fdb9b9" opacity="0.3"/>
              
              <path d="M 50 90 Q 48 70 60 60 Q 85 50 110 60 Q 122 70 120 90 Q 118 85 85 80 Q 52 85 50 90 Z" fill="#0a1f44"/>
              <ellipse cx="75" cy="72" rx="15" ry="10" fill="rgba(255,255,255,0.15)"/>
              
              <ellipse cx="48" cy="100" rx="6" ry="9" fill="#f87171"/>
              <ellipse cx="122" cy="100" rx="6" ry="9" fill="#f87171"/>
              
              <ellipse cx="75" cy="100" rx="3" ry="4" fill="#334155"/>
              <ellipse cx="95" cy="100" rx="3" ry="4" fill="#334155"/>
              <path d="M 75 110 Q 85 115 95 110" stroke="#f87171" strokeWidth="2" fill="none" strokeLinecap="round"/>
              
              <circle cx="365" cy="88" r="4" fill="#667eea" opacity="0.6"/>
              <circle cx="365" cy="88" r="2.5" fill="#8b5cf6">
                <animate attributeName="r" values="2.5;3.5;2.5" dur="3s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </motion.div>
      </section>
    </>
  );
}