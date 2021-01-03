import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const isAuthenticated = localStorage.getItem("userDetails");

export const PublicRoute = ({
    component: Component,
    ...rest
  }) => (
      <Route {...rest} component={(props) => (
        !isAuthenticated ? (
              <Component {...props} />
        ) : (
            <Redirect to="/query" />
          )
      )} />
);

export default PublicRoute;