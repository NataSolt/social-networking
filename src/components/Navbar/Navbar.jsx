import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

function Navbar(props) {
    
 

    return <nav className='nav'>
    <div className="nav__container">
    <NavLink to ='/profile' className="nav__item">Profile</NavLink>
   
    <NavLink to='/dialogs' className="nav__item">Messages</NavLink>
    <NavLink to='/news' className="nav__item">News</NavLink>
    <NavLink to='/muisic' className="nav__item">Music</NavLink>
    <NavLink to='/settings' className="nav__item">Settings</NavLink>
    </div>
   <Friends friendsData={props.friendsData}/>
    
          </nav>
}

export default Navbar;