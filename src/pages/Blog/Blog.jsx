import React, { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa6";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import css from "./Blog.module.css";
import Hero from "../../components/Hero/Hero";
import Button from "../../components/Button/Button";
import BlogModal from "../../components/BlogModal/BlogModal";
import BlogForm from "../../components/BlogForm/BlogForm";
import { selectUser } from "../../redux/auth/selectors";
import { selectIsLoading, selectPosts } from "../../redux/posts/selectors";
import {
  createPost,
  editPost,
  getPosts,
  removePost,
} from "../../redux/posts/thunks";
import Loader from "../../components/Loader/Loader";

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, editingPost]);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleFormSubmit = async (data) => {
    if (data) {
      if (isEditing) {
        await dispatch(editPost(data));
        toast.success("Пост відредаговано успішно");
      } else {
        await dispatch(createPost(data));
        toast.success("Пост створено успішно");
      }

      await dispatch(getPosts());
    }
  };

  const handleAddPostBtn = () => {
    setEditingPost(null);
    setIsEditing(false);
    handleFormSubmit();
    toggleModal();
  };

  const handleEditPostBtn = (post) => {
    setEditingPost(post);
    setIsEditing(true);
    toggleModal();
  };

  const handleDeletePostBtn = async (id) => {
    await dispatch(removePost(id));
    toast.success("Пост видалено успішно");
    await dispatch(getPosts());
  };

  return (
    <main className={css.blog}>
      <div className="container">
        <Hero bg="bg-blog" />
        {user.email === "rustem@mail.com" && (
          <div className={css.btnWrapper} onClick={handleAddPostBtn}>
            <Button backgroundColor="register">Додати новий пост</Button>
          </div>
        )}
        {isLoading && <Loader />}
        {posts.length !== 0 &&
          posts
            .map((item) => (
              <div key={item._id} className={css.blogItem}>
                <h2 className={css.title}>{item.title}</h2>
                <p className={css.text}>"{item.text}"</p>
                <div className={css.bottomItem}>
                  <div>{item.date}</div>
                  {user.email === "rustem@mail.com" && (
                    <div className={css.btns}>
                      <div
                        className={css.editBtn}
                        onClick={() => handleEditPostBtn(item)}
                      >
                        <Button backgroundColor="register">
                          <AiOutlineEdit />
                        </Button>
                      </div>
                      <div
                        className={css.deleteBtn}
                        onClick={() => handleDeletePostBtn(item._id)}
                      >
                        <Button backgroundColor="login">
                          <AiOutlineDelete />
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className={css.commentWrapper}>
                    <FaRegComment />
                    <span>0</span>
                  </div>
                </div>
              </div>
            ))
            .reverse()}
      </div>
      {isModalOpen && (
        <BlogModal toggleModal={toggleModal}>
          <BlogForm
            toggleModal={toggleModal}
            onSubmit={handleFormSubmit}
            isEditing={isEditing}
            editingPost={editingPost}
          />
        </BlogModal>
      )}
    </main>
  );
};

export default Blog;
