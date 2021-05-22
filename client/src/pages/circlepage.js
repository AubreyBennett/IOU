import React, { useState, useEffect } from 'react';

function CirclePage(props) {

  console.log(props)

  useEffect(() => {
    const transactions = {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      }
    }

      const url = 'api/transactions/circle/' + props.circleState.circleID

    fetch(url, transactions)
    .then( (data) => data.json() ) 
    .then((data) => {console.log(data)})
  })



  return (
    <>
      <div className="card bg-info" style={{ textAlign: "center", backgroundColor: "blue", marginBottom: "50px" }}>
        <h1>My Group Page</h1>
      </div>
      <div className="card text-center" style={{ marginBottom: "50px"}}>
        <div className="card-header">
          My Transactions
      </div>
        <div className="card-body">
          <p className="card-text">Where all the transactions go</p>
        </div>
      </div>
      <div className="card text-center" style={{ marginBottom: "50px"}}>
        <div className="card-body">
          <p className="card-text">Math stuff</p>
        </div>
      </div>
      <button className="w-20 btn btn-lg btn-info" type="button" onClick={(e) => {
        e.preventDefault();
        window.location.pathname = '/transaction';
      }} id="button-addon2">Pay Now</button>
      <button className="w-20 btn btn-lg btn-info" type="button" onClick={(e) => {
        e.preventDefault();
        window.location.pathname = '/invitepage';
      }} id="button-addon2">Invite</button>
    </>
  );
}

export default CirclePage;