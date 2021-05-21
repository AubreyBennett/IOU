import { prependOnceListener } from 'npm';
import React from 'react';
import InviteCard from '../components/Invite/invitecard'

function Invite(props) {
  return (
    <>
      <div className="card bg-info" style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1>Invite Page</h1>
      </div>
      <InviteCard />
      <label for="groups">Choose a Circle Name:</label>

      <select name="groups" id="cars">
        <option value="group">{props.group[i]}</option>

      </select>
      <button className="w-20 btn btn-lg btn-info" type="button" onClick={(e) => {
        e.preventDefault();
        window.location.pathname = '/invitepage';
      }} id="button-addon2">Submit</button>
    </>
  );
}

export default Invite;