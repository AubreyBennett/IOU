import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Wrapper from "./components/Wrapper/wrapper";
import LoginSignup from "./pages/loginSignup"
import Dashboard from "./pages/dashboard";
import NewGroup from "./pages/newgroup";
import GroupPage from "./pages/grouppage";
import Invite from "./pages/invitepage";
import Transactions from "./pages/transaction";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={LoginSignup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/newgroup" component={NewGroup} />
          <Route exact path="/grouppage" component={GroupPage} />
          <Route exact path="/invitepage" component={Invite} />
          <Route exact path="/transaction" component={Transactions} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
