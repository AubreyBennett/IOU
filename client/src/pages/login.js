import React from 'react';

function Login() {
  return (
    <>
      <div className="container col-lg-10 fs-4">
        <div className="row align-items-center">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <form className="p-4 p-md-5 border rounded-5 bg-info">
              <div className="form-floating mb-3">
                <input className="form-control" type="email" placeholder="Email address" aria-label="default input example"></input>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" type="password" placeholder="Password" aria-label="default input example"></input>
              </div>
              <div className="mt-5">
                <button className="w-100 btn btn-lg btn-info" type="submit" onClick={(e) => {
                  e.preventDefault();
                  window.location.pathname = '/dashboard';
                }} id="button-addon2">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container col-lg-10 fs-4">
        <div className="row align-items-center">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <form className="p-4 p-md-5 border rounded-5 bg-info">
              <div className="form-floating mb-3">
                <input className="form-control" type="password" placeholder="First Name" aria-label="default input example"></input>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" type="password" placeholder="Last Name" aria-label="default input example"></input>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" type="email" placeholder="Email address" aria-label="default input example"></input>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" type="password" placeholder="Password" aria-label="default input example"></input>
              </div>
              <div className="mt-5">
                <button className="w-100 btn btn-lg btn-info" type="submit" onClick={(e) => {
                  e.preventDefault();
                  window.location.pathname = '/dashboard';
                }} id="button-addon2">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;