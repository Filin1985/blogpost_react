import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://t4.ftcdn.net/jpg/03/18/55/07/240_F_318550753_gnsjdTLjyXPHUW1eH0D2tfyQISubrMHO.jpg"
        alt=""
      />
      <div className={s.text}>
        <h3>Post {props.number}</h3>
        <p>{props.message}</p>
        <span>
          <i className="far fa-thumbs-up"></i> {props.likesCount}
        </span>
      </div>
    </div>
  );
};

export default Post;
