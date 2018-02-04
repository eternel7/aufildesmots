import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

const authentication = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
};

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    (authentication.isAuthenticated === true)
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/home',
        state: {from: props.location}
      }}/>
  )}/>
);

export default PrivateRoute;