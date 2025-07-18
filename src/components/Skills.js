import React, { useEffect, useRef } from 'react';
import { Radar } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, RadarController, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadarController,  // Add RadarController for the radar chart
  PointElement,     // Add PointElement for the radar points
  Title,
  Tooltip,
  Legend
);

const Skills = () => {
  const chartRef = useRef(null);

  // Data for the radar chart
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    datasets: [{
      label: 'Skill Level',
      data: [90, 80, 85, 70, 75],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  useEffect(() => {
    // Destroy the chart if it exists
    if (chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;
      if (chartInstance) {
        chartInstance.destroy();
      }
    }
  }, []);

  return (
    <section id="skills" className="skills">
      <h2>Skills & Proficiency</h2>
      {/* Add the Radar chart */}
      <Radar ref={chartRef} data={data} />
    </section>
  );
};

export default Skills;
// The Skills component is a functional component that displays a radar chart showing the skill levels of the developer in various technologies. The component uses the Radar component from the react-chartjs-2 library to render the chart.