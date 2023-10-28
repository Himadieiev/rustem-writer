import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineLike, AiOutlineRead } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";

import css from "./OneWork.module.css";
import { books } from "../../constants";
import Button from "../../components/Button/Button";
import { avatar } from "./../../assets/images";
import Description from "../../components/Description/Description";
import BookContent from "../../components/BookContent/BookContent";
import Comments from "../../components/Comments/Comments";

const OneWork = () => {
  const { id } = useParams();
  const book = books[id - 1];

  const [currentSubPage, setCurrentSubPage] = useState(1);

  const handleLinkClick = (pageNumber) => {
    setCurrentSubPage(pageNumber);
  };

  return (
    <main className={css.oneWork}>
      <div className="container">
        <div className={css.topContent}>
          <div className={css.imgWrapper}>
            <img src={book.imgURL} alt="Book" width={220} />
          </div>
          <div className={css.info}>
            <h1 className={css.title}>{book.title}</h1>
            <p className={css.genre}>{book.genre}</p>
            <div className={css.authorWrapper}>
              <div className={css.avatarWrapper}>
                <img src={avatar} alt="Avatar" width={10} />
              </div>
              <span className={css.author}>{book.author}</span>
              <span className={css.authorText}>автор</span>
            </div>
            <div className={css.pagesWrapper}>
              <AiOutlineCheck />
              <span>Повний текст</span>
              <span className={css.pages}>{book.pages} стор.</span>
            </div>
            <div className={css.linksWrapper}>
              <div className={css.likesWrapper}>
                <AiOutlineLike className={css.likeIcon} />
                <span>33</span>
              </div>
              <div className={css.backLinkWrapper}>
                <NavLink to="/works">Назад до творів</NavLink>
              </div>
            </div>
            <div className={css.btn}>
              <Button backgroundColor="read">
                <AiOutlineRead /> Читати
              </Button>
            </div>
          </div>
        </div>
      </div>
      <nav className={css.nav}>
        <NavLink className={css.link} onClick={() => handleLinkClick(1)}>
          Опис
        </NavLink>
        <NavLink className={css.link} onClick={() => handleLinkClick(2)}>
          Зміст книги
        </NavLink>
        <NavLink className={css.link} onClick={() => handleLinkClick(3)}>
          Коментарі
        </NavLink>
      </nav>
      <div className={css.decor}></div>
      {currentSubPage === 1 && <Description book={book} />}
      {currentSubPage === 2 && <BookContent book={book} />}
      {currentSubPage === 3 && <Comments />}
    </main>
  );
};

export default OneWork;
