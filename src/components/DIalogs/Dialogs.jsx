import React from "react";
//import { dialogsData, messagesData } from "../../redux/state";
import './Dialogs.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";



function Dialogs(props){

let dialosElement = props.dialogsData.map(elem=> <DialogsItem name={elem.name} id={elem.id} avatar={elem.avatar}/>)
let messagesElement = props.messagesData.map(elem=><Message message={elem.message} id={elem.id} avatar={elem.avatar}/>)
let newDialogsElement = React.createRef();
    let addMessage =()=> {
    props.dispatch(addMessageActionCreator());
    }
function onMessageChange() {
    let text = newDialogsElement.current.value;
    let action = updateNewMessageTextActionCreator(text) 
    props.dispatch(action)
}

    return <div className="dialogs">
<ul className="dialogs__items">
{dialosElement}
</ul>
<ul className="dialogs__messages">
 {messagesElement}    
 <div className="dialogs__container">
    <textarea className="dialogs__textarea" value={props.newMessageText} ref={newDialogsElement} onChange={onMessageChange}/>
        <button  className="dialogs__button" onClick={addMessage}>add</button>
        </div>               
</ul>

    </div>
}

export default Dialogs;