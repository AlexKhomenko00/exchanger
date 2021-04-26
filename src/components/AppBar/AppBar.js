import React from "react";
import { NavLink } from "react-router-dom";

import s from "./AppBar.module.css";

const AppBar = ({ children }) => (
  <header className={s.exchangerHeader}>
    <nav className={s.exchangerNav}>
      <NavLink
        className={s.AppBarLink}
        activeClassName={s.AppBarLink__active}
        to="/"
        exact
      >
        Main
      </NavLink>
      <NavLink
        className={s.AppBarLink}
        activeClassName={s.AppBarLink__active}
        to="/exchange"
      >
        Convert
      </NavLink>
    </nav>
    {children}
  </header>
);

export default AppBar;
