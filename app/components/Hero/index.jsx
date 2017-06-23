// @flow
import './style.scss';
import CrayonIcon from './images/crayon.svg';
import React from 'react';

const Hero = () => (
  <div className="hero">
    <div className="hero__content">
      <img src={ CrayonIcon } className="hero__image" />
      <h1 className="hero__title">Team Crayon</h1>
      <h2 className="hero__subtitle">Witness the fitness</h2>
    </div>
  </div>
);

export default Hero;
