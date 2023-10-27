import React from "react";
import { FaRegComment } from "react-icons/fa6";

import css from "./Blog.module.css";
import Hero from "../../components/Hero/Hero";

const Blog = () => {
  return (
    <main className={css.blog}>
      <div className="container">
        <Hero bg="bg-blog" />
        <div className={css.blogItem}>
          <h2 className={css.title}>
            Уривок глави 30. Епілог. Тиша та спокій.
          </h2>
          <p className={css.text}>
            "Червоний серпанок затягнув простір навколо саркофагу, і Перший
            Магістр зник у ньому, вийшовши з такого ж, тільки вже всередині
            темниці. На дерев'яній лаві біля стіни сидів бранець, який повільно
            підняв очі на гостя."
          </p>
          <div className={css.bottomItem}>
            <div>23.07.2023</div>
            <div className={css.commentWrapper}>
              <FaRegComment />
              <span>0</span>
            </div>
          </div>
        </div>
        <div className={css.blogItem}>
          <h2 className={css.title}>Уривок глави 29. Ведмежа ущелина.</h2>
          <p className={css.text}>
            "Поспішаємо, друже, там ще є кого рятувати, - сказав акварієць. -
            Тут ще двоє! - почулося звідкись зверху, і на скелях з'явилися
            лучники Півночі. - Добийте їх! Вождь наказав не щадити нікого! -
            відповіли голоси, і в Назара з Еверіном полетіли стріли."
          </p>
          <div className={css.bottomItem}>
            <div>16.07.2023</div>
            <div className={css.commentWrapper}>
              <FaRegComment />
              <span>0</span>
            </div>
          </div>
        </div>
        <div className={css.blogItem}>
          <h2 className={css.title}>Уривок глави 28. Бранець.</h2>
          <p className={css.text}>
            "Таверна була невеликою, але столи розміщувалися досить щільно один
            до одного, і від цього здавалося, що тут є не менше двох гарнізонів
            солдатів. Командування дозволило воїнам, що вижили в Мірейському
            лісі, відпочити з кухолем елю або пива, і загальним рішенням було
            відзначити перемогу в місцевій таверні."
          </p>
          <div className={css.bottomItem}>
            <div>01.07.2023</div>
            <div className={css.commentWrapper}>
              <FaRegComment />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
