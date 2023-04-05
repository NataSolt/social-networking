import React from "react";
import ava from './../../../../images/mult-ava.jpg'
import './Post.css';

function Posts(props) {


    return <div className='post'>
    <div className="post__container">
    <img className="post__img" src={ava} alt='фото пользователя'/>
    <div>{props.message}</div>
    </div>
    <button className="post__like">like {props.like}</button>
    
    </div>
}

export default Posts;