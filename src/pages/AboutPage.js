import React, { useEffect } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaWordpress, 
  FaCode, FaGithub, FaGitAlt, FaShoppingCart, FaPaintBrush,
  FaCertificate
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiNextdotjs, SiDjango, SiMysql
} from 'react-icons/si';

import './AboutPage.css';
import myPhoto from '../assets/photo.jpg';

export default function AboutPage() {
  // Custom cursor effect
  useEffect(() => {
    const c1 = document.createElement('div'); 
    c1.id = 'c1'; 
    document.body.appendChild(c1);
    
    const c2 = document.createElement('div'); 
    c2.id = 'c2'; 
    document.body.appendChild(c2);
    
    let cx = 0, cy = 0, rx = 0, ry = 0;
    
    const move = e => { 
      cx = e.clientX; 
      cy = e.clientY; 
      c1.style.left = cx + 'px'; 
      c1.style.top = cy + 'px'; 
    };
    
    const anim = () => {
      rx += (cx - rx) * 0.13;
      ry += (cy - ry) * 0.13;
      c2.style.left = rx + 'px';
      c2.style.top = ry + 'px';
      requestAnimationFrame(anim);
    };
    
    window.addEventListener('mousemove', move);
    anim();
    
    const interactive = document.querySelectorAll('a, button, .chip, .tag, .timeline-node, .edu-card, .hero-badge');
    const add = () => document.body.classList.add('hov');
    const rem = () => document.body.classList.remove('hov');
    interactive.forEach(el => { 
      el.addEventListener('mouseenter', add); 
      el.addEventListener('mouseleave', rem); 
    });
    
    return () => {
      window.removeEventListener('mousemove', move);
      c1.remove(); 
      c2.remove();
      interactive.forEach(el => { 
        el.removeEventListener('mouseenter', add); 
        el.removeEventListener('mouseleave', rem); 
      });
    };
  }, []);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.sr').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Skill data
  const usingSkills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'WordPress', icon: <FaWordpress />, color: '#21759B' },
    { name: 'WooCommerce', icon: <FaShoppingCart />, color: '#96588A' }
  ];
  const learningSkills = [
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' }
  ];
  const toolSkills = [
    { name: 'VS Code', icon: <FaCode />, color: '#007ACC' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' }
  ];

  return (
    <div className="sr about-page-alt">
      {/* Hero card */}
      <div className="about-hero-card">
        <span className="hero-badge">👋 about me</span>
        <h1 className="hero-title">Crafting code with <span className="accent">purpose</span> & <span className="accent">precision</span></h1>
        <p className="hero-desc">Frontend developer who believes great design is invisible  it just works.</p>
      </div>

      {/* Two‑column bio section */}
      <div className="bio-grid">
        <div className="bio-left">
          <div className="avatar-icon">
            <img 
              src={myPhoto}
              alt="Manish Gupta" 
              className="avatar-img"
            />
          </div>
          {/* Holographic code card */}
          <div className="card-3d">
            <div className="holographic-card">
              <div className="code-animation">
                <div className="code-line">
                  <span className="syntax-keyword">const</span> <span className="syntax-var">developer</span> = {'{'}
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;name: <span className="syntax-string">"Manish Gupta"</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;role: <span className="syntax-string">"Frontend Developer"</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;location: <span className="syntax-string">"Mumbai, India"</span>,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;experience: <span className="syntax-number">1</span>+ year,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;projects: <span className="syntax-number">8</span>+,
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;skills: [<span className="syntax-string">"React"</span>, <span className="syntax-string">"WordPress"</span>, <span className="syntax-string">"Tailwind"</span>],
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;passion: <span className="syntax-string">"Creating intuitive UX"</span>
                </div>
                <div className="code-line">{'}'};</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bio-right">
          <p>Hi, I'm <strong>Manish</strong>. I'm a frontend developer and web designer who's passionate about creating digital experiences that actually work for people.</p>
          <p>I've spent the past <strong>1+ years</strong> at <a href="https://zencraft.io/" target="_blank" rel="noopener noreferrer">Zencraft Consultancy Pvt. Ltd.</a> building responsive websites that don't just look good  they feel right to use. Working with different clients really showed me that good design isn't about fancy visuals; it's about figuring out what people actually need and making it easy for them.</p>
          <p>Here's what I believe: if a design doesn't solve a real problem, it's not doing its job. I want anyone visiting a site I've built to feel like they've found exactly what they're looking for, without any frustration.</p>
          <div className="expertise-tags">
            <span className="tag"><FaReact /> React.js</span>
            <span className="tag"><FaWordpress /> WordPress</span>
            <span className="tag"><SiTailwindcss /> Tailwind CSS</span>
            <span className="tag"><FaPaintBrush /> UI/UX focus</span>
          </div>
        </div>
      </div>

      {/* Skills section – chip layout */}
      <div className="skills-section-alt">
        <h2>My Toolbox</h2>
        <div className="skill-category">
          <h3>🔨 Using now</h3>
          <div className="skill-chips">
            {usingSkills.map(s => (
              <span key={s.name} className="chip">
                <span style={{ color: s.color }}>{s.icon}</span>
                {s.name}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3>📖 Learning</h3>
          <div className="skill-chips">
            {learningSkills.map(s => (
              <span key={s.name} className="chip">
                <span style={{ color: s.color }}>{s.icon}</span>
                {s.name}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3>🛠️ Tools</h3>
          <div className="skill-chips">
            {toolSkills.map(s => (
              <span key={s.name} className="chip">
                <span style={{ color: s.color }}>{s.icon}</span>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Journey timeline */}
      <div className="journey-section">
        <h2>The journey so far</h2>
        <div className="timeline">
          <div className="timeline-node">
            <div className="timeline-year">2024 – present</div>
            <div className="timeline-detail">
              <h4>Frontend Developer @ Zencraft Consultancy</h4>
              <p>Built 6+ client websites, improved performance by 40%, integrated REST APIs, led responsive redesigns.</p>
            </div>
          </div>
          <div className="timeline-node">
            <div className="timeline-year">2023</div>
            <div className="timeline-detail">
              <h4>Master's degree (M.Sc. IT)</h4>
              <p>ML GUI Tool – An M.Sc. IT project built using Python and Tkinter for no-code machine learning model training, data preprocessing, and result visualization.</p>
            </div>
          </div>
          <div className="timeline-node">
            <div className="timeline-year">2021</div>
            <div className="timeline-detail">
              <h4>Bachelor's degree (B.Sc. IT)</h4>
              <p>DC Motor Speed Control – A B.Sc. project for wireless DC motor speed control using Bluetooth, Python, and PWM-based speed adjustment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="edu-section">
        <h2>Certificates</h2>
        <div className="edu-grid">
          <div className="edu-card">
            <div className="edu-year"><FaCertificate style={{ marginRight: '6px' }} /> 2024</div>
            <div className="edu-name">Full Stack Development – SkillUp Online</div>
          </div>
          <div className="edu-card">
            <div className="edu-year"><FaCertificate style={{ marginRight: '6px' }} /> 2024</div>
            <div className="edu-name">Java Full Stack – Anudip Foundation</div>
          </div>
        </div>
      </div>
    </div>
  );
}