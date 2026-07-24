import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaSearchPlus, FaImage } from 'react-icons/fa';
import './ProjectsPage.css';

// Import your images
import dentalImage from '../assets/drbhavsarsdentalcare4kidsin_webperfecto.webp';
import jainImage from '../assets/Jainandco-webperfecto.webp';
import hairspa from '../assets/Hair_spa.webp';
import Questorwing from '../assets/Questorwing-WebSite.webp';
import NSExecution from '../assets/NS Executions-LLP.webp';
import StreetVadaPav from '../assets/street-vada-pav.webp';
import Luxstore from '../assets/LaxStoreImg.webp';
import YouTubeClone from '../assets/youtube-clone-vercel.webp';
import DCMotor from '../assets/DC Motor Control via Mobile.webp';
import EventMgmt from '../assets/Event Management System.webp';
import MLGUI from '../assets/MLGUI-Tool.webp';
import Solarsystem from '../assets/solarsystem-explorer.webp';
import HumanBody from '../assets/interactive-humanbody.webp';
import DebugQuest from '../assets/debugingquest.webp';
import JavaScriptPrep from '../assets/javascriptintro.webp';
import uksangroupImage from '../assets/uksangroup.webp';

const projects = [
  {
    id: 1,
    title: 'Dr. Bhavsar Dental Care',
    description: "A pediatric dental clinic website focused on children’s oral health and education. It introduces the doctor, lists services (fillings, root canals, orthodontics), and provides preventive care tips. The design is friendly and reassuring, with easy appointment booking. Built with WordPress, it includes service pages, patient resources, and a contact section. Helps parents find specialized child dental care with confidence.",
    tech: 'WordPress',
    image: dentalImage,
    link: 'https://drbhavsarsdentalcare4kids.in/',
    repo: null,
    tools: ['WordPress', 'Beaver Builder', 'PHP', 'JavaScript'],
    gradient: 'gradient-purple-pink'
  },
  {
    id: 2,  
    title: 'Uksan Group',
    description: "A leading B2B platform for material handling equipment, specializing in forklifts, pallet jacks, and warehouse systems. The platform streamlines the buying, selling, and refurbishment process for industrial equipment. It showcases the company's expertise in providing skilled manpower, training, and maintenance services. The design reflects a professional, trustworthy, and industry-focused brand identity.",
    tech: 'WordPress',
    image: uksangroupImage,
    link: 'https://uksangroup.com/',
    repo: null,
    tools: ['WordPress', 'Elementor', 'PHP', 'JavaScript'],
    gradient: 'gradient-orange-yellow'
  },
  {
    id: 3,
    title: 'Solar System Explorer',
    description: "An interactive 3D visualization of our solar system built with Three.js. Users can click on any celestial body to view detailed data on its surface, missions, satellites, and more. This project demonstrates advanced 3D rendering, orbital mechanics, and an immersive, educational UI.",
    tech: 'JavaScript',
    image: Solarsystem,
    link: 'https://guptamanish0990.github.io/solarsystem/',
    repo: 'https://github.com/Guptamanish0990/solarsystem',
    tools: ['JavaScript', 'Three.js', 'HTML', 'CSS'],
    gradient: 'gradient-cyan-blue'
  },
  {
    id: 4,
    title: 'Interactive Human Body',
    description: "An educational web tool that makes learning anatomy interactive and engaging. By clicking on a glowing organ, you can explore detailed information about its functions, associated diseases, and nutritional benefits. The project offers an intuitive and visually clear way to understand the complexities of the human body.",
    tech: 'JavaScript',
    image: HumanBody,
    link: 'https://guptamanish0990.github.io/interactive-humanbody/',
    repo: 'https://github.com/Guptamanish0990/interactive-humanbody',
    tools: ['JavaScript', 'HTML', 'CSS', 'Canvas API'],
    gradient: 'gradient-emerald-green'
  },
  {
    id: 5,
    title: 'Debug Quest',
    description: "A specialized web application designed to streamline the debugging process for modern web applications. It provides a structured and efficient workflow for identifying, analyzing, and resolving issues. This tool is particularly aimed at enhancing developer productivity when working on complex projects.",
    tech: 'Next.js',
    image: DebugQuest,
    link: 'https://debugingquest.netlify.app/',
    repo: 'https://github.com/Guptamanish0990/debug-quest',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'GitHub', 'Axios', 'Node.js', 'Express', 'MongoDB','Netlify'],
    gradient: 'gradient-slate-gray'
  },
  {
    id: 6,
    title: 'JavaScript Interview Prep',
    description: "A comprehensive study guide featuring 64 essential JavaScript questions, ranging from foundational concepts to advanced topics. Each question is accompanied by detailed, step-by-step explanations to ensure deep understanding. It's an ideal resource for developers aiming to confidently ace their technical interviews.",
    tech: 'HTML/CSS/JS',
    image: JavaScriptPrep,
    link: 'https://guptamanish0990.github.io/javascriptintro/javascriptintro.html',
    repo: 'https://github.com/Guptamanish0990/javascriptintro',
    tools: ['JavaScript', 'HTML', 'CSS'],
    gradient: 'gradient-indigo-purple'
  },
  {
    id: 7,
    title: 'Florian Hurel Hair Couture',
    description: "A simple yet polished introductory web app, perfect for learning React basics. It features a clean layout with routing between a home page and an about section. The design is minimal, focusing on clear typography and smooth navigation. Built as a starter template, it shows my understanding of React Router and component structure. Ideal for demonstrating fundamental frontend concepts.",
    tech: 'WordPress',
    image: hairspa,
    link: 'https://guptamanish0990.github.io/hello-world-app/#/',
    repo: 'https://github.com/Guptamanish0990/hello-world-app',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'GitHub Pages'],
    gradient: 'gradient-pink-red'
  },
  {
    id: 8,
    title: 'LAX Store – Online store all in one',
    description: "A premium e‑commerce website for luxury jewelry with attractive discounts. It features product categories like rings, necklaces, bracelets, and earrings. The store includes smooth product filtering, secure checkout, and user reviews. Built with WooCommerce and Stripe, it offers a seamless shopping experience. Perfect for customers seeking high‑quality jewellery at competitive prices.",
    tech: 'WooCommerce',
    image: Luxstore,
    link: 'https://lax-store.vercel.app/',
    repo: null,
    tools: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Vercel', 'WooCommerce', 'Stripe API'],
    gradient: 'gradient-red-orange'
  },
  {
    id: 9,
    title: 'YouTube Clone',
    description: "A full‑featured YouTube clone that replicates core video streaming functionality. Users can search for videos, watch them, and explore recommendations. The interface mimics YouTube’s layout with a responsive sidebar and video grid. Built with React.js and the YouTube API, it showcases my skills in API integration and state management. A great demonstration of my ability to build large‑scale frontend applications.",
    tech: 'React.js',
    image: YouTubeClone,
    link: 'https://youtube-clone-six-rosy.vercel.app/',
    repo: 'https://github.com/Guptamanish0990/youtube-clone',
    tools: ['React.js', 'YouTube API', 'Tailwind CSS', 'Vercel', 'GitHub', 'Axios'],
    gradient: 'gradient-cyan-blue'
  },
  {
    id: 10,
    title: 'Street Vada Pav',
    description: "An online food ordering platform for authentic Mumbai street food. Customers can browse a menu of Vada Pav, Pav Bhaji, and other local favourites. The site features quick ordering, delivery tracking, and special offers. Built with React.js and WooCommerce API, it offers a fast, mobile‑friendly experience. Brings the taste of Mumbai streets directly to your doorstep.",
    tech: 'React.js / WordPress',
    image: StreetVadaPav,
    link: 'https://street-vada-pav.netlify.app/',
    repo: 'https://github.com/Guptamanish0990/-Street_Food',
    tools: ['React.js', 'WooCommerce API','JavaScript', 'Tailwind CSS'],
    gradient: 'gradient-violet-purple'
  },
  {
    id: 11,
    title: 'Jain & Co – Chartered Accountants',
    description: "A professional corporate website for a premier chartered accountancy firm in Mumbai. It showcases services like auditing, taxation, financial advisory, and business consulting. The design conveys trust, expertise, and transparency with a clean, formal layout. Built with WordPress, it features service pages, team profiles, and a contact form. Helps the firm build credibility and attract corporate clients.",
    tech: 'WordPress',
    image: jainImage,
    link: '#',
    repo: null,
    tools: ['WordPress', 'Custom Theme', 'Bootstrap'],
    gradient: 'gradient-orange-yellow'
  },
  {
    id: 12,
    title: 'N&S Execution LLP',
    description: "A B2B platform for material handling equipment and industrial solutions. The site covers forklifts, pallet jacks, warehouse systems, and maintenance services. It reflects a strong engineering background and commitment to quality. Built with WordPress, it features product catalogs, case studies, and an inquiry form. Perfect for connecting with industrial clients seeking reliable equipment.",
    tech: 'WordPress',
    image: NSExecution,
    link: '#',
    repo: null,
    tools: ['WordPress', 'Custom Post Types', 'CSS3'],
    gradient: 'gradient-blue-cyan'
  },
  {
    id: 13,
    title: 'QuestorWing Services',
    description: "An HR consultancy and payroll outsourcing firm, specialising in labour compliance. The website highlights payroll management, employee lifecycle services, and compliance for jewellery companies. It projects a professional, efficient, and trustworthy brand image. Built with WordPress, it includes service breakdowns, client testimonials, and a contact page. Ideal for businesses seeking streamlined HR and payroll solutions.",
    tech: 'WordPress',
    image: Questorwing,
    link: '#',
    repo: null,
    tools: ['WordPress', 'Contact Form 7', 'SEO'],
    gradient: 'gradient-indigo-purple'
  },
  {
    id: 14,
    title: 'DC Motor Speed Control',
    description: "A DC Motor Speed Control system allows you to increase or decrease the rotational speed of a DC motor as needed. Instead of the motor running at full speed all the time, you can make it go slower, faster, or stop. In this project, an Android app sends speed commands wirelessly via Bluetooth. A Python backend receives the commands and generates a PWM signal to adjust the motor’s speed smoothly. This setup is ideal for robotics, DIY fans, or any application requiring precise wireless motor control.",
    tech: 'Python / Android',
    image: DCMotor,
    link: '#',
    repo: null,
    tools: ['Python', 'Android Studio', 'Bluetooth'],
    gradient: 'gradient-emerald-green'
  },
  {
    id: 15,
    title: 'Event Management System',
    description: "A full‑stack platform to manage events, registrations, and ticketing. Users can create events, track attendees, and generate real‑time reports. The system includes role‑based access for admins, organisers, and guests. Built with React.js and Node.js, it handles authentication and database integration. Streamlines event planning for small to medium‑sized organisations.",
    tech: 'React.js / Node.js',
    image: EventMgmt,
    link: '#',
    repo: null,
    tools: ['React.js', 'Node.js', 'MongoDB'],
    gradient: 'gradient-slate-gray'
  },
  {
    id: 16,
    title: 'ML GUI Tool',
    description: "A desktop application that simplifies machine learning model training. Users can load datasets, choose algorithms, and visualise results without writing code. The tool includes data preprocessing, model evaluation, and export features. Built with Python and Tkinter, it’s ideal for beginners and rapid prototyping. Democratises ML by providing a no‑code, interactive interface.",
    tech: 'Python / Tkinter',
    image: MLGUI,
    link: '#',
    repo: null,
    tools: ['Python', 'Tkinter', 'Scikit‑learn'],
    gradient: 'gradient-purple-pink'
  }
];

export default function ProjectsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');

  // Custom cursor effect
  useEffect(() => {
    const c1 = document.createElement('div'); c1.id = 'c1'; document.body.appendChild(c1);
    const c2 = document.createElement('div'); c2.id = 'c2'; document.body.appendChild(c2);
    let cx = 0, cy = 0, rx = 0, ry = 0;
    const move = e => { cx = e.clientX; cy = e.clientY; c1.style.left = cx + 'px'; c1.style.top = cy + 'px'; };
    const animate = () => {
      rx += (cx - rx) * 0.13;
      ry += (cy - ry) * 0.13;
      c2.style.left = rx + 'px'; c2.style.top = ry + 'px';
      requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', move);
    animate();
    const interactive = document.querySelectorAll('a, button, .project-card-3d, .lightbox-close');
    const add = () => document.body.classList.add('hov');
    const rem = () => document.body.classList.remove('hov');
    interactive.forEach(el => {
      el.addEventListener('mouseenter', add);
      el.addEventListener('mouseleave', rem);
    });
    return () => {
      window.removeEventListener('mousemove', move);
      c1.remove(); c2.remove();
      interactive.forEach(el => {
        el.removeEventListener('mouseenter', add);
        el.removeEventListener('mouseleave', rem);
      });
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

  const openLightbox = (image, title) => {
    setCurrentImage(image);
    setCurrentTitle(title);
    setLightboxOpen(true);
  };

  return (
    <div className="sr projects-page">
      <div className="projects-header">
        <h1 className="projects-title">SELECTED <span className="accent">WORK</span></h1>
        <p className="projects-subtitle">A collection of my finest projects – each built with care and precision</p>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card-3d">
            <div className="card-inner">
              {/* Front side */}
              <div className="card-front">
                <div className="card-image-area" onClick={() => openLightbox(project.image, project.title)}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="card-image" 
                    loading="lazy" 
                    decoding="async"
                  />
                  <div className="zoom-overlay">
                    <FaSearchPlus className="zoom-icon" />
                    <span>Click to preview</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className={`card-title ${project.gradient}`}>{project.title}</h3>
                  <p className="card-description">{project.description.substring(0, 80)}...</p>
                  <div className="card-tools">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <span key={idx} className="tool-chip">{tool}</span>
                    ))}
                    {project.tools.length > 3 && <span className="tool-chip">+{project.tools.length - 3}</span>}
                  </div>

                  {/* ✅ NEW: Buttons shown only on mobile */}
                  <div className="front-buttons-mobile">
                    {project.link && project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-project-mobile">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-project-mobile secondary">
                        <FaGithub /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Back side (unchanged) */}
              <div className="card-back">
                <div className="back-content">
                  <h3 className="back-title">{project.title}</h3>
                  <p className="back-description">{project.description}</p>
                  <div className="back-tools">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="back-tool-chip">{tool}</span>
                    ))}
                  </div>
                  <div className="back-buttons">
                    <button
                      className="btn-project image-btn"
                      onClick={() => openLightbox(project.image, project.title)}
                    >
                      <FaImage /> View Image
                    </button>
                    {project.link && project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-project">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-project secondary">
                        <FaGithub /> Source Code
                      </a>
                    )}
                    {(!project.link || project.link === '#') && !project.repo && (
                      <span className="btn-project" style={{ opacity: 0.6, cursor: 'default' }}>
                        🔒 Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>
              <FaTimes />
            </button>
            <img src={currentImage} alt={currentTitle} className="lightbox-image" />
            <div className="lightbox-caption">{currentTitle}</div>
          </div>
        </div>
      )}
    </div>
  );
}