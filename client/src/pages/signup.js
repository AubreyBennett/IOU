import React from 'react';

function Signup() {
  return (

    <div class="container col-lg-10 fs-4">
      <div class="row align-items-center">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">
          <form class="p-4 p-md-5 border rounded-5 bg-info">
            <div class="form-floating mb-3">
              <input class="form-control" type="name" placeholder="Name" aria-label="default input example"></input>
            </div>
            <div class="form-floating mb-3">
              <input class="form-control" type="email" placeholder="Email address" aria-label="default input example"></input>
            </div>
            <div class="form-floating mb-3">
              <input class="form-control" type="password" placeholder="Password" aria-label="default input example"></input>
            </div>
            <div class="mt-5">
              <button class="w-100 btn btn-lg btn-info" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Signup;