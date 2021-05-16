import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Wrapper from "./components/Wrapper/wrapper";
import LoginSignup from "./pages/loginSignup"
import Dashboard from "./pages/dashboard";
import NewCircle from "./pages/newcircle";
import CirclePage from "./pages/circlepage";
import Invite from "./pages/invitepage";
import Transactions from "./pages/transactionpage";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={LoginSignup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/newcircle" component={NewCircle} />
          <Route exact path="/circlepage" component={CirclePage} />
          <Route exact path="/invitepage" component={Invite} />
          <Route exact path="/transaction" component={Transactions} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
