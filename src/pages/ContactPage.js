import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import './ContactPage.css';

export default function ContactPage() {
  // Custom cursor
  useEffect(() => {
    const c1 = document.createElement('div');
    c1.id = 'c1';
    document.body.appendChild(c1);
    const c2 = document.createElement('div');
    c2.id = 'c2';
    document.body.appendChild(c2);

    let cx = 0, cy = 0, rx = 0, ry = 0;
    const move = e => { cx = e.clientX; cy = e.clientY; c1.style.left = cx + 'px'; c1.style.top = cy + 'px'; };
    const anim = () => {
      rx += (cx - rx) * 0.13;
      ry += (cy - ry) * 0.13;
      c2.style.left = rx + 'px';
      c2.style.top = ry + 'px';
      requestAnimationFrame(anim);
    };
    window.addEventListener('mousemove', move);
    anim();

    const interactive = document.querySelectorAll('a, button, .contact-card, .social-icon, .btn-bold, .btn-border, input, textarea');
    const add = () => document.body.classList.add('hov');
    const rem = () => document.body.classList.remove('hov');
    interactive.forEach(el => { el.addEventListener('mouseenter', add); el.addEventListener('mouseleave', rem); });

    return () => {
      window.removeEventListener('mousemove', move);
      c1.remove(); c2.remove();
      interactive.forEach(el => { el.removeEventListener('mouseenter', add); el.removeEventListener('mouseleave', rem); });
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.sr').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Form handling
  const [formStatus, setFormStatus] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <div className="sr contact-page">
      <div className="contact-header">
        <span className="hero-badge">📬 get in touch</span>
        <h1 className="contact-title">Let’s <span className="accent">collaborate</span> & bring your ideas to life</h1>
        <p className="contact-sub">Whether you have a project in mind or just want to say hi  I’d love to hear from you.</p>
      </div>

      <div className="contact-grid">
        {/* Left: Contact info & social */}
        <div className="contact-info">
          <div className="info-cards">
            <div className="contact-card">
              <div className="card-icon"><FaEnvelope /></div>
              <div className="card-details">
                <h4>Email</h4>
                <a href="mailto:manishgupta.webdev@gmail.com">manishgupta.webdev@gmail.com</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="card-icon"><FaMapMarkerAlt /></div>
              <div className="card-details">
                <h4>Location</h4>
                <span>Goregaon, Mumbai – 400065</span>
              </div>
            </div>
            <div className="contact-card">
              <div className="card-icon"><FaPhoneAlt /></div>
              <div className="card-details">
                <h4>Phone</h4>
                <a href="tel:+919372232566">+91 93722 32566</a>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h4>Connect elsewhere</h4>
            <div className="social-icons">
              <a href="https://github.com/Guptamanish0990" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/manish-gupta-0990" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/0990_manish" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="contact-form-wrapper">
          <form
            className="contact-form"
            action="https://formspree.io/f/mrbkywka"
            method="POST"
            onSubmit={handleSubmit}
          >
            <h3>Send a message</h3>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="What would you like to discuss?" required></textarea>
            </div>
            <button type="submit" className="btn-bold">
              Send message <FaPaperPlane className="btn-icon" />
            </button>
            {formStatus === 'success' && <p className="form-success">✓ Message sent! I'll get back to you soon.</p>}
            {formStatus === 'error' && <p className="form-error">✗ Oops! Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}