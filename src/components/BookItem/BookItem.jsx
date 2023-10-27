import React from "react";

import css from "./BookItem.module.css";

const BookItem = ({ book }) => {
  return (
    <li className={css.item}>
      <div className={css.imgWrapper}>
        <img src={book.imgURL} alt="Book" width={220} height={320} />
      </div>
      <div>
        <h2 className={css.title}>{book.title}</h2>
        <p className={css.genre}>{book.genre}</p>
        <p className={css.text}>{book.textPart}</p>
        <p className={css.textContains}>
          В текcті є: <span className={css.contains}>{book.textContains}</span>
        </p>
      </div>
    </li>
  );
};

export default BookItem;
