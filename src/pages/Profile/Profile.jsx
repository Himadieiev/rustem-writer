import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import css from "./Profile.module.css";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { selectUser } from "../../redux/auth/selectors";
import { editData } from "../../redux/auth/thunks";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone || "");
    setBirthday(user.birthday || "");
  }, [user.birthday, user.email, user.name, user.phone]);

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const updateUserHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await dispatch(
        editData({
          name,
          email,
          phone,
          birthday,
        })
      );

      toast.success("Профіль оновлено");
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      setIsLoading(false);
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
                Телефон
                <br />
                <input
                  className={css.input}
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Телефон"
                />
              </label>
            </div>
            <div>
              <label className={css.label}>
                День народження
                <br />
                <input
                  className={css.input}
                  type="date"
                  value={birthday}
                  onChange={handleBirthdayChange}
                  placeholder="День народження"
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
