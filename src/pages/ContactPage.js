// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { PiMapPinBold, PiAtBold } from 'react-icons/pi';
import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formHovered, setFormHovered] = useState(false);

  return (
    <div className="contact-3d-wrapper">
      {/* Animated Background */}
      <div className="contact-bg-animation">
        <div className="contact-bg-circle contact-bg-circle-1"></div>
        <div className="contact-bg-circle contact-bg-circle-2"></div>
        <div className="contact-bg-circle contact-bg-circle-3"></div>
      </div>

      <motion.div 
        className="contact-container-3d" 
        initial="hidden" 
        animate="visible"
      >
        {/* Left Section */}
        <motion.div 
          className="contact-left-3d" 
          variants={fadeLeft}
        >
          {/* Header */}
          <div className="contact-header-3d">
            <motion.h2 
              className="contact-title-3d"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Let's Build Something Amazing Together
            </motion.h2>
            <motion.p 
              className="contact-description-3d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to bring your ideas to life? Whether it's a website, web app, or digital experience, 
              I'm here to help turn your vision into reality. Let's discuss your project!
            </motion.p>
          </div>

          {/* Contact Info Cards - Simplified */}
          <div className="contact-info-grid">
            {/* Location Card */}
            <motion.div 
              className={`contact-card-3d ${hoveredCard === 0 ? 'hovered' : ''}`}
              variants={fadeUp}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow gradient-purple"></div>
              <div className="card-content-3d">
                <div className="icon-wrapper-3d gradient-purple">
                  <PiMapPinBold className="contact-icon-3d" />
                </div>
                <div className="card-text">
                  <p className="card-label">Based In:</p>
                  <a
                    href="https://maps.app.goo.gl/aE4pojMaBDpqSx7m8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-value map-link-3d"
                  >
                    Mumbai, India
                  </a>
                </div>
              </div>
              <div className="card-float-element card-float-1"></div>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              className={`contact-card-3d ${hoveredCard === 1 ? 'hovered' : ''}`}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow gradient-cyan"></div>
              <div className="card-content-3d">
                <div className="icon-wrapper-3d gradient-cyan">
                  <PiAtBold className="contact-icon-3d" />
                </div>
                <div className="card-text">
                  <p className="card-label">Email Me At:</p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=websitedeveloper0990@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-value email-link-3d"
                  >
                    websitedeveloper0990@gmail.com
                  </a>
                </div>
              </div>
              <div className="card-float-element card-float-2"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - Simplified Form */}
        <motion.div 
          className={`contact-right-3d ${formHovered ? 'form-hovered' : ''}`}
          variants={fadeRight}
          onMouseEnter={() => setFormHovered(true)}
          onMouseLeave={() => setFormHovered(false)}
        >
          <div className="form-glow"></div>
          <div className="form-container-3d">
            <h2 className="form-title-3d">Send Me a Message</h2>
            
            <form action="https://formspree.io/f/mrbkywka" method="POST">
              {/* Simplified Form Fields */}
              <div className="form-group-3d full-width">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group-3d full-width">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group-3d full-width">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>

              <button type="submit" className="submit-button-3d">
                <span>Send Message</span>
                <span className="submit-icon">⚡</span>
              </button>
            </form>
          </div>

          {/* Floating Decorative Elements */}
          <div className="form-float-element form-float-1"></div>
          <div className="form-float-element form-float-2"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}