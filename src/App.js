import './App.css';
import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import routes from './router';

export default function App() {
  return (
    <Router>
      <div className="app">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        {routes}
      </div>
    </Router>
  );
}