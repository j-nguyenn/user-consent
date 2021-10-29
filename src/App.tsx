import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ConsentList } from "./features/consent/ConsentList";
import { ConsentForm } from "./features/consent/ConsentForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="side-bar">
          <Link to="/form" className="side-bar-item">
            Give consent
          </Link>
          <Link to="/list" className="side-bar-item">
            Collected consents
          </Link>
        </div>
        <Switch>
          <Route path="/form">
            <ConsentForm />
          </Route>
          <Route path="/list">
            <ConsentList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
