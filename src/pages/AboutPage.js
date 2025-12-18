import './AboutPage.css';
import MultiScreenSetup from '../components/MultiScreenSetup';
import { motion } from 'framer-motion';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.175, 0.885, 0.32, 1.275]
    }
  })
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

export default function AboutPage() {
  // Education Data
  const educationData = [
    { 
      year: '2021 – 2023', 
      degree: 'Master of Science in Information Technology', 
      institution: 'Patkar-Varde College, Mumbai' 
    },
    { 
      year: '2018 – 2021', 
      degree: 'Bachelor of Science in Information Technology', 
      institution: 'DTSS College of Commerce and Science, Mumbai' 
    },
    { 
      year: '2017 – 2018', 
      degree: 'HSC (Science)', 
      institution: 'DTSS College of Commerce and Science, Mumbai, Malad' 
    },
    { 
      year: '2015 – 2016', 
      degree: 'SSC', 
      institution: 'Shree Radha Krishna Vidya Mandir High School, Mumbai' 
    }
  ];

  // Skills Data - Using Now
  const currentSkills = [
    { name: "HTML5", icon: `${process.env.PUBLIC_URL}/skills/html-icon.png` },
    { name: "CSS3", icon: `${process.env.PUBLIC_URL}/skills/css-icons.png` },
    { name: "JavaScript", icon: `${process.env.PUBLIC_URL}/skills/javascript-icon.png` },
    { name: "React.js", icon: `${process.env.PUBLIC_URL}/skills/Reactjs_icon.png` },
    { name: "Bootstrap", icon: `${process.env.PUBLIC_URL}/skills/Bootstrap-icon.png` },
    { name: "Tailwind", icon: `${process.env.PUBLIC_URL}/skills/Tailwind-css-icon.png` },
    { name: "WordPress", icon: `${process.env.PUBLIC_URL}/skills/Wordpress-icon.png` },
    { name: "WooCommerce", icon: `${process.env.PUBLIC_URL}/skills/woocommerce-icon.png` },
    { name: "GitHub", icon: `${process.env.PUBLIC_URL}/skills/Github-icon.png` },
    { name: "ChatGPT", icon: `${process.env.PUBLIC_URL}/skills/ChatGPT_logo.svg.webp` },
    { name: "Canva", icon: `${process.env.PUBLIC_URL}/skills/canva-icon.png` }
  ];

  // Skills Data - Learning Now
  const learningSkills = [
    { name: "Next.js", icon: `${process.env.PUBLIC_URL}/skills/Nextjs-icons.png` },
    { name: "Django", icon: `${process.env.PUBLIC_URL}/skills/django-icon.png` },
    { name: "MySQL", icon: `${process.env.PUBLIC_URL}/skills/mySql-icon.png` }
  ];

  // Skills Data - Other Tools
  const otherTools = [
    { name: "VS Code", icon: `${process.env.PUBLIC_URL}/skills/vs-Code-icon.png` },
    { name: "GitHub", icon: `${process.env.PUBLIC_URL}/skills/Github-icon.png` },
    { name: "Git", icon: `${process.env.PUBLIC_URL}/skills/Git-icon.png` }
  ];

  return (
    <motion.div
      className="about-wrapper"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Main Heading */}
      <motion.h1
        className="responsive-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <span className="inline-block">Inspired&nbsp;</span>
        <span className="inline-block">by&nbsp;</span>
        <span className="inline-block">Curiosity</span>
      </motion.h1>

      {/* About Content Section */}
      <motion.div 
        className="about-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {/* MultiScreen Setup Component */}
        <motion.div
          className="about-img"
          variants={slideIn}
        >
          <MultiScreenSetup />
        </motion.div>

        {/* About Info */}
        <motion.div
          className="about-info"
          variants={fadeIn}
        >
          <h2 className="about-info-heading">About Me</h2>

          <p>
            Hi, I'm <strong>Manish</strong>. I'm a frontend developer and web designer who's passionate about creating digital experiences that actually work for people.
          </p>

          <p>
            I've spent the past <strong>1+ years</strong> at{' '}
            <a href="https://zencraft.io/" target="_blank" rel="noopener noreferrer">
              Zencraft Consultancy Pvt. Ltd.
            </a>{' '}
            building responsive websites that don't just look good they feel right to use. Working with different clients really showed me that good design isn't about fancy visuals; it's about figuring out what people actually need and making it easy for them.
          </p>

          <p>
            Here's what I believe: if a design doesn't solve a real problem, it's not doing its job. I want anyone visiting a site I've built to feel like they've found exactly what they're looking for, without any frustration.
          </p>

          <p>
            Whether it's a business website, online store, or portfolio, I pour the same careful thought and attention to detail into every project. I'm always learning and tweaking my approach because in our field, standing still means falling behind.
          </p>

          <p>
            Like what you're reading? I'd love to hear about what you're building. Let's create something that your audience will genuinely appreciate.
          </p>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <section className="skills-section">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          My Skills <span>✏️</span>
        </motion.h2>

        {/* Current Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h3>USING NOW:</h3>
          <div className="grid">
            {currentSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={skillVariants}
              >
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h3>LEARNING NOW:</h3>
          <div className="grid">
            {learningSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={skillVariants}
              >
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Tools */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h3>OTHER TOOLS:</h3>
          <div className="grid">
            {otherTools.map((tool, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={skillVariants}
              >
                <img src={tool.icon} alt={tool.name} />
                <p>{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <div className="education-section">
        <motion.h2
          className="edu-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          🎓 My Education
        </motion.h2>

        <div className="edu-timeline">
          {educationData.map((edu, idx) => (
            <motion.div
              className="edu-item"
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={idx}
              variants={itemVariants}
            >
              <div className="edu-dot"></div>
              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <p className="edu-institution">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}