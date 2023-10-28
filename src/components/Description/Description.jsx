import React from "react";

import css from "./Description.module.css";

const Description = ({ book }) => {
  return (
    <div className={css.descr}>
      <h2 className={css.title}>Анотація до книги "{book.title}"</h2>
      <div className={css.textContainer}>
        {book.abstract.map((item, index) => (
          <p className={css.text} key={index}>
            {item}
          </p>
        ))}
      </div>
      <div className={css.textContainsWrapper}>
        {book.textContains.map((item, index) => (
          <div className={css.textContains} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
