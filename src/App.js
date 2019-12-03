import React from 'react';
import AppHeader from './components/Header/AppHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LangeKurser from './components/Body/LangeKurser/LangeKurser';
import KorteKurser from './components/Body/KorteKurser/KorteKurser';
import Studieture from './components/Body/Studieture/Studieture';
import Kursuscenter from './components/Body/Kursuscenter/KursusCenter';
import OmSkolen from './components/Body/OmSkolen/OmSkolen';
import Home from './components/Body/Home/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
          <Route exact path="/" component={Home}/>
          <Route path="/LangeKurser" component={LangeKurser}/>
          <Route path="/KorteKurser" component={KorteKurser}/>
          <Route path="/Studieture" component={Studieture}/>
          <Route path="/Kursuscenter" component={Kursuscenter}/>
          <Route path="/OmSkolen" component={OmSkolen}/>
      </Router>
      
    </div>
  );
}

export default App;
