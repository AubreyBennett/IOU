
import React, { useState, useEffect } from 'react';
import InviteCard from '../components/Invite/invitecard'


function Invite(props) {

  console.log(props);
  // get all transactions associated with a user
  const [inviteState, setInviteState] = useState([]);
  const[circleState, setCircleState] = useState([]);
  
  const [submitState, setSubmitState] = useState({

    circleID: 0, 
    users: []

  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(submitState);

  }

function handleCheckbox(e){
  const users = [...submitState.users];
  users.push(e.target.value)

  setSubmitState({...submitState, users}); 
  console.log(e.target.value)
}

  useEffect(() => {
    const optionsUsers = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(`/api/users`, optionsUsers)
      .then(res => res.json())
      .then(data => { setInviteState(data) }
      ).catch(err => {
        console.log(err)
      })

    console.log(props.userId);
    

    const url = "/api/circles/user/" + props.userId

    console.log(url)

    const optionsCircles = {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(url, optionsCircles)
      .then(res => res.json())
      .then(data => { 
        console.log(data);
        setCircleState(data);
        setSubmitState({...submitState, circleID: data[0].id})
      }
      ).catch(err => {
        console.log(err)
      })



  }, []);


  return (
    <>
      <div className="card bg-info" style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1>Invite Page</h1>
      </div>

      { inviteState.map((element) =>
        <InviteCard data={element} handleCheckbox={handleCheckbox}/>
      )}

      <label for="circle">Choose a Circle Name:</label>

      <select name="circle" id="circle" onChange={(e)=> {setSubmitState({
        ...submitState, circleID: parseInt(e.target.value)
      })
      }}>
        {circleState.map((e) => <option value={e.id}>{e.name}</option>)}
        

      </select>
      <button className="w-20 btn btn-lg btn-info" type="button" onClick={(e) => {
        handleSubmit(e);
      
      }} id="button-addon2">Submit</button>
    </>
  );
}

export default Invite;