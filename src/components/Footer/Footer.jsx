import React from "react";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__wrapper}>
          <div className={css.copyright}>
            <p>© 2023 Created by Himadieiev Ruslan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
