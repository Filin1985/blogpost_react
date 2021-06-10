import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.wallContainer}>
        <img
          className={s.wall}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgAs_Cuoekiu8brVxL1z1Bu78GBEUvB5NUA&usqp=CAU"
          alt=""
        />
      </div>
      <div className={s.user}>
        <img
          src="https://randomuser.me/api/portraits/women/46.jpg"
          alt="user"
          className={s.userImage}
        />
        <div className={s.userDetails}>
          <h4 className={s.username}>Miyah Myles</h4>
          <p className={s.role}>Marketing</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
