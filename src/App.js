import React from 'react';
import About from './components/About';
import Matrix from './components/Matrix';
import Wheel from './components/Wheel';
import ColorBox from './components/ColorBox';
import Play from './components/Play';


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
          <Link className="nav" to="/about">I</Link>
          <Link className="nav" to="/play">Play</Link>
          <Link className="nav" to="/color">Color</Link>
          <Link className="nav" to="/matrix">Matrix</Link>
          <Link className="nav" to="/">Wheel</Link>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/color">
            <ColorBox />
          </Route>

          <Route path="/matrix">
            <Matrix />
          </Route>

          <Route path="/play">
            <Play />
          </Route>

          <Route path="/">
            <Wheel />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}