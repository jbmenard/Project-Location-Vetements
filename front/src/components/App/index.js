// == Import npm
import React from 'react';

// == Import
import CardDesign from 'src/components/CardDesign';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <h1>Composant : App</h1>
    <CardDesign />
  </div>
);

// == Export
export default App;
