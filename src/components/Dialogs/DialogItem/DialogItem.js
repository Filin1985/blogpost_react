import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.idx;

  return (
    <div className={s.dialog + " " + s.active}>
      <img
        src="https://t4.ftcdn.net/jpg/03/18/55/07/240_F_318550753_gnsjdTLjyXPHUW1eH0D2tfyQISubrMHO.jpg"
        alt=""
      />
      <NavLink to={path}>{props.userName}</NavLink>
    </div>
  );
};

export default DialogItem;
