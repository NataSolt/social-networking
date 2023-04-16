import React from "react";
import './Navbar.css'

import Navbar from "./Navbar";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        friendsData: state.navbarPage.friendsData
    }
   }
   
   
   const NavbarContainer = connect(mapStateToProps) (Navbar)
   
   export default NavbarContainer;
   