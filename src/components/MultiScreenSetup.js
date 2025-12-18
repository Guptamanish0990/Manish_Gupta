// src/components/MultiScreenSetup.js
import React from 'react';
import './MultiScreenSetup.css';

export default function MultiScreenSetup() {
  return (
    <div className="multi-screen-container">
      <div className="glow-background"></div>
      
      <div className="orbs-container">
        <div className="orb orb-1" title="HTML5">HTML5</div>
        <div className="orb orb-2" title="CSS3">CSS3</div>
        <div className="orb orb-3" title="JavaScript">JavaScript</div>
        <div className="orb orb-4" title="React.js">React.js</div>
        <div className="orb orb-5" title="Bootstrap">Bootstrap</div>
        <div className="orb orb-6" title="WooCommerce">WooCommerce</div>
        <div className="orb orb-7" title="Wordpres">Wordpres</div>
        <div className="orb orb-8" title="Tailwind CSS">Tailwind</div>
      </div>

      <div className="monitors-wrapper">
        <div className="monitor left">
          <div className="screen">
            <div className="screen-content">
              <div className="screen-title">WordPress and WooCommerce </div>
              <div className="screen-subtitle">Building responsive interfaces</div>
            </div>
          </div>
          <div className="stand">
            <div className="neck"></div>
            <div className="base"></div>
          </div>
        </div>

        <div className="monitor center">
          <div className="screen">
            <div className="screen-content">
              <div className="screen-title">Frontend developer</div>
              <div className="screen-subtitle">Creating amazing digital experiences</div>
            </div>
          </div>
          <div className="stand">
            <div className="neck"></div>
            <div className="base"></div>
          </div>
        </div>

        <div className="monitor right">
          <div className="screen">
            <div className="screen-content">
              <div className="screen-title">React.js and Nextjs</div>
              <div className="screen-subtitle">Designing user-friendly experiences</div>
            </div>
          </div>
          <div className="stand">
            <div className="neck"></div>
            <div className="base"></div>
          </div>
        </div>
      </div>
    </div>
  );
}