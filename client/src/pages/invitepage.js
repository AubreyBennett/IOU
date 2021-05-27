import React, { useState, useEffect } from 'react';
import InviteCard from '../components/Invite/invitecard'
import Header from '../components/Header/header';
import { useHistory } from "react-router-dom"

function Invite(props) {

  const handleCircle = props.handleCircle

  let history = useHistory();

  console.log(props);
  // get all transactions associated with a user
  const [inviteState, setInviteState] = useState([]);
  const [circleState, setCircleState] = useState([]);

  const [submitState, setSubmitState] = useState({

    circleID: 0,
    users: []

  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/usercircles/addUsers", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...submitState
      })
    })
      .then((data) => {
        handleCircle(submitState.circleID);
        history.push("/circlepage")
      })
      .catch()

  }

  function handleCheckbox(e) {
    const users = [...submitState.users];
    users.push(e.target.value)

    setSubmitState({ ...submitState, users });
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
          header="Invite Page"
        />
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            {inviteState.map((element) =>
              <InviteCard data={element} handleCheckbox={handleCheckbox} />
            )}
            <div className="row" style={{ justifyContent: 'center', marginTop: '100px' }}>
              <label for="circle">Choose a Circle Name:</label>
              {/* <div className="row" style={{ justifyContent: 'center', marginTop: '50px' }}> */}
                <select name="circle" id="circle" onChange={(e) => {
                  setSubmitState({
                    ...submitState, circleID: parseInt(e.target.value)
                  })
                }}>
                  {circleState.map((e) => <option value={e.id}>{e.name}</option>)}


                </select>
                <button className="w-20 btn btn-lg btn-info" type="button" onClick={(e) => {
                  handleSubmit(e);

                }} id="button-addon2">Submit</button>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Invite;