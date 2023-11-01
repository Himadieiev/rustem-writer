import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import css from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { useLogoutMutation } from "../../redux/slices/usersApiSlice";
import { logout } from "../../redux/slices/authSlice";

const Navbar = () => {
  const activeLink = `${css["link"]} ${css["activeLink"]}`;
  const normalLink = css.link;

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
      toast.success("Вихід пройшов успішно");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerTop}>
          <div className={css.logoWrapper}>
            <NavLink to="/" className={css.logo}>
              RH
            </NavLink>
          </div>
          <div className={css.hamburger}>
            <span className={css.hamburgerTop}></span>
            <span className={css.hamburgerMiddle}></span>
            <span className={css.hamburgerBottom}></span>
          </div>
          <nav className={css.nav}>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/"
            >
              Головна
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/works"
            >
              Твори
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/blog"
            >
              Блог
            </NavLink>
          </nav>
          {!userInfo && (
            <div className={css.btns}>
              <NavLink to="/login">
                <Button backgroundColor="login">Вхід</Button>
              </NavLink>
              <NavLink to="/register">
                <Button backgroundColor="register">Реєстрація</Button>
              </NavLink>
            </div>
          )}
          {userInfo && (
            <div className={css.userInfoWrapper}>
              <p className={css.userName}>
                Вітаю, <span className={css.name}>{userInfo.name}</span>
              </p>
              <div className={css.logout} onClick={handleLogout}>
                <Button backgroundColor="login">Вихід</Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={css.decor}></div>
    </header>
  );
};

export default Navbar;
