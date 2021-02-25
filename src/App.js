import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** reducer */
import { reducer, StateProvider } from "./utilities";

/* pages */
import { Home, Login } from "./pages";

/* css */
import "./style.css";

function App() {
  const [baseLayer, setBaseLayer] = useState({
    user: {
      name: "",
    },
  });
  return (
    <>
      <StateProvider reducer={reducer} initialState={baseLayer}>
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
      </StateProvider>
    </>
  );
}

export default App;
