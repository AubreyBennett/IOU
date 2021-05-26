import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import LoginNavbar from "./components/Login-Navbar/loginnav";
import Wrapper from "./components/Wrapper/wrapper";
import LoginSignup from "./pages/loginSignup"
import Dashboard from "./pages/dashboard";
import NewCircle from "./pages/newcircle";
import CirclePage from "./pages/circlepage";
import Invite from "./pages/invitepage";
import Transactions from "./pages/transactionpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import RenderNav from "./components/RenderNav"

function App() {

// setting circle state
const [ circleState, setCircleState] = useState({
  circleID: 0
});

// set circle state
const handleCircle = (id) => {
  setCircleState({
    circleID: id
  })

}

// setting user state

  const [userState, setUserState] = useState({
    loggedIn: false,
    userId: 0
  })

  const handleLogin = () => {
    setUserState({
      loggedIn: true
    });
  }

  

  let history = useHistory();
  useEffect(() => {
    // authcheck

    fetch("/api/users/authcheck", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserState({
          loggedIn: true,
          userId: data.userId
        })
      })
      .catch(err => {
        console.log(err);
        history.push("/login");
      });

   }, [history]);


  const handleLogout = () => {
    console.log("here");
    fetch("api/users/logout", {
      method: "POST",
      headers: 
      { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(data => console.log(data))
  };

  console.log(userState);
  return (

    <Router>
      <div>
        <RenderNav userState={userState} handleLogout={handleLogout} />
        <Wrapper>
          <Route exact path={["/", "/dashboard"]} component={Dashboard} />
          <Route
            exact path='/login'
            component={() => <LoginSignup handleLogin={handleLogin} handleLogout={handleLogout}/>}
          />
          <Route
            exact path='/newcircle'
            component={() => <NewCircle userId={userState.userId} />}
          />
          <Route
            exact path='/circlepage'
            component={() => <CirclePage userId={userState.userId} circleState={circleState}/>}
          />
          <Route
            exact path='/invitepage'
            component={() => <Invite userId={userState.userId} handleCircle={handleCircle} />}
          />
          <Route
            exact path='/transaction'
            component={() => <Transactions userId={userState.userId} />}
          />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
