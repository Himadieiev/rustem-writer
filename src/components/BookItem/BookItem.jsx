import React from "react";
import { AiOutlineLike, AiOutlineEye, AiOutlineCheck } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import css from "./BookItem.module.css";

const BookItem = ({ book }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const handleLike = () => {
    if (!userInfo) {
      toast.info("Авторизуйтесь, щоб поставити лайк");
      return;
    }

    console.log("Лайк!");
  };

  return (
    <li className={css.item}>
      <NavLink to={`/works/${book.id}`} className={css.imgWrapper}>
        <img src={book.imgURL} alt="Book" width={200} />
      </NavLink>
      <div className={css.content}>
        <NavLink to={`/works/${book.id}`}>
          <h2 className={css.title}>{book.title}</h2>
        </NavLink>
        <p className={css.genre}>{book.genre}</p>
        <p className={css.text}>{book.textPart}</p>
        <p className={css.textContains}>
          В текcті є: <span className={css.contains}>{book.textContains}</span>
        </p>
        <div className={css.info}>
          <div className={css.likesWrapper}>
            <AiOutlineLike className={css.likeIcon} onClick={handleLike} />
            <span>777</span>
          </div>
          <div className={css.viewsWrapper}>
            <AiOutlineEye className={css.eyeIcon} />
            <span>333</span>
          </div>
          <div className={css.infoTextWrapper}>
            <AiOutlineCheck />
            <span>Повний текст</span>
          </div>
          <div className={css.decor}></div>
          <div>{book.pages} стор.</div>
        </div>
      </div>
    </li>
  );
};

export default BookItem;
