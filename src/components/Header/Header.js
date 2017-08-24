import React from 'react';

import './Header.css';
import { WeatherInput, WeatherSubmit } from '../';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Weather</h1>
      <section className="right">
        <WeatherInput />
        <WeatherSubmit />
      </section>
    </header>
  );
}

export default Header;
