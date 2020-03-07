import React from 'react';
import About from './components/About';
import Matrix from './components/Matrix';
import Home from './components/Home';
import Language from './components/Language';


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
          <Link className="nav" to="/">Home</Link>
          <Link className="nav" to="/matrix">Matrix</Link>
          <Link className="nav" to="/languages">Languages</Link>
          <Link className="nav" to="/about">About</Link>

        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/languages">
            <Language />
          </Route>

          <Route path="/matrix">
            <Matrix />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}