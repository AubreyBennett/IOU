import React from "react";
import Navbar from "../Navbar/navbar";
import LoginNav from "../Login-Navbar/loginnav";

function RenderNav (userState) {

    if ( userState === true ) {
        return (
            <Navbar />
        )
    } else { 
        return(
            <LoginNav />
        )
    }
    
};

export default RenderNav;