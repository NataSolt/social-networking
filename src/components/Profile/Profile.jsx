import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {

    return <section className='profile'>
    <ProfileInfo />
    <MyPostsContainer store={props.store}
    //  postData={props.profilePage.postData} 
    // dispatch={props.dispatch} newPostText={props.profilePage.newPostText} 
 />
    </section>
}

export default Profile;