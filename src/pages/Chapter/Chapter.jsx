import React from "react";

import css from "./Chapter.module.css";

const Chapter = () => {
  return (
    <main className={css.chapter}>
      <div className="container">
        <div className={css.contentWrapper}>
          <h1 className={css.title}>Title of Chapter</h1>
          <p className={css.text}>Text of Chapter</p>
        </div>
        <div className={css.pagination}>Pagination</div>
      </div>
    </main>
  );
};

export default Chapter;
