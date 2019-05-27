import React from "react";
import "./App.css";
import Dashboard from "../dashboard/dashboard.js";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {authorizeSpotify} from '../../services/api.spotify';
import config from '../../config/config.json';
import URLS from '../../constants/URLS.json';

function App() {
  console.log('config')
  console.log(config);

  console.log('URLS')
  console.log(URLS);
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
	// authorizeSpotify();
}else{
  // set token in localstorage and redux store
  console.log(_token);
  localStorage.setItem('access_token' , _token);
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
