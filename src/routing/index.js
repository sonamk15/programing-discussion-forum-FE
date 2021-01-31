import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { nest } from 'recompose';
import PublicRoute from './publicRouter';
import PrivateRoute from './privateRouter';
import Home from '../components/Home'
import Query from '../components/Post/Query';
import Login from '../components/LoginForm';
import Signup from '../components/Signup';
import  Logout  from  '../components/Logout';
import { createBrowserHistory } from "history";

export const appHistory = createBrowserHistory();

const AppRouter = () => (
    <Router history={appHistory} > 
        <Switch>
            <PublicRoute path='/' component={Home} exact={true}/> 
            <PublicRoute path='/login' component={Login} exact={true}/> 
            <PublicRoute path='/signup' component={Signup} exact={true}/> 
            <PrivateRoute path='/logout' component={Logout} />
            <PrivateRoute path='/query' component={Query} />
        </Switch>
    </Router>
)

export default nest(
    AppRouter,
  );