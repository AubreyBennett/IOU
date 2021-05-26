import React from 'react';
import Login from "./login";
import Signup from "./signup";

function LoginSignup(props) {
    // props.handleLogout();

    return (
        <>
        <Login handleLogin={props.handleLogin} />
        <Signup handleLogin={props.handleLogin} />
        </>
    )
}

export default LoginSignup;