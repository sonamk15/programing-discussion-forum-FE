import './App.css';

import Appbar from './components/Header';
import Footer from './components/Footer';
import AppRouter from './routing';

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
