import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Login(props) {

  let history = useHistory();

  const [loginState, setLoginState] = useState({
    email: "",
    password: ""
  })

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: loginState.email,
      password: loginState.password
    }
    const body = JSON.stringify(data)

    fetch("/api/users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.message === "Incorrect email or password, please try again") {
          alert(data.message)
        } else {
          props.handleLogin();
          history.push("/dashboard");
        }

      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <div className="container col-lg-10 fs-4">
        <div className="row align-items-center">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <form className="p-4 p-md-5 border rounded-5 bg-info">
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email address"
                  aria-label="default input example"
                  onChange={(event) => {
                    const { value } = event.target;
                    setLoginState({ ...loginState, email: value })
                  }}
                ></input>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  aria-label="default input example"
                  onChange={(event) => {
                    const { value } = event.target;
                    setLoginState({ ...loginState, password: value })
                  }}
                ></input>
              </div>
              <div className="mt-5">
                <button
                  className="w-100 btn btn-lg btn-info"
                  type="submit"
                  onClick={(e) => handleLogin(e)}
                >Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;