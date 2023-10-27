import React from "react";

import css from "./Works.module.css";
import Hero from "../../components/Hero/Hero";
import { books } from "../../constants";
import BookItem from "../../components/BookItem/BookItem";

const Works = () => {
  return (
    <main className={css.works}>
      <div className="container">
        <Hero bg="bg-works" />
      </div>
      <div className={css.worksWrapper}></div>
      <ul className={css.list}>
        {books.map((book) => (
          <BookItem key={book.title} book={book} />
        ))}
      </ul>
    </main>
  );
};

export default Works;
