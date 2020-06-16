// == Import npm
import React from 'react';

// == Import components
import Button from 'src/components/Button';

// == Import
import CardDesign from 'src/components/CardDesign';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <h1>Composant : CardDesign</h1>
    <CardDesign />
  </div>
);

// == Export
export default App;
