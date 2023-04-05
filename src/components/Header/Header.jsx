import React from "react";
import logo from './../../images/logo.webp';
import c from './Header.module.css'

function Header(){

    return <header className={c.header}>
    <img className={c.logo} src={logo}  alt="logo" />
  </header>
}
export default Header;