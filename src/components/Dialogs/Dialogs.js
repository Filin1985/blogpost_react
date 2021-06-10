import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageElement = React.useRef();

  let addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
  };

  let onMessageChange = () => {
    let message = newMessageElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newText: message });
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogsPage.dialogs.map((dialog) => (
          <DialogItem key={dialog.id} userName={dialog.name} idx={dialog.id} />
        ))}
      </div>

      <div className={s.chat}>
        <div className={s.messages}>
          {props.dialogsPage.messages.map((mes) => (
            <Message key={mes.id} message={mes.message} />
          ))}
        </div>
        <div className={s.text}>
          <textarea
            ref={newMessageElement}
            value={props.newMessageText}
            onChange={onMessageChange}
          />
          <button className={s.btn} onClick={addMessage}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
