import React from "react";
//import { dialogsData, messagesData } from "../../redux/state";
import './Dialogs.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



function dialogsContainer(props){
    let state = props.store.getState().dialogsPage;

// let newDialogsElement = React.createRef();
    let onSendMessageClick =()=> {
    props.store.dispatch(addMessageActionCreator());
    }
function onNewMessageChange(body) {
    
props.store.dispatch(updateNewMessageTextActionCreator(body))
    // let text = newDialogsElement.current.value;
    // let action = updateNewMessageTextActionCreator(text) 
    // props.dispatch(action)
}

    return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} 
    dialogsPage={state}/>)
}

export default dialogsContainer;