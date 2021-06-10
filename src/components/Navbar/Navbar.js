import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import SiteBar from "./Sitebar/SiteBar";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.container}>
        <h2>Мой блог</h2>
        <ul>
          <li>
            <NavLink to="/profile" activeClassName={s.active}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/hobby" activeClassName={s.active}>
              Hobby
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" activeClassName={s.active}>
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName={s.active}>
              Settings
            </NavLink>
          </li>
        </ul>
        <div className={s.friends}>
          {props.state.friends.map((friend) => (
            <SiteBar key={friend.id} friend={friend.name} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
