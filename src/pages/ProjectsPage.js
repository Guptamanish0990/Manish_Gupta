// src/pages/ProjectsPage.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ProjectPages.css';


/* ====== IMAGES ====== */
import vscodeIcon from '../assets/vscode-icon.png';
import nsExecutionsImage from '../assets/NS Executions LLP.png';
import jainAndCoImage from '../assets/Jainandco-webperfecto.png';
import dentalDoctorImage from '../assets/Dentaldoctor-webperfecto.png';
import questorwingwebSite from '../assets/Questorwing WebSite.png';
import eventSystemImage from '../assets/Event Management System.png';
import mlGuiImage from '../assets/MLGUI -Tool.jpg';
import dcMotorControlImage from '../assets/DC Motor Control via Mobile.png';
import HairspaWebsite from '../assets/Hair_spa.png';
import Woocommercewebsite from '../assets/woocommerce Website.png';
import StreetVadaPavImg from '../assets/street-vada-pav.png';
import LaxStoreImg from '../assets/LaxStoreImg.png';
import YouTubeCloneImg from '../assets/youtube-clone-vercel.png';
import DrBhavsarsDentalCareImg from '../assets/drbhavsarsdentalcare4kidsin_webperfecto.png';

/* ====== ICONS ====== */
import {
  FaWordpress, FaHtml5, FaCss3Alt, FaReact, FaPhp, FaWpforms,
  FaStar, FaTools, FaPython, FaDatabase, FaBluetooth, FaShoppingCart,
  FaGithub, FaExternalLinkAlt
} from 'react-icons/fa';

import {
  SiElementor, SiJavascript, SiNextdotjs, SiTailwindcss,
  SiDjango, SiFirebase
} from 'react-icons/si';

export default function Projects() {
  const [preview, setPreview] = useState({ open: false, src: '', title: '' });
  const [hoveredCard, setHoveredCard] = useState(null);

  const openPreview = (src, title) => setPreview({ open: true, src, title });
  const closePreview = () => setPreview({ open: false, src: '', title: '' });

  useEffect(() => {
    if (!preview.open) return;
    const onKey = (e) => e.key === 'Escape' && closePreview();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview.open]);

  const projectList = [
  {
  title: 'Drbhavsarsdentalcare4kids.in – Zencraft',
  description:
    'A responsive pediatric dental care website showcasing child-friendly services, treatments, and clinic facilities with a clean, mobile-first design.',
  image: DrBhavsarsDentalCareImg,
  link: 'https://drbhavsarsdentalcare4kids.in/',
  tools: [
    <FaShoppingCart key="cart" />,
    <FaWordpress key="wp" />,
    <FaHtml5 key="html" />,
    <FaPhp key="php" />
  ],
  gradient: 'gradient-blue-cyan'
},

    {
  title: 'YouTube Clone – Full Video Streaming App',
  description: 'A YouTube-style video streaming platform built with Next.js, TailwindCSS, YouTube API, mobile UI, voice search, and real-time categories.',
  image: YouTubeCloneImg,
  link: 'https://youtube-clone-six-rosy.vercel.app/',
  repo: 'https://github.com/Guptamanish0990/youtube-clone',
  tools: [
    <FaReact key="react" />,
    <SiNextdotjs key="next" />,
    <SiTailwindcss key="tw" />,
    <SiJavascript key="js" />
  ],
  gradient: 'gradient-red-orange'
},
    {
      title: 'LAX Store – E-commerce Web App',
      description: 'A modern e-commerce application with responsive design, product catalog, cart & wishlist flow, and fast Vercel deployment.',
      image: LaxStoreImg,
      link: 'https://lax-store.vercel.app/',
      repo: 'https://github.com/Guptamanish0990/LaxStore',
      tools: [<FaReact key="react" />, <SiNextdotjs key="next" />, <SiTailwindcss key="tw" />, <SiJavascript key="js" />],
      gradient: 'gradient-purple-pink'
    },
    {
  title: 'Street Vada Pav – Live Food Ordering App',
  description:
    'An interactive Mumbai street-food ordering platform built with React and deployed on Netlify. This web app features real-time menu browsing, cart and wishlist management, and a smooth responsive UI for mobile and desktop users — delivering an authentic local food-ordering experience.',
  image: StreetVadaPavImg,
  link: 'https://street-vada-pav.netlify.app/',
  tools: [
    <FaReact key="react" />,
    <FaHtml5 key="html" />,
    <FaCss3Alt key="css" />,
    <SiJavascript key="js" />
  ],
  gradient: 'gradient-orange-yellow'
},

    {
      title: 'Hair Salon Website (Demo Project)',
      description: 'Front-end demo recreation of the official Florian Hurel Hair Couture website. Built with React, HTML5, and CSS3, it replicates the design and layout.',
      image: HairspaWebsite,
      link: 'https://guptamanish0990.github.io/hello-world-app/#/',
      tools: [<FaReact key="react" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />, <SiJavascript key="js" />],
      gradient: 'gradient-pink-red'
    },
    {
      title: 'Woocommerce – Zencraft Consultancy',
      description: 'A fully responsive WooCommerce website developed for Zencraft Consultancy Pvt Ltd to promote services and showcase products.',
      image: Woocommercewebsite,
      link: 'http://app-woocommerce-project.u10431mxjg-xlm4180lx3dy.p.temp-site.link/',
      tools: [<FaShoppingCart key="cart" />, <FaWordpress key="wp" />, <FaHtml5 key="html" />, <FaPhp key="php" />],
      gradient: 'gradient-blue-cyan'
    },
    {
      title: 'Questor Wing – Zencraft Consultancy',
      description: 'A business informational site built for Smit Enterprises to showcase services and products with modern design.',
      image: questorwingwebSite,
      link: 'https://questorwing.com/',
      tools: [<FaWordpress key="wp" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaPhp key="php" />],
      gradient: 'gradient-indigo-purple'
    },
    {
      title: 'NsExecutions LLP – Zencraft',
      description: 'A modern, professional website designed for a legal and financial consulting firm with clean interface.',
      image: nsExecutionsImage,
      link: 'http://app-nsexecutionsllp.eln1vtent4-ypj68jvev3l2.p.temp-site.link/',
      tools: [<FaWordpress key="wp" />, <FaStar key="star" />, <FaHtml5 key="html" />, <FaWpforms key="forms" />],
      gradient: 'gradient-slate-gray'
    },
    {
      title: 'Jain & Co Chartered Accountants',
      description: 'A corporate site developed for a chartered accountant firm offering tax and audit services with professional layout.',
      image: jainAndCoImage,
      link: 'https://jainandco.webperfecto.co/',
      tools: [<FaWordpress key="wp" />, <FaTools key="tools" />, <FaHtml5 key="html" />, <FaWpforms key="forms" />],
      gradient: 'gradient-emerald-green'
    },
    {
      title: 'Dental Doctor Website – Zencraft',
      description: 'A clean and informative website tailored for a dental clinic with appointment booking system.',
      image: dentalDoctorImage,
      link: 'http://app-denntaldoctor.u10431mxjg-xlm4180lx3dy.p.temp-site.link/',
      tools: [<FaWordpress key="wp" />, <SiElementor key="elementor" />, <FaHtml5 key="html" />, <SiJavascript key="js" />],
      gradient: 'gradient-sky-blue'
    },
    {
      title: 'ML GUI – College Project',
      description: 'An end-to-end ML pipeline builder with GUI using Django and React. This website is not live.',
      image: mlGuiImage,
      link: 'https://mlgui-e219d.web.app/',
      repo: 'https://github.com/Guptamanish0990/ml-gui-project',
      tools: [
        <img key="vscode" src={vscodeIcon} alt="VS Code" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />,
        <FaReact key="react" />, <SiDjango key="django" />, <FaPython key="py" />, <SiFirebase key="firebase" />
      ],
      gradient: 'gradient-violet-purple'
    },
    {
      title: 'Event Management System',
      description: 'A Django-based platform for managing college fest events with registration and ticketing system.',
      image: eventSystemImage,
      link: '#',
      tools: [<SiDjango key="django" />, <FaPython key="py" />, <FaDatabase key="db" />, <FaHtml5 key="html" />],
      gradient: 'gradient-red-orange'
    },
    {
      title: 'DC Motor Control via Mobile',
      description: 'A Python and hardware project to control DC motor speed via Bluetooth. College Project.',
      image: dcMotorControlImage,
      link: '#',
      tools: [<FaPython key="py" />, <FaBluetooth key="bt" />, <FaTools key="tools" />],
      gradient: 'gradient-cyan-blue'
    },
  ];

  return (
    <div className="projects-container">
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="projects-header"
      >
        <h1 className="main-title">
          <span className="title-gradient">Portfolio</span>
        </h1>
        <p className="subtitle">
          Explore my journey through innovative web development and creative solutions
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`project-card-wrapper ${hoveredCard === index ? 'hovered' : ''}`}
          >
            {/* Glow Effect */}
            <div className={`glow-effect ${project.gradient}`}></div>

            {/* Card */}
            <div className="project-card-3d">
              {/* Image Section */}
              <div
                className="project-image-container"
                onClick={() => openPreview(project.image, project.title)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className={`image-overlay ${project.gradient}`}></div>
                
                {/* Zoom Hint */}
                <div className="zoom-hint-badge">
                  🔍 Click to zoom
                </div>
              </div>

              {/* Content */}
              <div className="project-content-3d">
                <h3 className={`project-title-3d ${hoveredCard === index ? project.gradient : ''}`}>
                  {project.title}
                </h3>

                <p className="project-description-3d">{project.description}</p>

                {/* Tools */}
                <div className="project-tools">
                  {project.tools.map((Tool, i) => (
                    <span key={i} className="tool-icon">
                      {Tool}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-buttons">
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-primary ${project.gradient}`}
                    >
                      <FaExternalLinkAlt className="btn-icon" />
                      View Live
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <FaGithub />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="floating-element floating-element-1"></div>
              <div className="floating-element floating-element-2"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {preview.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lightbox-backdrop"
          onClick={closePreview}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closePreview} className="lightbox-close-btn">×</button>
            <img src={preview.src} alt={preview.title} className="lightbox-image" />
            <div className="lightbox-caption">{preview.title}</div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}