import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    

    return <section className='profile'>
    <ProfileInfo />
    <MyPosts postData={props.postData} addPost={props.addPost}/>
    </section>
}

export default Profile;