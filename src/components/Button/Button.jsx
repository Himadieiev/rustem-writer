import React from "react";

import css from "./Button.module.css";

const Button = ({ children, backgroundColor, type }) => {
  return (
    <button className={`${css.btn} ${css[backgroundColor]}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
