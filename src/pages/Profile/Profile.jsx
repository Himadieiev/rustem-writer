import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import css from "./Profile.module.css";
import Button from "../../components/Button/Button";
import { useUpdateUserMutation } from "../../redux/slices/usersApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";
import Loader from "../../components/Loader/Loader";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const updateUserHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await updateProfile({
        _id: userInfo._id,
        name,
        email,
        password,
      }).unwrap();

      dispatch(setCredentials(res));
      toast.success("Профіль оновлено");
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <main className={css.profile}>
      <div className="container">
        <div className={css.formWrapper}>
          <h1 className={css.title}>Оновлення профілю</h1>
          <form className={css.form} onSubmit={updateUserHandler}>
            <div>
              <label className={css.label}>
                Ім'я користувача
                <br />
                <input
                  className={css.input}
                  type="text"
                  value={name}
                  onChange={handleUsernameChange}
                  placeholder="Ім'я"
                />
              </label>
            </div>
            <div>
              <label className={css.label}>
                Email
                <br />
                <input
                  className={css.input}
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                />
              </label>
            </div>
            <div>
              <label className={css.label}>
                Пароль
                <br />
                <input
                  className={css.input}
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Пароль"
                />
              </label>
            </div>
            <div className={css.btnWrapper}>
              <Button backgroundColor="register" type="submit">
                Оновити
              </Button>
            </div>
            {isLoading && <Loader />}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Profile;
