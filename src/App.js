import './App.css';

import Appbar from './components/Home/appbar'
import Footer from './components/Home/footer'
import AppRouter from './routing'

function App() {

  return (
    <div className="App">
      <Appbar />
      <AppRouter/>
      <Footer />

    </div>
  );
}

export default App;
