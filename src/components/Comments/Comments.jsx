import React from "react";

import css from "./Comments.module.css";

const Comments = () => {
  return (
    <div className={css.comments}>
      <div className={css.wrapper}>
        <p className={css.text}>Поки що тут немає коментарів:(</p>
      </div>
    </div>
  );
};

export default Comments;
