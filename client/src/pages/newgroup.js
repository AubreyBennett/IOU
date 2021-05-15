import React from 'react';

function NewGroup() {
  return (
    <>
      <div className="card bg-info" style={{ textAlign: "center", marginBottom: "50px" }}>


        <h1>New Group Page</h1>
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Group Name" aria-label="Enter Group Name" />
      </div>
      <button className="w-20 btn btn-lg btn-info" type="button" onClick={(e) => {
        e.preventDefault();
        window.location.pathname = '/grouppage';
      }} id="button-addon2">Submit</button>
    </>
  );
}

export default NewGroup;