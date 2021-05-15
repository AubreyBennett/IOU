import React from 'react';

function Transaction() {
  return (
    <>
      <div className="card bg-info" style={{ textAlign: "center", marginBottom: "50px" }}>


        <h1>Transactions Page</h1>
      </div>
      <div class="card text-center" style={{ marginBottom: "50px"}}>
        <div class="card-header">
          My Transactions
      </div>
        <div class="card-body">
          <p class="card-text">Where all the transactions go</p>
        </div>
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Group Name" aria-label="Enter Group Name" />
      </div>
      <label for="cars">Choose a Group Name:</label>

      <select name="cars" id="cars">
        <option value="volvo">Group 1</option>
        <option value="saab">Group 2</option>
        <option value="mercedes">Group 3</option>
        <option value="audi">Group 4</option>
      </select>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Payment Amount" aria-label="Enter Payment Amount" />
      </div>
      <button className="w-20 btn btn-lg btn-info" type="button" onClick={(e) => {
        e.preventDefault();
        window.location.pathname = '/transaction';
      }} id="button-addon2">Pay Now</button>
    </>
  );
}

export default Transaction;