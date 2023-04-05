import React from "react";
//import {postData} from "../../../constants/constants";
import './MyPosts.css';
import Posts from "./Post/Post";

function MyPosts(props) {

    let result = props.postData.map(item => {
        return <Posts key={item.id} message= {item.message} like = {item.like} id={item.id} />
    })

    let newPostElement = React.createRef();

    let addPost =()=> {
        let text = newPostElement.current.value;
         props.addPost(text);
         newPostElement.current.value = '';
    }

    return <section className="myPosts">
    <h2 className="title">myPost</h2>
    <div className="myPost__container"> 
    <textarea className="myPost__textarea" ref={newPostElement}/>
    <button  className="myPost__button" onClick={addPost}>add</button>
    </div>
    {result}
    </section>
}

export default MyPosts;