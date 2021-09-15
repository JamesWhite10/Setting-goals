import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";
import style from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <NavLink
        to={PATH.ACTIVITY}
        className={style.link}
        activeClassName={style.active}
      >
        Activity
      </NavLink>
      <NavLink
        to={PATH.MY_LIST}
        className={style.link}
        activeClassName={style.active}
      >
        My List
      </NavLink>
    </div>
  );
};

export default Header;
