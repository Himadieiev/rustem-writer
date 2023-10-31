import React from "react";
import { AiOutlineRight } from "react-icons/ai";

import css from "./BookContent.module.css";

const BookContent = ({ book }) => {
  return (
    <div className={css.bookContent}>
      <h2 className={css.title}>Зміст книги: {book.content.length} гл.</h2>
      <ul className={css.list}>
        {book.content.map((item) => (
          <li key={item.id}>
            <a
              href={item.chapterURL}
              className={css.item}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={css.chapterNumber}>{item.id} </span>
              {item.title} <AiOutlineRight className={css.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookContent;
