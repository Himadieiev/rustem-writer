import React, { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import css from "./Blog.module.css";
import Hero from "../../components/Hero/Hero";
import Button from "../../components/Button/Button";
import BlogModal from "../../components/BlogModal/BlogModal";
import BlogForm from "../../components/BlogForm/BlogForm";
import { selectUser } from "../../redux/auth/selectors";
import { selectIsLoading, selectPosts } from "../../redux/posts/selectors";
import { getPosts } from "../../redux/posts/thunks";
import Loader from "../../components/Loader/Loader";

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  const [isTokenLoaded, setIsTokenLoaded] = useState(false);

  useEffect(() => {
    setIsTokenLoaded(true);
  }, []);

  useEffect(() => {
    if (isTokenLoaded && token) {
      dispatch(getPosts());
    }
  }, [dispatch, isTokenLoaded, token]);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <main className={css.blog}>
      <div className="container">
        <Hero bg="bg-blog" />
        {user.email === "rustem@mail.com" && (
          <div className={css.btnWrapper} onClick={toggleModal}>
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
          <BlogForm toggleModal={toggleModal} />
        </BlogModal>
      )}
    </main>
  );
};

export default Blog;
