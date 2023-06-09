//import React from "react";

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
 return {
  dialogsPage: state.dialogsPage,
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
  )(Dialogs);
