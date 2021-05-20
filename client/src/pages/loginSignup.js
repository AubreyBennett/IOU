import React from 'react';
import Login from "./login";
import Signup from "./signup";

function LoginSignup(props) {
    return (
        <>
        <Login handleLogin={props.handleLogin} />
        <Signup handleLogin={props.handleLogin} />
        </>
    )
}

export default LoginSignup;