import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import css from "./Register.module.css";
import Button from "../../components/Button/Button";
import { useRegisterMutation } from "../../redux/slices/usersApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";
import Loader from "../../components/Loader/Loader";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Паролі не співпадають");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        console.log(res);
        dispatch(setCredentials({ ...res }));
        navigate("/");
        toast.success("Реєстрація пройшла успішно");
      } catch (err) {
        console.log(err);
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <main className={css.register}>
      <div className="container">
        <div className={css.formWrapper}>
          <h1 className={css.title}>Реєстрація нового облікового запису</h1>
          <form className={css.form} onSubmit={handleRegistration}>
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
            <div>
              <label className={css.label}>
                Пароль ще раз
                <br />
                <input
                  className={css.input}
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="Підтвердити пароль"
                />
              </label>
            </div>
            <div className={css.btnWrapper}>
              <Button backgroundColor="register" type="submit">
                Зареєструватися
              </Button>
            </div>
            <div className={css.bottomText}>
              Вже маєте обліковий запис?{" "}
              <span className={css.link}>
                <Link to={`/login`}>Увійдіть</Link>
              </span>
            </div>
            {isLoading && <Loader />}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
