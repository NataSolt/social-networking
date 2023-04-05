import React from "react";
import './Message.css';


function Message(props) {
    

    return <>
    <li className="dialogs__message">
    <img className="dialogs__message-avatar" src={props.avatar} alt='фото'/>
    {props.message}
    </li> 
    
    </>
}

export default Message;