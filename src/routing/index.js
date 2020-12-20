import React from 'react';
import { Router, Switch } from 'react-router-dom';
import {nest} from 'recompose'
import history from '../utils/history';
import PublicRoute from './publicRouter';
import PrivateRoute from './privateRouter';
import Home from '../components/Home'

const AppRouter = () => (
    <Router history = {history}> 
        <Switch>
            <PublicRoute path='/' exact={true} component={Home} /> 
        </Switch>
    </Router>
)

export default nest(AppRouter)