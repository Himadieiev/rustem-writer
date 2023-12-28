import React from "react";

import css from "./Chapter.module.css";

const Chapter = () => {
  return (
    <main>
      <div className="container">
        <div className={css.chapterWrapper}>Chapter</div>
      </div>
    </main>
  );
};

export default Chapter;
