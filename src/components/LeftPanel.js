// components/LeftPanel.js
export default function LeftPanel() {
  return (
    <div className="left-panel">
      <div className="profile-card">
        <h2>Xian Gallers</h2>
        <img src="https://source.unsplash.com/random/150x150?portrait" alt="profile" />
        <p>Passionate about creating and designing websites with the best engaging interfaces.</p>
        <button>Download CV</button>
      </div>

      <div className="skills-card">
        <h3>Skills</h3>
        <div className="skills">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node</span>
        </div>
        <p>Visit the projects section to see the work done with these web technologies.</p>
      </div>
    </div>
  );
}