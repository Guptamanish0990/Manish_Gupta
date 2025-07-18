// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ title, description, image, link, tools }) {
  return (
    <div className="project-card">
      <img src={image} alt={`Screenshot of ${title}`} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {/* Tools Icons */}
        {tools && (
          <div className="project-tools">
            {tools.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
          </div>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Visit Site →
        </a>
        
      </div>
    </div>
  );
}
