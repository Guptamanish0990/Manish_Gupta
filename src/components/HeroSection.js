// src/components/HeroSection.js
import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my projects, skills, and experiences.</p>
        <a href="#projects" className="btn-primary">View My Work</a>
      </div>
    </section>
  );
}