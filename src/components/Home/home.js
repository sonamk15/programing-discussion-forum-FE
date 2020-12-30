import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Button,
} from '@material-ui/core';
import Login from '../LoginForm'
import Signup from '../Signup'

const Home = () => {
  const signup = {
    float: 'right',
    position: 'absolute',
    top: '15px',
    right: '0px'
  }
  const login = {
    float: 'left',
    position: 'absolute',
    top: '15px',
    right: '100px'
  }

  return (
    <Router>
      <Button color="inherit" style={login}><Link to="/login">Login</Link></Button>
      <Button color="inherit" style={signup}> <Link to="/signup">Sign Up</Link></Button>

      { <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>}
    </Router>

  )
}

export default Home;