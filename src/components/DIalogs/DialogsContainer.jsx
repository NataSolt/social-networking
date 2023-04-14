import React from "react";
//import { dialogsData, messagesData } from "../../redux/state";
// import "./Dialogs.css";
// import DialogsItem from "./DialogsItem/DialogsItem";
// import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

function dialogsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let onSendMessageClick = () => {
          store.dispatch(addMessageActionCreator());
        };
        function onNewMessageChange(body) {
          store.dispatch(updateNewMessageTextActionCreator(body));
        }
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default dialogsContainer;
