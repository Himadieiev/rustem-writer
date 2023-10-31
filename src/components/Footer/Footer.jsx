import React from "react";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__wrapper}>
          <div className={css.copyright}>
            <p>
              © 2023 Created by{" "}
              <span className={css.link}>
                <a
                  href="https://www.linkedin.com/in/ruslan-himadieiev-32416b271/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Himadieiev Ruslan
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
