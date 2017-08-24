import React from 'react';

import './WeatherInput.css';

function WeatherInput() {
  return (
    <input
      id="input"
      className="weather-input"
      type="text"
      name="input"
      placeholder="St. George, Utah"
    />
  );
}

export default WeatherInput;
