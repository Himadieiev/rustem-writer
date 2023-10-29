import React, { useState } from "react";

import css from "./Register.module.css";
import Button from "../../components/Button/Button";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegistration = () => {};

  return (
    <main className={css.register}>
      <div className="container">
        <div className={css.formWrapper}>
          <h1 className={css.title}>Реєстрація нового облікового запису</h1>
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
            <div className={css.btnWrapper} onClick={handleRegistration}>
              <Button backgroundColor="register">Зареєструватися</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
