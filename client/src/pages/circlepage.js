import React, { useEffect, useState } from 'react';
import Header from '../components/Header/header';

function CirclePage(props) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const usercircleURL = "/api/usercircles/" + props.userId + "/" + selectedCircle;

    fetch(usercircleURL)
      .then(res => res.json())
      .then(usercircle_id => {
        const transactionData = {
          description: submitState.description,
          usercircle_id: usercircle_id,
          value: submitState.value
        }
        const body = JSON.stringify({
            ...transactionData
          })
        fetch('/api/transactions', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body
        }).then(res => res.json())
        .then(data => console.log(data))
      })

  }

  // Have our selected circle
  const [circleState, setCircleState] = useState([{
    id: 0,
    name: ""
  }]);

  // State to store our current selected circle
  const [selectedCircle, setSelectedCircle] = useState()

  const [submitState, setSubmitState] = useState({
    description: "",
    value: 0,
  });

  // creating state to capture all the circle transactions
  // const [transactionState, newTransactionState] = useState();


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch('/api/transactions', {
  //     method: "POST", 
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       ...transactionState
  //     })
  //   })
  //   .then((data) => {
  //     console.log("Transaction successful");
  //   })
  //   .catch();
  // }

  // function handleTransaction(e){

  // }

  const url = "/api/transactions/circle/" + props.circleState.circleID


  useEffect(() => {
    const circleListURL = '/api/circles/user/' + props.userId;
    const circleListOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(circleListURL, circleListOptions)
      .then(res => res.json())
      .then(data => {
        setCircleState(data)
        setSelectedCircle(data[0].id)
      })

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // }
    // fetch(url, options)
    //   .then(res => res.json())
    //   .then(data => { 
    //     console.log(data);
    //     setCircleState(data);
    //     console.log(data);
    //     setSubmitState({ ...submitState, circleID: data[0].id });
    //   }
    //   ).catch(err => {
    //     console.log(err)
    //   })

  }, []);



  return (
    <>

      <div>
        <Header
          header="My Circle Page"
        />
        <form>
          <select id="circleDropdown" name="circle" onChange={(e) => {
            setSelectedCircle(e.target.value)
          }}>
            {circleState.map((e) => <option value={e.id}>{e.name}</option>)}
          </select>
        </form>
        <div className="container">

          <div className="card text-center" style={{ marginBottom: "50px" }}>
            <div className="card-header">
              My Transactions
      </div>
            <div className="card-body">
              <p className="card-text">Where all the transactions go</p>
            </div>
          </div>
          <form>
            <label
              className="form-control"
              for="transaction-description">
              Description: <input
                id="transaction-description"
                onChange={(e) => {
                  setSubmitState({ ...submitState, description: e.target.value })
                }}
              ></input>
            </label>

            <label
              className="form-control"
              htmlFor="transaction-value">
              Value:
              <input
                id="transaction-value"
                onChange={(e) => {
                  setSubmitState({ ...submitState, value: e.target.value })
                }}
              ></input>
            </label>

            <button
              className="w-20 btn btn-lg btn-info"
              onClick={(e) => handleSubmit(e)}>
              Post Transaction
          </button>
          </form>
          <div className="card text-center" style={{ marginBottom: "50px" }}>

            {/* <div className="card text-center" style={{ marginBottom: "50px" }}>

        <div className="card-body">
          <p className="card-text">Math stuff</p>
        </div>
      </div> */}
            {/* FOR FUTURE DEVELOPMENT */}
            {/* <label for="cars">Choose a Circle Name:</label>

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
      </div> */}
            <button className="w-20 btn btn-lg btn-info"
              type="button"

              onClick={(e) => {
                console.log(props.userId)
                // for future development
                // const payTransaction = {

                //   method: 'POST',
                //   headers: {
                //     'Content-Type': 'application/json',

                //   },
                //   body: JSON.stringify({
                //     description: "something",
                //     value: 100,
                //     user
                //   }),
                // }
                // fetch(url, payTransaction)
                //   .then(res => res.json())
                //   .then(data => {
                //     console.log(data);
                //   }
                //   ).catch(err => {
                //     console.log(err)
                //   });

                window.location.pathname = '/transaction';
              }} id="button-addon2" style={{ margin: "5pt" }}>Pay Now</button>
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