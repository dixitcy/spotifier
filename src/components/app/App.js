import React from "react";
import "./App.css";
import "./twemoji-awesome.css";
import theme from "../../config/theme";
import Dashboard from "../dashboard/dashboard.js";
import Login from "../login/login";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
  // firebase.isInitialized().then((user) => {
  // 	console.log(user);
  // });
  var authUser = null;
  return (
    <Router style={{ height: "100%" }}>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/dashboard" />

          <Route
            path="/login"
            render={() => (authUser ? <Redirect to="/dashboard" /> : <Login />)}
          />

          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
