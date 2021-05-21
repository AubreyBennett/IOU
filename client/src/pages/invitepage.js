
import React, {useState, useEffect} from 'react';
import InviteCard from '../components/Invite/invitecard'


function Invite(props) {
  // get all transactions associated with a user
  const [inviteState, setInviteState] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(`/api/users/`, options)
      .then(res => res.json())
      .then(data => { setInviteState(data) }
      ).catch(err => {
        console.log(err)
      })

  }, []);

  return (
    <>
      <div className="card bg-info" style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1>Invite Page</h1>
      </div>

      { inviteState.map((element)=>
            <InviteCard data={element} />
          )}
      
      <label for="groups">Choose a Circle Name:</label>

      <select name="groups" id="cars">
        <option value="group">{props.group}</option>

      </select>
      <button className="w-20 btn btn-lg btn-info" type="button" onClick={(e) => {
        e.preventDefault();
        window.location.pathname = '/invitepage';
      }} id="button-addon2">Submit</button>
    </>
  );
}

export default Invite;