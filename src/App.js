import './App.css';

import React, { useState } from 'react';

function App() {
  const images = ['/swing_img1.png', '/swing_img2.png', '/swing_img3.png'];
  const fluxData = [
    ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper massa libero, sed molestie erat congue ut. Morbi pellentesque lacus id turpis laoreet, quis vestibulum elit consequat. Quisque euismod, risus ut tincidunt bibendum, felis sem elementum lacus, vitae consectetur elit ante at orci"],
    ["Morbi sit amet eros in odio feugiat luctus. Curabitur bibendum justo ac mauris posuere, eu tincidunt velit vehicula."],
    ["Phasellus ullamcorper sagittis erat, eget tincidunt ligula venenatis eu. Pellentesque in augue luctus, porta libero a, tristique nisl."],
    ["Proin sollicitudin neque id nunc iaculis bibendum."],
    ["Morbi sagittis erat sit amet tortor placerat, a vulputate urna pellentesque. Nam blandit laoreet erat nec cursus."],
    ["Integer purus lorem, scelerisque ut lectus a, facilisis cursus ante. Sed augue ligula, iaculis sit amet fermentum vel, venenatis at nisi. Cras quis nibh ex."]
  ];
  
  const [formData, setFormData] = useState({
    patrimoine: 'Ilo (pire)',
    checkboxes: {
      agregat: false,
      tresorerie: false,
      immobilisation: false,
      obligations: false
    },
    dateRange: { start: '2024-05-22', end: '2025-12-16' },
    fluxLog: fluxData[0],
    fluxLogImpossible: fluxData[2],
    currentImage: images[0]
  });

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      checkboxes: {
        ...formData.checkboxes,
        [e.target.name]: e.target.checked
      },
      currentImage: getRandomElement(images)
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      fluxLog: getRandomElement(fluxData),
      fluxLogImpossible: getRandomElement(fluxData),
      patrimoine: e.target.value
    });
  };

  const handleDateChange = (field, value) => {
    setFormData({
      ...formData,
      dateRange: {
        ...formData.dateRange,
        [field]: value
      },
      currentImage: getRandomElement(images),
      fluxLog: getRandomElement(fluxData),
      fluxLogImpossible: getRandomElement(fluxData)
    });
  };

  const handleTousButtonClick = () => {
    setFormData({
      ...formData,
      currentImage: getRandomElement(images),
      fluxLog: getRandomElement(fluxData),
      fluxLogImpossible: getRandomElement(fluxData)
    });
  };

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return (
    <div className="main">
      <div className="header">
        <p>Patrimoine : possesseur={formData.patrimoine}, t=2024-05-13</p>
      </div>

      <div className="content">
        <div className="sidebar">
          <p className='title'>Patrimoine</p>
          <select
            name="patrimoine"
            value={formData.patrimoine}
            onChange={handleInputChange}
          >
            <option value="Ilo (pire)">Ilo (pire)</option>
            <option value="Riche">Riche</option>
          </select>
          <button onClick={handleTousButtonClick}>Tous</button>

          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                name="agregat"
                checked={formData.checkboxes.agregat}
                onChange={handleCheckboxChange}
              />
              Agrégat
            </label>
            <label>
              <input
                type="checkbox"
                name="tresorerie"
                checked={formData.checkboxes.tresorerie}
                onChange={handleCheckboxChange}
              />
              Trésorerie
            </label>
            <label>
              <input
                type="checkbox"
                name="immobilisation"
                checked={formData.checkboxes.immobilisation}
                onChange={handleCheckboxChange}
              />
              Immobilisations
            </label>
            <label>
              <input
                type="checkbox"
                name="obligations"
                checked={formData.checkboxes.obligations}
                onChange={handleCheckboxChange}
              />
              Obligations
            </label>
          </div>

          <div className="date-range">
            <p>De</p>
            <input
              type="date"
              name="start"
              value={formData.dateRange.start}
              onChange={handleDateChange}
            />
            <p>A</p>
            <input
              type="date"
              name="end"
              value={formData.dateRange.end}
              onChange={handleDateChange}
            />
          </div>
          

          <div className="flux-log">
            <ul>
              {formData.fluxLogImpossible.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flux-log">
            <ul>
              {formData.fluxLog.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>


        <div className="chart-section">
            <img src={formData.currentImage} alt="Dynamic Chart" />
        </div>
      </div>
    </div>
  );
}

export default App;
