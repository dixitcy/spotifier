import React from "react";
import "./App.css";
import "./twemoji-awesome.css";
import Dashboard from "../dashboard/dashboard.js";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {authorizeSpotify} from '../../services/api.spotify';

function App() {
  var authUser = null;
  const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
let _token = hash.access_token;
if(!_token){
	authorizeSpotify();
}else{
	// set token in localstorage and redux store
}
  return (
    <Router style={{ height: "100%" }}>
      <div className="App">
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
