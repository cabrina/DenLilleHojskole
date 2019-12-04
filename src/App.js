import React from 'react';
import AppHeader from './components/Header/AppHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LangeKurser from './components/Body/LangeKurser/LangeKurser';
import KorteKurser from './components/Body/KorteKurser/KorteKurser';
import Studieture from './components/Body/Studieture/Studieture';
import Kursuscenter from './components/Body/Kursuscenter/KursusCenter';
import OmSkolen from './components/Body/OmSkolen/OmSkolen';
import AppFooter from './components/Footer/AppFooter';

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
          <main>
            <Route exact path="/" component={OmSkolen}/>
            <Route path="/LangeKurser" component={LangeKurser}/>
            <Route path="/KorteKurser" component={KorteKurser}/>
            <Route path="/Studieture" component={Studieture}/>
            <Route path="/Kursuscenter" component={Kursuscenter}/>
          </main>
        <AppFooter />
      </Router>
      
    </div>
  );
}

export default App;
