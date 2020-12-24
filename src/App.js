import './App.css';
import Login from './components/LoginForm'
// import LoginForm from './components/LoginForm/LoginForm'
import Appbar from './components/Home/appbar'
import Footer from './components/Home/footer'
// import Home from '../Home/Home'
import Signup from './components/Signup'
import AppRouter from './routing'
import Home from './components/Home/home'


function App() {
  return (
    <div className="App">
      <Appbar/>
      <Home/>
      <Footer/>

  
    </div>
  );
}

export default App;
