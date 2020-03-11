import React from 'react';
import About from './components/About';
import Matrix from './components/Matrix';
import Wheel from './components/Wheel';
import ColorBox from './components/ColorBox';
import Rainbow from './components/Rainbow';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import './components/styles/Logo.css';
import './components/styles/Header.css';

export default function App() {

  return (
    <div className="App">
      <Router>

        <div className="header">
          <Link className="nav" to="/matrix">Matrix</Link>
          <Link className="nav" to="/wheel">Wheel</Link>
          <Link className="nav" to="/play">Play</Link>
          <Link className="nav" to="/colors">Colors</Link>
          <Link className="nav" to="/">Resume</Link>
        </div>

        <Switch>

          <Route path="/play">
            <ColorBox />
          </Route>

          <Route path="/matrix">
            <Matrix />
          </Route>

          <Route path="/colors">
            <Rainbow />
          </Route>

          <Route path="/wheel">
            <Wheel />
          </Route>

          <Route path="/">
            <About />
          </Route>
          
        </Switch>

      </Router>
    </div>
  );
}