import './App.css';
// import LoginForm from '../LoginForm/LoginForm'
// import Home from '../Home/Home'
// import Signup from '../Signup/Signup'
import AppRouter from './routing'


function App() {
  return (
    <div className="App">
      <AppRouter/>


     {/* <Router>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>


        { <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch> }

      </Router>
    */}
    </div>
  );
}

export default App;
