import React, { useState, useEffect } from 'react';
import TransactionCard from '../components/Transaction/transaction';


function Transaction(props) {

  // const[circleState, setCircleState] = useState([]);

  const [submitState, setSubmitState] = useState({

    circleID: 0,
    users: []

  });
  console.log(props.userId)
  // get all transactions associated with a user
  const [transactionState, setTransactionState] = useState([]);


  const url = '/api/transactions/user/' + props.userId

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTransactionState(data);
      }
      ).catch(err => {
        console.log(err)
      })


    // route for fetching circles, leaving for future development
    // const url2 = "/api/circles/user/" + props.userId

    //   console.log(url)

    //   const optionsCircles = {

    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    //   }
    //   fetch(url2, optionsCircles)
    //     .then(res => res.json())
    //     .then(data => { 
    //       console.log(data);
    //       setCircleState(data);
    //       setSubmitState({...submitState, circleID: data[0].id})
    //     }
    //     ).catch(err => {
    //       console.log(err)
    //     })


  }, []);





  return (
    <>
      <div className="card bg-info" style={{ textAlign: "center", marginBottom: "50px" }}>


        <h1>Transactions Page</h1>
      </div>
      <div className="card text-center" style={{ marginBottom: "50px" }}>
        <div className="card-header">
          My Transactions
      </div>
        <div className="card-body">
          <p className="card-text">Where all the transactions go</p>
          {transactionState.map((element) =>
            <TransactionCard data={element} />
          )}

        </div>
      </div>
      {/* do we need this if we have a drop down menu? */}

      <label for="transactions" style={{ margin: '5px' }}>Choose a Transaction to Pay :</label>

      <select name="circle" id="circle" onChange={(e) => {
        setSubmitState({
          ...submitState, circleID: parseInt(e.target.value)
        })
        setTransactionState({
          ...transactionState, id: parseInt(e.target.id)
        })
      }}>
        {transactionState.map((e) => <option value={e.id}>{e.description} {e.value}</option>)}

      </select>
      {/* <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Payment Amount" aria-label="Enter Payment Amount" />
      </div> */}
      <button
        className="w-20 btn btn-lg btn-info"
        type="button"
        style={{ margin: "5px" }}
        onClick={() => {
          const tId = parseInt(transactionState[0].id);
          const url = "/api/transactions/" + tId;
          console.log(url);

          const payTransaction = {

            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
             
            },
            body: JSON.stringify({
              id: tId,
              value: 0
            }),
          }
          fetch(url, payTransaction)
            .then(res => res.json())
            .then(data => {
              console.log(data);
            }
            ).catch(err => {
              console.log(err)
            });

          window.location.pathname = '/transaction';
        }} id="button-addon2">Pay Now</button>
    </>
  );
}

export default Transaction;