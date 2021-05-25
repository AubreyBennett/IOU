import React from "react";
import Navbar from "../Navbar/navbar";
import LoginNav from "../Login-Navbar/loginnav";

function RenderNav (props) {

    console.log(props)

    if ( props.userState.loggedIn ) {
        return (
            <Navbar handleLogout={props.handleLogout}/>
        )
    } else { 
        return(
            <LoginNav />
        )
    }
    
};

export default RenderNav;