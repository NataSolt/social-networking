import React from "react";
import baner from './../../../images/baner.jpg';
import image from "../../../images/1617045949_35-p-dmitrii-nagiev-39.jpg";
import './ProfileInfo.css';
import Preloader from "../../commen/preloader/Preloader";

function ProfileInfo(props) {
    
if(!props.profile) {
    return <Preloader />
}

    return <div className='profileinfo'>
    <div>
    <img className='profileinfo__baner' src= {baner} alt ='baner' />
    </div>
    <img  className='profileinfo__avatar' src ={props.profile.photos.small != null ? props.profile.photos.small : image}  alt = 'avatar' />
    <p>{props.profile.fullName}</p>
    <p>{props.profile.aboutMe}</p>
    <p>{props.profile.contacts.facebook} {props.profile.contacts.github}</p>
    </div>
}

export default ProfileInfo;