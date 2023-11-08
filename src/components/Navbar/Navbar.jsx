import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSpring, animated } from "@react-spring/web";

import css from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { avatar } from "./../../assets/images";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/thunks";

const Navbar = () => {
  const activeLink = `${css["link"]} ${css["activeLink"]}`;
  const normalLink = css.link;

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOut());
      navigate("/login");
      toast.success("Вихід пройшов успішно");
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    document.getElementById("menu-btn").classList.toggle(css.open);
  };

  const isOpen = useSpring({
    from: {
      opacity: isOpenMenu ? 1 : 0,
      transform: isOpenMenu ? "translateY(0px)" : "translateY(-60px)",
    },
    to: {
      opacity: isOpenMenu ? 1 : 0,
      transform: isOpenMenu ? "translateY(0px)" : "translateY(-60px)",
    },
    config: { duration: 400 },
  });

  const closeMenu = () => {
    setIsOpenMenu(false);
    document.getElementById("menu-btn").classList.toggle(css.open);
  };

  const openUpdateProfile = () => {
    navigate("/profile");
  };

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerTop}>
          <div className={css.logoWrapper}>
            <NavLink to="/">
              <div className={css.avatarWrapper}>
                <img src={avatar} alt="Avatar" width={160} />
              </div>
            </NavLink>
          </div>
          <div className={css.hamburger} onClick={handleOpenMenu} id="menu-btn">
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
          {!user.name && (
            <div className={css.btns}>
              <NavLink to="/login">
                <Button backgroundColor="login">Вхід</Button>
              </NavLink>
              <NavLink to="/register">
                <Button backgroundColor="register">Реєстрація</Button>
              </NavLink>
            </div>
          )}
          {user.name && (
            <div className={css.userInfoWrapper}>
              <p className={css.userName}>
                Вітаю,{" "}
                <span className={css.name} onClick={openUpdateProfile}>
                  {user.name}
                </span>
              </p>
              <div className={css.logout} onClick={handleLogout}>
                <Button backgroundColor="login">Вихід</Button>
              </div>
            </div>
          )}
        </div>
      </div>
      {isOpenMenu && (
        <animated.nav style={isOpen} className={css.menu}>
          <NavLink className={css.link} to="/" onClick={closeMenu}>
            Головна
          </NavLink>
          <NavLink className={css.link} to="/works" onClick={closeMenu}>
            Твори
          </NavLink>
          <NavLink className={css.link} to="/blog" onClick={closeMenu}>
            Блог
          </NavLink>
        </animated.nav>
      )}
      <div className={css.decor} />
    </header>
  );
};

export default Navbar;
