// src/components/ScrollToTop.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollToTopButton.css'; // reuse your existing CSS

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  // Show scroll button on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      document.body.style.setProperty('--scroll', scrollValue);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manual scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <svg width="100" height="100" viewBox="0 0 24 24">
            <path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z" />
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
