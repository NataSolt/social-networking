//import React from "react";

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
//import StoreContext from "../../StoreContext";
import { connect } from "react-redux";

// function dialogsContainer() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogsPage;
//         let onSendMessageClick = () => {
//           store.dispatch(addMessageActionCreator());
//         };
//         function onNewMessageChange(body) {
//           store.dispatch(updateNewMessageTextActionCreator(body));
//         }
//         return (
//           <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
 return {
  dialogsPage: state.dialogsPage
 }
}
let mapDispatchToProps = (dispatch) => {
    return {
  updateNewMessageBody: (body)=> {
    dispatch(updateNewMessageTextActionCreator(body))
  },
  sendMessage: ()=> {
    dispatch(addMessageActionCreator())
  }
    }
}
const dialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default dialogsContainer;
