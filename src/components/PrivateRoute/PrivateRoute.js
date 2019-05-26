import React from 'react';
import {Route , Redirect} from 'react-router-dom';

import {withRouter} from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  var authUser = null;
  if (!authUser) {
    return <Route
    {...rest}
    component={Component}
  />;
  }else{
    return <Redirect
    to={{
      pathname: "/login",
      // state: { from: this.props.location }
    }}
  />
  }
    
}

export default withRouter(PrivateRoute);