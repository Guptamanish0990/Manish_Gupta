import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaReact, FaWordpress, FaShoppingCart, FaGitAlt, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiVercel, SiMysql, SiNetlify, SiRender } from 'react-icons/si';
import './HomePage.css';
import { DiMongodb } from 'react-icons/di';

export default function HomePage() {
  // Typewriter effect
  const [typeEffect] = useTypewriter({
    words: ['Frontend Developer', 'React.js Specialist', 'WordPress Expert', 'Problem Solver'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  // Custom cursor
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
    const interactive = document.querySelectorAll('a, button, .skc, .pjc, .educ, .ci, .hb-stat, .hero-link');
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

  // Scroll reveal – triggers on both entering and leaving
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            entry.target.classList.remove('out');
          } else {
            entry.target.classList.remove('in');
            entry.target.classList.add('out');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.sr').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-top enhanced-hero">
          {/* LEFT COLUMN */}
          <div className="ht-left">
            <div className="ht-tag">
              <span className="ht-tag-dot"></span>
              <span className="ht-tag-text">AVAILABLE · MUMBAI, INDIA</span>
            </div>
            <div className="ht-name">
              <span className="w1">MANISH</span>
              <span className="w2">GUPTA</span>
            </div>
            
          </div>

          {/* RIGHT COLUMN – with enhanced hero links */}
          <div className="ht-right">
            <h2 className="sub-heading">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="inline-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
              </svg>
              <strong>{typeEffect}<Cursor cursorStyle="|" /></strong>
            </h2>
            <p className="hero-bio-text">
              As a skilled frontend developer, I am dedicated to turning ideas into innovative web applications. 
              Explore my latest projects and articles, showcasing my expertise in <strong>React.js</strong>, 
              <strong>WordPress</strong>, and modern web development.
            </p>
            
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hb-stat"><div className="hbs-n">2+</div><div className="hbs-l">Years Exp</div></div>
          <div className="hb-stat"><div className="hbs-n">10+</div><div className="hbs-l">Projects Live</div></div>
          <div className="hb-stat"><div className="hbs-n">3</div><div className="hbs-l">Certifications</div></div>
          <div className="hb-stat"><div className="hbs-n">100%</div><div className="hbs-l">responsive</div></div>
          <div className="hb-stat"><div className="hbs-n">∞</div><div className="hbs-l">Passion</div></div>
        </div>

        <div className="hero-cta">
          <div className="hc-btns">
            <Link to="/projects" className="btn-bold">View Work <span className="arr">→</span></Link>
            <Link to="/contact" className="btn-border">Get in Touch</Link>
          </div>
          <div className="hc-scroll"><div className="hc-scroll-line"></div>Scroll Down</div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="mq">
        <div className="mq-t">
          <span className="mqi hi">React.js</span><span className="mqi">✦</span>
          <span className="mqi hi">Next.js</span><span className="mqi">✦</span>
          <span className="mqi">WordPress</span><span className="mqi">✦</span>
          <span className="mqi">WooCommerce</span><span className="mqi">✦</span>
          <span className="mqi hi">JavaScript</span><span className="mqi">✦</span>
          <span className="mqi">Tailwind CSS</span><span className="mqi">✦</span>
          <span className="mqi hi">Figma</span><span className="mqi">✦</span>
          <span className="mqi">Git / GitHub</span><span className="mqi">✦</span>
          <span className="mqi">MySQL</span><span className="mqi">✦</span>
          <span className="mqi hi">Vercel</span><span className="mqi">✦</span>
          <span className="mqi hi">MongoDB</span><span className="mqi">✦</span>
          {/* duplicate for seamless loop */}
          <span className="mqi hi">React.js</span><span className="mqi">✦</span>
          <span className="mqi hi">Next.js</span><span className="mqi">✦</span>
          <span className="mqi">WordPress</span><span className="mqi">✦</span>
          <span className="mqi">WooCommerce</span><span className="mqi">✦</span>
          <span className="mqi hi">JavaScript</span><span className="mqi">✦</span>
          <span className="mqi">Tailwind CSS</span><span className="mqi">✦</span>
          <span className="mqi hi">Figma</span><span className="mqi">✦</span>
          <span className="mqi">Git / GitHub</span><span className="mqi">✦</span>
          <span className="mqi">MySQL</span><span className="mqi">✦</span>
          <span className="mqi hi">Vercel</span><span className="mqi">✦</span>
          <span className="mqi hi">MongoDB</span><span className="mqi">✦</span>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <section className="skills-sec sr" id="skills">
        <div className="sk-head">
          <h2 className="sk-h">TECH<br />STACK</h2>
          <div className="sk-sub">Core technologies I work with daily.</div>
        </div>
        <div className="sk-grid">
          <div className="skc"><span className="sc-ico"><FaReact /></span><div className="sc-n">React.js</div><div className="sc-c">Framework</div></div>
          <div className="skc"><span className="sc-ico"><SiNextdotjs /></span><div className="sc-n">Next.js</div><div className="sc-c">Framework</div></div>
          <div className="skc"><span className="sc-ico"><SiJavascript /></span><div className="sc-n">JavaScript</div><div className="sc-c">Language</div></div>
          <div className="skc"><span className="sc-ico"><SiTailwindcss /></span><div className="sc-n">Tailwind CSS</div><div className="sc-c">Styling</div></div>
          <div className="skc"><span className="sc-ico"><FaWordpress /></span><div className="sc-n">WordPress</div><div className="sc-c">CMS</div></div>
          <div className="skc"><span className="sc-ico"><FaShoppingCart /></span><div className="sc-n">WooCommerce</div><div className="sc-c">E-Commerce</div></div>
          <div className="skc"><span className="sc-ico"><FaGitAlt /></span><div className="sc-n">Git / GitHub</div><div className="sc-c">Version Control</div></div>
          <div className="skc"><span className="sc-ico"><SiVercel /></span><div className="sc-n">Vercel</div><div className="sc-c">Deployment</div></div>
          <div className="skc"><span className="sc-ico"><FaPython /></span><div className="sc-n">Python</div><div className="sc-c">Language</div></div>
          <div className="skc"><span className="sc-ico"><FaNodeJs /></span><div className="sc-n">Node.js</div><div className="sc-c">Runtime</div></div>
          <div className="skc"><span className="sc-ico"><DiMongodb /></span><div className="sc-n">MongoDB</div><div className="sc-c">Database</div></div>
          <div className="skc"><span className="sc-ico"><SiVercel /></span><div className="sc-n">Vercel</div><div className="sc-c">Hosting</div></div>
          <div className="skc"><span className="sc-ico"><SiMysql /></span><div className="sc-n">MySQL</div><div className="sc-c">Database</div></div>
          <div className="skc"><span className="sc-ico"><SiNetlify /></span><div className="sc-n">Netlify</div><div className="sc-c">Hosting</div></div>
          <div className="skc"><span className="sc-ico"><SiRender /></span><div className="sc-n">Render</div><div className="sc-c">Database</div></div>
        </div>
      </section>

     
    </>
  );
}