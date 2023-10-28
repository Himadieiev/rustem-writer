import React from "react";

import css from "./BookContent.module.css";

const BookContent = ({ book }) => {
  return (
    <div className={css.bookContent}>
      <h2 className={css.title}>Зміст книги: {book.content.length} гл.</h2>
      <ul className={css.list}>
        {book.content.map((item, index) => (
          <li className={css.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookContent;
