import React from "react";
import {
  addNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((item) => (
    <Post
      key={item.id}
      number={item.id}
      message={item.post}
      likesCount={item.likes}
    />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = addNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <h3 className={s.mypost}>My Posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
