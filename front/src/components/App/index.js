// == Import npm
import React from 'react';

import ProductCategory from 'src/components/productCategory';
import ProductPage from 'src/components/ProductPage';

// == Import
import CardDesign from 'src/components/CardDesign';
import './styles.scss';

// == Composant
const App = () => (
  // <Button value="Envoyer" size="medium" />
  // <Avatar size="large" />
  <div className="app">
    <ProductPage />
  </div>
);

// == Export
export default App;
