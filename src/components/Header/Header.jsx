import React from "react";
import logo from './../../images/logo.webp';
import c from './Header.module.css'
import { NavLink } from "react-router-dom";

function Header(props){

    return <header className={c.header}>
    <img className={c.logo} src={logo}  alt="logo" />
    <div className={c.loginBlock}>
    {props.isAuth? props.login : <NavLink to={'/login'}>Login</NavLink>}
      
    </div>
  </header>
}
export default Header;