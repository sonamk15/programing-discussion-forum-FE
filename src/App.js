import './App.css';
import Query from './components/Post/Query';
import Appbar from './components/Home/appbar'
import Footer from './components/Home/footer'
import Home from './components/Home/home'

function App() {
  
  return (
    <div className="App">
      {/* <Query/> */}
      <Appbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
