import React from 'react';
import logo from '../assets/MH-logo.png'; // your local logo

import './Loader.css'; // custom styles

export default function Loader() {
  return (
    <div className="loader-body">
      <div id="loop" className="loader-center"></div>
      <div id="bike-wrapper" className="loader-center">
        <div id="bike" className="loader-centerBike">
          <img src={logo} alt="Logo" className="loader-logo" />
        </div>
      </div>
    </div>
  );
}
