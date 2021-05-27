import React, {useEffect, useState} from 'react';
import Header from '../components/Header/header';

function CirclePage() {
  // creating state to capture all the circle transactions
  const [transactionState, newTransactionState] = useState();


  function handleSubmit(e) {
    e.preventDefault();
    fetch('/api/transactions', {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...transactionState
      })
    })
    .then((data) => {
      console.log("Transaction successful");
    })
    .catch();
  }

  function handleTransaction(e){
    
  }

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(`/api/transactions/circle/user`, options)
      .then(res => res.json())
      .then(data => { console.log(data)}
      ).catch(err => {
        console.log(err)
      })

  }, []);


    




  return (
    <>
    <div>
      <Header 
      header="My Circle Page"
      />
      <div className="container">
      <div className="card text-center" style={{ marginBottom: "50px" }}>
        <div className="card-header">
          My Transactions
      </div>
        <div className="card-body">
          <p className="card-text">Where all the transactions go</p>
        </div>
      </div>
      {/* <div className="card text-center" style={{ marginBottom: "50px" }}>
        <div className="card-body">
          <p className="card-text">Math stuff</p>
        </div>
      </div> */}
      <label for="cars">Choose a Circle Name:</label>

      <select name="circle" id="circle">
        <option value="volvo">Group 1</option>
        <option value="saab">Group 2</option>
        <option value="mercedes">Group 3</option>
        <option value="audi">Group 4</option>
      </select>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Payment Description" aria-label="Enter Payment Description" />
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Payment Amount" aria-label="Enter Payment Amount" />
      </div>
      <div className="row" style={{ justifyContent: 'center' }}>
      <button className="w-20 btn btn-lg btn-info" 
      type="button" 
      style ={{marginRight: '100px'}}
      onClick={(e) => {
        e.preventDefault();
        window.location.pathname = '/transaction';
      }} id="button-addon2">Pay Now</button>
      <button className="w-20 btn btn-lg btn-info" type="button" onClick={(e) => {
        e.preventDefault();
        window.location.pathname = '/invitepage';
      }} id="button-addon2">Invite</button>
      </div>
      </div>
      </div>
    </>
  );
}

export default CirclePage;