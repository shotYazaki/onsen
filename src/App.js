import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom'
import Place  from './components/onsen/Place'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Header />
     </div>
     <div className="map">
     <Route exact path="/" component={Home} />
     <Route path="/" component={Place} />
     </div>
    </BrowserRouter>
  );
}

export default App;
