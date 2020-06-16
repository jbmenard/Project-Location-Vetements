// == Import npm
import React from 'react';

import ProductCategory from 'src/components/productCategory';
// == Import
import CardDesign from 'src/components/CardDesign';
import './styles.scss';


// == Composant
const App = () => (
  // <Button value="Envoyer" size="medium" />
  // <Avatar size="large" />
  <div className="app">
    <ProductCategory />
    <CardDesign />
  </div>

);

// == Export
export default App;
