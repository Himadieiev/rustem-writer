import React from "react";

import { avatar } from "./../../assets/images";
import css from "./Hero.module.css";

const Hero = ({ bg }) => {
  return (
    <div className={`${css.hero} ${css[bg]}`}>
      <div className={css.avatarWrapper}>
        <img src={avatar} alt="Avatar" width={160} />
      </div>
    </div>
  );
};

export default Hero;
