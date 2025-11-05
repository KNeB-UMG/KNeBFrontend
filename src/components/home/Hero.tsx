import React from "react";

import heroImage from "../../assets/images/hero.jpg";

import "./styles/Hero.css";

const Hero: React.FC = () => {
  return <img src={heroImage} alt="Hero" className="hero-image" />;
};

export default Hero;
