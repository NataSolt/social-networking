import React from "react";
import Friend from "./Friend/Friend";
import './Friends.css'

function Friends(props){
    
 let friendsElem = props.friendsData.map(elem=> {
    return <Friend avatar={elem.avatar} name={elem.name} id={elem.id}/>
 })
   

    return <div className="friends">
    <h2 className="friends__title">Friends</h2>
    <div className="friends__box">
    {friendsElem}
    </div>
    
</div>
}

export default Friends