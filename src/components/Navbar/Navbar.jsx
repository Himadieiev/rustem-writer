import React from "react";

import css from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerTop}>
          <NavLink to="/" className={css.logo}>
            RH
          </NavLink>
          <nav className={css.nav}>
            <NavLink className={css.link} to="/">
              Головна
            </NavLink>
            <NavLink className={css.link} to="/works">
              Твори
            </NavLink>
            <NavLink className={css.link} to="/blog">
              Блог
            </NavLink>
          </nav>
          <div className={css.btns}>
            <Button backgroundColor="login">Вхід</Button>
            <Button backgroundColor="register">Реєстрація</Button>
          </div>
        </div>
      </div>
      <div className={css.decor}></div>
    </header>
  );
};

export default Navbar;
