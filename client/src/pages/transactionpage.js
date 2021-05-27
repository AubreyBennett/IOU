import React, { useState, useEffect } from 'react';
import TransactionCard from '../components/Transaction/transaction';
import Header from '../components/Header/header';


function Transaction(props) {


  // get all transactions associated with a user
  const [transactionState, setTransactinState] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(`/api/transactions/`, options)
      .then(res => res.json())
      .then(data => { setTransactinState(data) }
      ).catch(err => {
        console.log(err)
      })

  }, []);


  return (
    <>
      <div>
      <Header 
      header="Transactions Page"
      />
      <div className="card text-center" style={{ marginBottom: "50px" }}>
        <div className="card-header">
          hello
      </div>
        <div className="card-body">
          <p className="card-text">Where all the transactions go</p>
         { transactionState.map((element)=>
            <TransactionCard data={element} />
          )}

        </div>
      </div>
      {/* do we need this if we have a drop down menu? */}
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Group Name" aria-label="Enter Group Name" />
      </div>
      <label for="cars">Choose a Circle Name:</label>

      <select name="circle" id="circle">
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
      </div>
    </>
  );
}

export default Transaction;