// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';
import profile from '../assets/professional-developer.png';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { FaHandPeace } from 'react-icons/fa'; // Place this at the top of your file
import { FaReact } from 'react-icons/fa'; // Importing React icon
import { FaWordpress} from 'react-icons/fa'; // Importing social media icons
export default function HomePage() {
  return (
    <section className="split-hero">
      {/* LEFT PANEL */}
      <motion.div
        className="left-panel"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h4
          className="intro-line"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hey there, I'm
        </motion.h4>

        <motion.h1
          className="main-heading"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Manish Gupta
        </motion.h1>

        <h2 className="sub-heading">
          <strong>
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'Web Designer', 'WordPress Developer'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'Typewriter__wrapper',
                cursorClassName: 'Typewriter__cursor'
              }}
            />
          </strong>
        </h2>

     <motion.h3
  className="location-line flex items-center gap-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <FaHandPeace className="text-yellow-600 text-xl" />
  Welcome to <strong className="ml-1">my portfolio!</strong>
</motion.h3>


        <motion.p
          className="hero-bio text-base sm:text-lg md:text-xl text-justify leading-relaxed px-4 sm:px-8 lg:px-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
         
          As a skilled frontend developer, I am dedicated to turning ideas into innovative web applications.
          Explore my latest projects and articles, showcasing my expertise in <span className="inline-flex items-center gap-1"><FaReact style={{ color: '#61DBFB' }} /></span><strong>React.js</strong>,&nbsp;<span className="inline-flex items-center gap-1"><FaWordpress style={{ color: '#21759B' }} /></span><strong>WordPress</strong> and web development.
        </motion.p>

        <motion.div
          className="project-contact-buttons"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="http://localhost:3000/projects"
            className="view-projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Projects
          </a>
          <a
            href="http://localhost:3000/contact"
            className="contact-me"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="social-icons flex gap-4 text-2xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=websitedeveloper0990@gmail.com"
            className="email border border-black rounded-md p-3 hover:bg-gray-100 transition"
            title="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/Guptamanish0990"
            target="_blank"
            rel="noreferrer"
            className="github border border-black rounded-md p-3 hover:bg-gray-100 transition"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/manish-gupta93722"
            target="_blank"
            rel="noreferrer"
            className="linkedin border border-black rounded-md p-3 hover:bg-gray-100 transition"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://twitter.com/GuptaManish0990"
            target="_blank"
            rel="noreferrer"
            className="twitter border border-black rounded-md p-3 hover:bg-gray-100 transition"
            title="Twitter"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/guptamanish0990/"
            target="_blank"
            rel="noreferrer"
            className="instagram border border-black rounded-md p-3 hover:bg-gray-100 transition"
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/guptamanish0990"
            target="_blank"
            rel="noreferrer"
            className="facebook border border-black rounded-md p-3 hover:bg-gray-100 transition"
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT PANEL - image animation */}
      <motion.div
        className="right-panel"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={profile} alt="Manish Gupta" />
      </motion.div>
    </section>
  );
}
