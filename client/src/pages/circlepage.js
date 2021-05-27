import React, {useEffect, useState} from 'react';
import Header from '../components/Header/header';

function CirclePage(props) {

  const [circleState, setCircleState] = useState([]);

  const [submitState, setSubmitState] = useState({

    circleID: 0,
    users: []

  });

  console.log(props.userId);
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

const url = "/api/circles/user/" + props.userId

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
        setCircleState(data);
        console.log(data);
        setSubmitState({ ...submitState, circleID: data[0].id });
      }
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
      <div className="card text-center" style={{ marginBottom: "50px" }}>

      {/* <div className="card text-center" style={{ marginBottom: "50px" }}>

        <div className="card-body">
          <p className="card-text">Math stuff</p>
        </div>
      </div> */}
      
      <label for="cars">Choose a Circle Name:</label>

      <select name="circle" id="circle" onChange={(e) => {
                  setSubmitState({
                    ...submitState, circleID: parseInt(e.target.value)
                  })
                }}>
                  {circleState.map((e) => <option value={e.id}>{e.name}</option>)}


      </select>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Payment Description" aria-label="Enter Payment Description" />
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Payment Amount" aria-label="Enter Payment Amount" />
      </div>
      <button className="w-20 btn btn-lg btn-info" 
      type="button" 

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