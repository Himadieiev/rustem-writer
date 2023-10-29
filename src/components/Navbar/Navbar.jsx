import React from "react";

import css from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
  const activeLink = `${css["link"]} ${css["activeLink"]}`;
  const normalLink = css.link;

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerTop}>
          <div className={css.logoWrapper}>
            <NavLink to="/" className={css.logo}>
              RH
            </NavLink>
          </div>
          <nav className={css.nav}>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/"
            >
              Головна
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/works"
            >
              Твори
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/blog"
            >
              Блог
            </NavLink>
          </nav>
          <div className={css.btns}>
            <NavLink to="/login">
              <Button backgroundColor="login">Вхід</Button>
            </NavLink>
            <NavLink to="/register">
              <Button backgroundColor="register">Реєстрація</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={css.decor}></div>
    </header>
  );
};

export default Navbar;
