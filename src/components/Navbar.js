import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import resumePDF from '../assets/Manish.R.Gupta2026.pdf';

export default function Navbar({ onNavigate }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';
  const [showModal, setShowModal] = useState(false);

  const closeMobileMenu = () => {
    document.getElementById('mm')?.classList.remove('open');
  };
  const openMobileMenu = () => {
    document.getElementById('mm')?.classList.add('open');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Manish.R.Gupta2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openResumeModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleNavClick = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    closeMobileMenu();
  };

  return (
    <>
      {/* Mobile menu */}
      <div className="mm" id="mm">
        <button className="mm-x" onClick={closeMobileMenu}>✕</button>
        <a href="/" onClick={(e) => handleNavClick('/', e)}>Home</a>
        <a href="/about" onClick={(e) => handleNavClick('/about', e)}>About</a>
        <a href="/projects" onClick={(e) => handleNavClick('/projects', e)}>Projects</a>
        <a href="/contact" onClick={(e) => handleNavClick('/contact', e)}>Contact</a>
      </div>

      {/* Desktop nav */}
      <nav>
        <div className="nl">
          <a href="/" onClick={(e) => handleNavClick('/', e)} style={{ textDecoration: 'none', color: 'inherit' }}>M<em>G</em></a>
        </div>
        <div className="nlinks">
          <a href="/" onClick={(e) => handleNavClick('/', e)} className={`tb-tab ${isActive('/')}`}>Home</a>
          <a href="/about" onClick={(e) => handleNavClick('/about', e)} className={`tb-tab ${isActive('/about')}`}>About</a>
          <a href="/projects" onClick={(e) => handleNavClick('/projects', e)} className={`tb-tab ${isActive('/projects')}`}>Projects</a>
          <a href="/contact" onClick={(e) => handleNavClick('/contact', e)} className={`tb-tab ${isActive('/contact')}`}>Contact</a>
        </div>

        <button onClick={openResumeModal} className="nhire">📄 Resume</button>
        <button className="hmb" onClick={openMobileMenu}>☰</button>
      </nav>

      {/* Resume Modal */}
      {showModal && (
        <div className="resume-modal-overlay" onClick={closeModal}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <h3>📄 My Resume</h3>
              <button className="resume-modal-close" onClick={closeModal}>✕</button>
            </div>
            <div className="resume-modal-body">
              <embed src={resumePDF} type="application/pdf" width="100%" height="500px" />
            </div>
            <div className="resume-modal-footer">
              <button onClick={handleDownload} className="resume-download-btn">⬇️ Download Resume</button>
              <button onClick={closeModal} className="resume-close-btn">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}