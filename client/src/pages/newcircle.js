import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

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
      <div className="card bg-info" style={{ textAlign: "center", marginBottom: "50px" }}>


        <h1>New Circle Page</h1>
      </div>
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
      <button 
      className="w-20 btn btn-lg btn-info" 
      type="button"
       onClick={(e) => 
        handleCircleCreate(e)} 
        id="button-addon2">Submit</button>
    </>
  );
}

export default NewGroup;