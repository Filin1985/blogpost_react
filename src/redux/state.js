const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Сегодня мы изучим Present Simple", likes: 23 },
        {
          id: 2,
          post: "В этом эпизоде мы будем изучать Past Simple",
          likes: 15,
        },
        { id: 3, post: "Переходим в Future Simple", likes: 18 },
      ],
      newPostText: "marat",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Привет, как дела?" },
        { id: 2, message: "У меня все отлично. А как у тебя?" },
        { id: 3, message: "У меня тоже все хорошо" },
      ],
      newMessageText: "Hello",
      dialogs: [
        { id: 1, name: "Roma" },
        { id: 2, name: "Milana" },
        { id: 3, name: "Pixel" },
      ],
    },
    siteBar: {
      friends: [
        { id: 1, name: "Roma" },
        { id: 2, name: "Milana" },
        { id: 3, name: "Pixel" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        post: this._state.profilePage.newPostText,
        likes: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessageText,
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const addNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default store;
window.store = store;
