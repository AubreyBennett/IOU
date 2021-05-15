import React, { useState } from 'react';
import { Redirect } from 'react-router';

function Signup() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUp = (e) => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    }
    const body = JSON.stringify(data);
    
    fetch(
      "/api/users",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body
      }
      
    ).then(
      () => {
        console.log('request sent!')
      }
    )
      .catch(
        (err) => {
          console.log(err)
        })
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    <Redirect to="/dashboard" />
  }


  return (
    <div className="container col-lg-10 fs-4">
      <div className="row align-items-center">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">

          <form className="p-4 p-md-5 border rounded-5 bg-info">
            <div className="form-floating mb-3">
              {/* First Name */}
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                aria-label="default input example"
                onChange={e => setFirstName(e.target.value)}
              ></input>
            </div>
            {/* Last Name */}
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                aria-label="default input example"
                onChange={e => setLastName(e.target.value)}
              ></input>
            </div>
            {/* Email */}
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email address"
                aria-label="default input example"
                onChange={e => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                aria-label="default input example"
                onChange={e => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="mt-5">
              <button
                className="w-100 btn btn-lg btn-info"
                type="submit"
                onClick={(e) => handleSignUp(e)}
                id="signUpBtn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;