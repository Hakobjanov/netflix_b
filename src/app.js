import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages/index.js";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Route exact path='/browse'>
        <Browse />
      </Route>
      <Route exact path='/signin'>
        <Signin />
      </Route>
      <Route exact path='/signup'>
        <Signup />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path="/user">
        <p>Hello i am a user</p>
      </Route>
    </Router>
  );
}

export default App;
