import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Header />
     </div>
     <div className="map">
     <Route exact path="/" component={Home} />
     </div>
    </BrowserRouter>
  );
}

export default App;
