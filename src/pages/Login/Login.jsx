import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import css from "./Login.module.css";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { selectUser } from "../../redux/auth/selectors";
import { logIn } from "../../redux/auth/thunks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.name) {
      navigate("/");
    }
  }, [navigate, user.name]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await dispatch(logIn({ email, password }));
      navigate("/");
      toast.success("Ви успішно авторизовані");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={css.login}>
      <div className="container">
        <div className={css.formWrapper}>
          <h1 className={css.title}>Увійдіть до свого облікового запису</h1>
          <form className={css.form} onSubmit={handleLogin}>
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
              <Button backgroundColor="login" type="submit">
                Увійти
              </Button>
            </div>
            <div className={css.bottomText}>
              Новий користувач?{" "}
              <span className={css.link}>
                <Link to={`/register`}>Зареєструйтесь</Link>
              </span>
            </div>
            {isLoading && <Loader />}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
