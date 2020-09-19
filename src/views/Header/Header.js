import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Header.module.css";
import routes from "../../routes";

const Header = () => (
  <ul className={s.nav}>
    <li className={s.nav__item}>
      <NavLink
        activeClassName={s.navBtnActive}
        className={s.navBtn}
        to={routes.home}
        exact
      >
        Home
      </NavLink>
    </li>
    <li className={s.nav__item}>
      <NavLink
        activeClassName={s.navBtnActive}
        className={s.navBtn}
        to={routes.movies}
        exact
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Header;
