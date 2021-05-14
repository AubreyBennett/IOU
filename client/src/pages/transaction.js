import React from 'react';

function Transaction() {
  return (
    <>
      <div className="card bg-info" style={{ textAlign: "center", marginBottom: "50px" }}>


        <h1>Transactions Page</h1>
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Group Name" aria-label="Enter Group Name" />
      </div>
    </>
  );
}

export default Transaction;