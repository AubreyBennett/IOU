import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../components/Header/header';
import DashCard from '../components/Dashboard/dashboardcomponent'

function Dashboard(props) {
  
  const history = useHistory();

  const [circleState, setCircleState] = useState([]);

  const [submitState, setSubmitState] = useState({

    circleID: 0,
    users: []

  });

 
  useEffect(() => {
    fetch("/api/users/authcheck", {
      method: "GET"
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          console.log("200!!!");
        } else {
          console.log("401!!!");
          history.push("/login");
        }
      })
      .catch(err => {
        console.log(err);
        history.push("/login")
      });

    const url = "/api/circles/user/" + props.userID

    const optionsCircles = {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(url, optionsCircles)
      .then(res => res.json())
      .then(data => {
        
        setCircleState(data);
        setSubmitState({ ...submitState, circleID: data[0].id })
      }
      ).catch(err => {
        console.log(err)
      })


  }, []);



  return (
    <>
      <div>
        <Header
          header="Welcome "{...props.name}
        />
        {/* <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div> */}
      </div>
      <div className="row" style={{ justifyContent: 'center' }}>
        <button type="button" className="btn btn-info" onClick={(e) => {
          e.preventDefault();
          window.location.href = './newcircle';
        }} >Create a Circle</button>
      </div>
      <div className="row " style={{ justifyContent: "center" }} >
      {circleState.map((e) =>
              <DashCard data={e} />
            )}
        </div>
      <div className="row" style={{ justifyContent: 'center' }}>
        <div className="card text-dark bg-info mb-3" style={{ maxWidth: '18rem' }}>
          <button type="button" className="btn btn-info" onClick={(e) => {
            e.preventDefault();
            window.location.href = './transaction';
          }}>Transactions</button>
        </div>
        {/* <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div> */}
      </div>
    </>

  );
}

export default Dashboard;