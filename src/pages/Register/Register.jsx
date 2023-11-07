import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import css from "./Register.module.css";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { register } from "../../redux/auth/thunks";
import { selectUser } from "../../redux/auth/selectors";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.name) {
      navigate("/");
    }
  }, [navigate, user.name]);

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await dispatch(register({ name, email, password }));
      navigate("/");
      toast.success("Реєстрація пройшла успішно");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    } finally {
      setIsLoading(false);
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
