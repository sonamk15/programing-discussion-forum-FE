import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const isAuthenticated = localStorage.getItem("userdetails");

export const PrivateRoute = ({
    component: Component,
    ...rest
  }) => (
      <Route {...rest} component={(props) => (
        isAuthenticated ? (
              <Component {...props} />
        ) : (
            <Redirect to="/" />
          )
      )} />
);

export default PrivateRoute;