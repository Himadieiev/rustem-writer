import React, { useEffect, useState } from "react";

import css from "./BlogForm.module.css";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const BlogForm = ({ toggleModal, onSubmit, isEditing, editingPost }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEditing && editingPost) {
      setTitle(editingPost.title || "");
      setText(editingPost.text || "");
      setDate(editingPost.date || "");
    }
  }, [isEditing, editingPost]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    if (isEditing) {
      onSubmit({ postId: editingPost._id, updatedData: { title, text, date } });
    } else {
      onSubmit({ title, text, date });
    }

    setIsLoading(false);
    toggleModal();
  };

  return (
    <div className={css.blogForm}>
      <div className={css.formWrapper}>
        {!isEditing && <h1 className={css.title}>Створення посту</h1>}
        {isEditing && <h1 className={css.title}>Оновлення посту</h1>}
        <form className={css.form} onSubmit={handleSubmit}>
          <div>
            <label className={css.label}>
              Назва
              <br />
              <input
                className={css.input}
                type="text"
                value={title}
                onChange={handleTitleChange}
              />
            </label>
          </div>
          <div>
            <label className={css.label}>
              Текст
              <br />
              <textarea
                className={css.input}
                type="text"
                value={text}
                onChange={handleTextChange}
              />
            </label>
          </div>
          <div>
            <label className={css.label}>
              Дата
              <br />
              <input
                className={css.input}
                type="text"
                value={date}
                onChange={handleDateChange}
                placeholder="01.01.2000"
              />
            </label>
          </div>
          <div className={css.btnWrapper}>
            <Button backgroundColor="register" type="submit">
              {!isEditing ? "Створити" : "Редагувати"}
            </Button>
          </div>
          {isLoading && <Loader />}
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
