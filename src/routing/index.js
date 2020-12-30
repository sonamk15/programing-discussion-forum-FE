import React from 'react';
import { Router, Switch } from 'react-router-dom';
import {nest} from 'recompose'
import history from '../utils/history';
import PublicRoute from './publicRouter';
import PrivateRoute from './privateRouter';
import Home from '../components/Home/home'
import Query from '../components/Post/Query';
import Login from '../components/LoginForm'
import Signup from '../components/Signup'



const AppRouter = () => (
    <Router history = {history}> 
        <Switch>
            <PublicRoute path='/' exact={true} component={Home} /> 
            <PublicRoute path='/login' exact={true} component={Login} /> 
            <PublicRoute path='/signup' exact={true} component={Signup} /> 
            <PrivateRoute path='/query' component={Query} />
        </Switch>
    </Router>
)

export default nest(AppRouter)