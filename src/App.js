import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [transitionState, setTransitionState] = useState('');
  const [pendingPath, setPendingPath] = useState(null);
  const [displayLocation, setDisplayLocation] = useState(location);

  const navigateWithTransition = (path) => {
    if (transitionState || path === location.pathname) return;
    setPendingPath(path);
    setTransitionState('entering');
  };

  useEffect(() => {
    if (transitionState === 'entering' && pendingPath) {
      const timer = setTimeout(() => {
        navigate(pendingPath);
        setTransitionState('exiting');
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [transitionState, pendingPath, navigate]);

  useEffect(() => {
    if (pendingPath && location.pathname === pendingPath) {
      setDisplayLocation(location);
      const timer = setTimeout(() => {
        setTransitionState('');
        setPendingPath(null);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [location, pendingPath]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar onNavigate={navigateWithTransition} />

      <div className={`page-transition-overlay ${transitionState}`}>
        <div className="to-panel"></div>
        <div className="to-panel"></div>
        <div className="to-panel"></div>
        <div className="to-panel"></div>
        <div className="to-panel"></div>
      </div>

      <main>
        <Routes location={displayLocation}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;