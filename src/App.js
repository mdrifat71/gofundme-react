import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* pages */
import { Home, Login } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
