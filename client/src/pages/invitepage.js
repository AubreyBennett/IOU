import React from 'react';

function Invite() {
  return (
    <>
      <div className="card bg-info" style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1>Invite Page</h1>
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="First Name" aria-label="First Name" />
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" />
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Email" aria-label="Email" />
      </div>
      <label for="groups">Choose a Group Name:</label>

      <select name="groups" id="cars">
        <option value="group1">Group 1</option>
        <option value="group2">Group 2</option>
        <option value="group3">Group 3</option>
        <option value="group4">Group 4</option>
      </select>
      <button className="w-20 btn btn-lg btn-info" type="button" onClick={(e) => {
        e.preventDefault();
        window.location.pathname = '/invitepage';
      }} id="button-addon2">Submit</button>
    </>
  );
}

export default Invite;