import React from "react";
import { NavLink } from "react-router-dom";

import './DialogsItem.css';

function DialogsItem(props){
return <li className="dialogsitem__container">
<img className="dialogsitem__avatar" src={props.avatar} alt='фото'/>
<NavLink to={'/dialogs/'+ props.id} className="dialogsitem" >{props.name}</NavLink> 

</li>
}

export default DialogsItem;