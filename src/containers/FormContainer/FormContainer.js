import React from 'react';

import './FormContainer.css';
import { WeatherInput, WeatherSubmit } from '../../components';

function FormContainer() {
  return (
    <main className="form-container">
      <form>
        <label htmlFor="input" className="weather-label">
          Enter a City and State
        </label>
        <WeatherInput />
        <WeatherSubmit />
      </form>
    </main>
  );
}

export default FormContainer;
