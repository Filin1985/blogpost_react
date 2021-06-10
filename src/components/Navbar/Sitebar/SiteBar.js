import React from "react";
import s from "./SiteBar.module.css";

const SiteBar = (props) => {
  return (
    <div className={s.user}>
      <img
        src="https://t4.ftcdn.net/jpg/03/18/55/07/240_F_318550753_gnsjdTLjyXPHUW1eH0D2tfyQISubrMHO.jpg"
        alt="user"
        className={s.userImage}
      />
      <div className={s.userDetails}>
        <h4 className={s.username}>{props.friend}</h4>
      </div>
    </div>
  );
};

export default SiteBar;
