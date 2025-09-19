import ProjectCard from '../components/ProjectCard';
import '../App.css';
import { motion } from 'framer-motion'; // Framer Motion animation

// Project images & icons
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

import {
  FaWordpress, FaHtml5, FaCss3Alt, FaReact, FaPhp, FaWpforms,
  FaStar, FaTools, FaPython, FaDatabase, FaBluetooth, FaShoppingCart
} from 'react-icons/fa';

import { SiElementor, SiJavascript, SiDjango, SiFirebase} from 'react-icons/si';

// Animation variants
const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.8
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)"
  }
};

export default function Projects() {
  const projectList = [
    {
  title: 'Street Vada Pav – Live Food Ordering App',
  description: `A full SPA (Single Page Application) built with React and hosted on Netlify. 
It showcases a Mumbai street-food ordering experience with routing, cart management, 
wishlist, and responsive design.`,
  image: StreetVadaPavImg,
  link: 'https://street-vada-pav.netlify.app/',   // 🔗 live Netlify URL
  original: 'https://street-vada-pav.netlify.app/', // optional “original” if you like
  tools: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <SiJavascript />],
},

  {
  title: 'Hair Salon Website:- (Demo Project Learning)',
  description: `This is a front-end demo recreation of the official Florian Hurel Hair Couture website. Built with React, HTML5, and CSS3, it replicates the design and layout to showcase UI development and responsive design capabilities.`,
  image: HairspaWebsite,
  link: 'https://guptamanish0990.github.io/hello-world-app/#/',
  original: 'https://florianhurelhaircouture.com/index.html',
  tools: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <SiJavascript />],
},
{
  title: 'Woocommerce:- Zencraft Consultancy Pvt Ltd',
  description: `A fully responsive WooCommerce website developed for Zencraft Consultancy Pvt Ltd to promote services and showcase products. Built using WordPress, PHP, HTML5, and CSS3, the site offers a smooth user experience with an intuitive design.`,
  image: Woocommercewebsite,
  link: 'http://app-woocommerce-project.u10431mxjg-xlm4180lx3dy.p.temp-site.link/',
  tools: [<FaShoppingCart />, <FaWordpress />, <FaHtml5 />, <FaCss3Alt />, <FaPhp />]
},
    {
      title: 'Questor Wing:- Zencraft Consultancy Pvt Ltd',
      description: `A business informational site built for Smit Enterprises to showcase services and products...`,
      image: questorwingwebSite,
      link: 'https://questorwing.com/',
      tools: [<FaWordpress />, <FaHtml5 />, <FaCss3Alt />, <FaPhp />],
    },
    {
      title: 'NsExecutions LLP:- Zencraft Consultancy Pvt Ltd',
      description: `A modern, professional website designed for a legal and financial consulting firm...`,
      image: nsExecutionsImage,
      link: 'http://app-nsexecutionsllp.eln1vtent4-ypj68jvev3l2.p.temp-site.link/',
      tools: [<FaWordpress />, <FaStar />, <FaHtml5 />, <FaCss3Alt />, <FaWpforms />],
    },
    {
      title: 'Jain & Co Chartered Accountants:- Zencraft Consultancy Pvt Ltd',
      description: `A corporate site developed for a chartered accountant firm offering tax and audit services...`,
      image: jainAndCoImage,
      link: 'https://jainandco.webperfecto.co/',
      tools: [<FaWordpress />, <FaTools />, <FaHtml5 />, <FaCss3Alt />, <FaWpforms />],
    },
    {
      title: 'Dental Doctor Website:- Zencraft Consultancy Pvt Ltd',
      description: `A clean and informative website tailored for a dental clinic...`,
      image: dentalDoctorImage,
      link: 'https://dentaldoctor.webperfecto.co/',
      tools: [<FaWordpress />, <SiElementor />, <FaHtml5 />, <FaCss3Alt />, <SiJavascript />],
    },
    {
      title: 'ML GUI:- College Project. This website is not live',
      description: `An end-to-end ML pipeline builder with GUI using Django and React...`,
      image: mlGuiImage,
      link: 'https://mlgui-e219d.web.app/',
      github: 'https://github.com/Guptamanish0990/ml-gui-project',
      tools: [
        <img src={vscodeIcon} alt="VS Code" style={{ width: '20px' }} />,
        <FaReact />, <SiDjango />, <FaPython />, <SiFirebase />
      ],
    },
    {
      title: 'Event Management System',
      description: `A Django-based platform for managing college fest events...`,
      image: eventSystemImage,
      link: '#',
      tools: [<SiDjango />, <FaPython />, <FaDatabase />, <FaHtml5 />, <FaCss3Alt />],
    },
    {
      title: 'DC Motor Control via Mobile:- College Project',
      description: `A Python and hardware project to control DC motor speed via Bluetooth...`,
      image: dcMotorControlImage,
      link: '#',
      tools: [<FaPython />, <FaBluetooth />, <FaTools />],
    }
  ];

  return (
    <div className="projects">
      <h1 className="section-title">My Projects</h1>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <motion.div
            className="project-column"
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            whileHover="hover"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
