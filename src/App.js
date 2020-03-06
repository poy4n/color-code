import React from 'react';
import Logo from './components/Logo';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import './App.css';
import './components/styles/Logo.css';

function App() {
  return (
    <div className="App">

      <Router>
        <div className="pages">
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/horses">Horses</Link>
          </div>
        </div>
      </Router>

      <Logo />

    </div>
  );
}

export default App;
