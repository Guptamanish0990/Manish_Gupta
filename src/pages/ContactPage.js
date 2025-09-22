// src/pages/Contact.js
import './Contact.css';
//import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { PiMapPinBold, PiAtBold, PiPhoneBold } from 'react-icons/pi';
import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Contact() {
  return (
    <motion.div className="contact-wrapper" initial="hidden" animate="visible">
      <div className="contact-container">
        <motion.div className="contact-left" variants={fadeLeft}>
          <h2 className="contact-title">We'd love to talk about how we can help you.</h2>
          <p className="contact-description">
            If you have any questions or would like to discuss a project, please feel free to reach out. You can contact me via email, phone, or by filling out the form below. I look forward to hearing from you!
          </p>

          <div className="contact-info-box">
            <div className="contact-info-item">
              <div className="icon-box">
                <PiMapPinBold className="icon" />
              </div>
              <div>
                <p className="info-label">Address:</p>
                <a
                  href="https://www.google.com/maps/place/Filmcity+Road,+Goregaon+East,+Mumbai,+Maharashtra+400065"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-value map-link"
                >
                  Filmcity Road, Goregaon East,<br />
                  Maharashtra, Mumbai 400065
                </a>
              </div>
            </div>

            <div className="contact-info-item bg-gray-300 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full max-w-md">
              <div className="icon-box bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center mb-2 sm:mb-0">
                <PiAtBold className="icon text-black text-xl" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="info-label text-gray-600 font-medium text-sm">My Email:</p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=websitedeveloper0990@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="email-link text-black hover:text-gray-800 font-semibold underline">
                  websitedeveloper0990@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="icon-box">
                <PiPhoneBold className="icon" />
              </div>
              <div>
                <p className="info-label">Call Me Now:</p>
                <a href="tel:+919372232566" className="info-value phone-number">
                  +91 9372232566
                </a>
              </div>
            </div>
          </div>

          {/*<div className="social-icons flex gap-4 text-2xl mt-4">
            <a href="https://www.facebook.com/Guptamanish0990/" className="facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com/GuptaManish0990" className="twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/0990_manish?igsh=MWR0NWV3N2tteDlzbg==" className="instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/manish-gupta93722/" className="linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Guptamanish0990" className="github" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>*/}
        </motion.div>

        <motion.div className="contact-right" variants={fadeRight}>
          <h2>Fill in the form</h2>
          <form action="https://formspree.io/f/mrbkywka" method="POST">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="details">Message</label>
              <textarea id="details" name="details" rows="4"></textarea>
            </div>

            <button type="submit" className="submit-button">Send⚡</button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
