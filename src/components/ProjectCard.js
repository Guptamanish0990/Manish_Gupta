// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({
  title,
  description,
  image,
  link,
  repo,
  tools,
  onImageClick, // lightbox trigger
}) {
  return (
    <div className="project-card">
      {/* Clickable thumbnail to open preview */}
      <div
        className="project-thumb"
        role="button"
        tabIndex={0}
        onClick={() => onImageClick?.(image, title)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onImageClick?.(image, title);
        }}
        style={{ cursor: 'zoom-in' }}
      >
        <img src={image} alt={`Screenshot of ${title}`} className="project-image" />
        <span className="zoom-hint">Click to preview</span>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {tools && (
          <div className="project-tools">
            {tools.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
          </div>
        )}

        <div className="project-actions">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit Site →
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link secondary"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
