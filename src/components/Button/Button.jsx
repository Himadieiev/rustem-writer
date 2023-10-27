import React from "react";

import css from "./Button.module.css";

const Button = ({ children, backgroundColor }) => {
  return (
    <button className={`${css.btn} ${css[backgroundColor]}`}>{children}</button>
  );
};

export default Button;
