import React from 'react';

import './HomeContainer.css';
import { Header } from '../../components';

import { FormContainer } from '../';

function HomeContainer() {
  return (
    <div className="home-container">
      <Header />
      <FormContainer />
    </div>
  );
}

export default HomeContainer;
