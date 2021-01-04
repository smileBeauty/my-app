import './App.css';
import MrMenu from './components/menu/menu'
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import routes from './router';

export default function App() {
  return (
    <Router>
      <div className="app">
        <MrMenu>{routes}</MrMenu>
      </div>
    </Router>
  );
}