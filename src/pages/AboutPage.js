// src/pages/AboutPage.js
import './AboutPage.css';
import profile from '../assets/manish-about.jpg';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, /*FaPython,*/ FaGithub, FaWordpress, FaGitAlt } from "react-icons/fa";
import { SiWoocommerce, /*SiDjango, SiPostman*/ } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { motion } from 'framer-motion';


const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  }),
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut'
    }
  })
};
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};


export default function AboutPage() {
   const educationData = [
    { year: '2021 – 2023', degree: 'Master of Science in Information Technology', institution: 'Patkar-Varde College, Mumbai' },
    { year: '2018 – 2021', degree: 'Bachelor of Science in Information Technology', institution: 'DTSS College of Commerce and Science, Mumbai' },
    { year: '2017 – 2018', degree: 'HSC (Science)', institution: 'DTSS College of Commerce and Science, Mumbai, Malad' },
    { year: '2015 – 2016', degree: 'SSC', institution: 'Shree Radha Krishna Vidya Mandir High School, Mumbai' }
  ];

  const skills = [
    { name: "HTML5", icon: "/skills/html-icon.png" },
    { name: "CSS3", icon: "/skills/css-icons.png" },
    { name: "JavaScript", icon: "/skills/javaScript-icon.png" },
    { name: "Python", icon: "/skills/python-icon.png" },
    { name: "MySQL", icon: "/skills/mySql-icon.png" },
    { name: "WooCommerce", icon: "/skills/woocommerce-icon.png" },
    { name: "ChatGPT", icon: "/skills/ChatGPT_logo.svg.webp" },
    { name: "React.js", icon: "/skills/Reactjs_icon.png" },
    { name: "Bootstrap", icon: "/skills/BootStrap-icon.png" },
    { name: "Tailwind", icon: "/skills/Tailwind-css-icon.png" },
    { name: "GitHub", icon: "/skills/Github-icon.png" },
    { name: "WordPress", icon: "/skills/Wordpress-icon.png" }
  
  ];

  return (
    <motion.div
      className="about-wrapper"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.h2 className="about-heading text-4xl font-bold text-center mb-6 text-red-600 uppercase">About</motion.h2>

      <motion.div className="space-y-6 max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed mb-10">
        <p>I’m <strong>Manish Gupta</strong>, a curiosity-driven <strong>Frontend Developer</strong> and <strong>Web Designer</strong> with 1+ year of hands-on experience at <a href="https://www.zencraft.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Zencraft Consultancy Pvt Ltd</a>.</p>

        <p>I specialize in building responsive, user-focused websites with clean UIs, scalable design systems, and seamless interactivity.</p>

        <p>My tech stack includes <span className="inline-flex items-center gap-1"><FaHtml5 style={{ color: '#E34F26' }} /> HTML5</span>,&nbsp;, <span className="inline-flex items-center gap-1"><FaCss3Alt style={{ color: '#1572B6' }} /> CSS3</span>,&nbsp; <span className="inline-flex items-center gap-1"><FaJs style={{ color: '#F7DF1E' }} /> JavaScript</span>,&nbsp;, <span className="inline-flex items-center gap-1"><FaReact style={{ color: '#61DBFB' }} /> React.js</span>,&nbsp;
        and&nbsp; <span className="inline-flex items-center gap-1"><SiWoocommerce style={{ color: '#96588A' }} /> WooCommerce</span>.&nbsp; with advanced proficiency in <span className="inline-flex items-center gap-1"><FaWordpress style={{ color: '#21759B' }} /> WordPress</span> development and cross-browser optimization.</p>

        <p>I’m skilled in using tools like   <span className="inline-flex items-center gap-1"><FaBootstrap style={{ color: '#7952B3' }} /> Bootstrap.js</span>, &nbsp;
        <span className="inline-flex items-center gap-1"><FaGitAlt style={{ color: '#F05032' }} /> Git</span> and&nbsp;
        <span className="inline-flex items-center gap-1"><FaGithub style={{ color: '#181717' }} /> GitHub</span> to build elegant, maintainable, and version-controlled codebases.</p>

        <p>I actively integrate <strong>AI-powered tools</strong> like <strong>ChatGPT</strong> to enhance workflows, streamline content, and improve user experience. I’m a fast learner, collaborative team player, and committed to building scalable, user-centric web solutions.</p>
        </motion.div>
         <motion.div className="about-cta text-center mb-10">
        Want to collaborate or hire me?
        <a href="/contact" className="resume-button inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Get in Touch ⚡</a>
        </motion.div>

       <motion.div className="about-content flex flex-col md:flex-row items-center gap-8">
        <motion.div className="about-img w-full md:w-1/2" initial="hidden" whileInView="visible" variants={fadeIn}>
          <img src={profile} alt="Manish Gupta" className="rounded-lg shadow-lg" />
        </motion.div>

       {/*} <motion.div className="about-info w-full md:w-1/2 space-y-6" initial="hidden" whileInView="visible" variants={fadeIn}>

          <div className="about-details grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul>
              <li><strong>Address:</strong> Goregaon East, FilmCity Road</li>
              <li><strong>Phone:</strong> +91 93722325**</li>
              <li><strong>City:</strong> Mumbai, India</li>
            </ul>
            <ul>
              <li><strong>Degree:</strong> Post Graduation</li>
              <li><strong>Email:</strong> websitedeveloper0990@gmail.com</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>

          
        </motion.div>*/}
       </motion.div>

        {/* Skills Section with Animation */}
        <section className="skills-section px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills <span>✏️</span></h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">USING NOW:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={skillVariants}
              >
                <img src={skill.icon} alt={skill.name} className="mx-auto w-12" />
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">LEARNING NOW:</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={skillVariants}>
              <img src="/skills/Nextjs-icons.png" alt="Next.js" className="mx-auto w-12" />
              <p>Next.js</p>
            </motion.div>
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={skillVariants}>
              <img src="/skills/django-icon.png" alt="Django" className="mx-auto w-12" />
              <p>Django</p>
            </motion.div>
          </div>
          
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">Other</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={skillVariants}>
              <img src="/skills/vs-code-icon.png" alt="VS Code" className="mx-auto w-12" />
              <p>VS Code</p>
            </motion.div>
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={skillVariants}>
              <img src="/skills/Github-icon.png" alt="GitHub" className="mx-auto w-12" />
              <p>GitHub</p>
            </motion.div>
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={skillVariants}>
              <img src="/skills/Git-icon.png" alt="Git" className="mx-auto w-12" />
              <p>Git</p>
            </motion.div>
          </div>
        </div>
        
        </section>

       {/* Education Section */}
      <div className="education-section">
        <h2 className="edu-title text-3xl font-bold text-center mb-10">🎓 My Education</h2>
        <div className="edu-timeline space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              className="edu-item relative pl-6 border-l-4 border-blue-500"
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={itemVariants}
            >
              <div className="edu-dot w-4 h-4 bg-blue-500 rounded-full absolute -left-2 top-1.5"></div>
              <div className="edu-content bg-white shadow-md p-4 rounded-md">
                <div className="edu-header flex justify-between items-center mb-2">
                  <h3 className="edu-degree font-semibold text-blue-700">{edu.degree}</h3>
                  <span className="edu-year text-sm text-gray-500">{edu.year}</span>
                </div>
                <p className="edu-institution text-gray-700">{edu.institution}</p>
              </div>
              
              </motion.div>
          ))}
        </div>
      </div>
      
    </motion.div>

  );
}
