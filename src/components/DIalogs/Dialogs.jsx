import React from "react";
//import { dialogsData, messagesData } from "../../redux/state";
import './Dialogs.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
//import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";



function Dialogs(props){
    let state = props.dialogsPage;

let dialosElement = state.dialogsData.map((elem, index)=> <DialogsItem key={index} name={elem.name} id={elem.id} avatar={elem.avatar}/>)
let messagesElement = state.messagesData.map((elem, index)=><Message key={index} message={elem.message} id={elem.id} avatar={elem.avatar}/>)
let newMessageBody = state.newMessageText;

// let newDialogsElement = React.createRef();
    let onSendMessageClick =()=> {
        props.sendMessage();
    // props.store.dispatch(addMessageActionCreator());
    }
function onNewMessageChange(e) {
    let body = e.target.value;
    props.updateNewMessageBody(body);
//props.store.dispatch(updateNewMessageTextActionCreator(body))
    // let text = newDialogsElement.current.value;
    // let action = updateNewMessageTextActionCreator(text) 
    // props.dispatch(action)
}

    return <div className="dialogs">
<ul className="dialogs__items">
{dialosElement}
</ul>
<ul className="dialogs__messages">
 {messagesElement}    
 <div className="dialogs__container">
    <textarea className="dialogs__textarea" value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"/>
        <button  className="dialogs__button" onClick={onSendMessageClick}>add</button>
        </div>               
</ul>

    </div>
}

export default Dialogs;