import React from "react";
import baner from './../../../images/baner.jpg';
import avatar from './../../../images/kotik-avatar.jpg';
import './ProfileInfo.css';

function ProfileInfo() {


    return <div className='profileinfo'>
    <div>
    <img className='profileinfo__baner' src= {baner} alt ='baner' />
    </div>
    <img  className='profileinfo__avatar' src = {avatar} alt = 'avatar' />
    </div>
}

export default ProfileInfo;