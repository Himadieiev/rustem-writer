import React, { useState } from "react";

import css from "./Login.module.css";
import Button from "../../components/Button/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {};

  return (
    <main className={css.login}>
      <div className="container">
        <div className={css.formWrapper}>
          <h1 className={css.title}>Увійдіть до свого облікового запису</h1>
          <form className={css.form}>
            <div>
              <label className={css.label}>
                Ім'я користувача
                <br />
                <input
                  className={css.input}
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Ім'я"
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
            <div className={css.btnWrapper} onClick={handleLogin}>
              <Button backgroundColor="login">Увійти</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
