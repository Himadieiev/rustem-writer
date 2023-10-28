import React from "react";
import { AiOutlineCheck, AiOutlineLike, AiOutlineRead } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";

import css from "./OneWork.module.css";
import { books } from "../../constants";
import Button from "../../components/Button/Button";
import { avatar } from "./../../assets/images";

const OneWork = () => {
  const { id } = useParams();
  const book = books[id - 1];

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
                <AiOutlineLike />
                <span>33</span>
              </div>
              <div className={css.backLinkWrapper}>
                <NavLink to="/works">Назад до творів</NavLink>
              </div>
            </div>
            <div className={css.btn}>
              <Button backgroundColor="login">
                <AiOutlineRead /> Читати
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OneWork;
