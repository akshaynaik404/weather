import React from 'react';

import './FormContainer.css';

function FormContainer() {
  return (
    <main className="form-container">
      <form>
        <label htmlFor="input">Enter a City and State</label>
        <input
          id="input"
          type="text"
          name="input"
          placeholder="St. George, Utah"
        />
        <button type="button">Get Weather</button>
      </form>
    </main>
  );
}

export default FormContainer;
