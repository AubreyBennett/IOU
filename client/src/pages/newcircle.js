import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Header from '../components/Header/header';

function NewGroup({userId}) {

  console.log(userId);

  let history = useHistory();

  const [circleState, setCircleState] = useState({
    circle_name: ""
  });

  const handleCircleCreate = (e) => {
    e.preventDefault();
    const data = {
      circle_name: circleState.circle_name
    }

    const body = JSON.stringify(data)

    fetch("/api/circles", {
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body
    })
    .then(res => res.json())
    .then(data => {
      // Adding User to Circle
      fetch("/api/usercircles", {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          circle_id: data.id,
          user_id: userId
        })
      })
      console.log(data);
      history.push("/invitepage");
    })

  }

  return (
    <>
      <div>
      <Header 
      header="New Circle Page"
      />
      <div className="container">
      <div className="input-group mb-3">
        <input 
        type="text" 
        className="form-control" 
        placeholder="Enter Circle Name" 
        aria-label="Enter Circle Name" 
        onChange={(event) => {
          const { value } = event.target;
          setCircleState({circle_name: value })
        }}
        />
      </div>
      <div className="row" style={{ justifyContent: 'center' }}>
      <button 
      className="w-20 btn btn-lg btn-info" 
      type="button"
       onClick={(e) => 
        handleCircleCreate(e)} 
        id="button-addon2">Submit</button>
        </div>
        </div>
        </div>
    </>
  );
}

export default NewGroup;