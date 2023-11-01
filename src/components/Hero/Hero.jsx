import React from "react";

import css from "./Hero.module.css";

const Hero = ({ bg }) => {
  return <div className={`${css.hero} ${css[bg]}`} />;
};

export default Hero;
