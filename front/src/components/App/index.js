// == Import npm
import React from 'react';

// == Import components
import Button from 'src/components/Button';
import UserPage from 'src/components/UserPage';
import CardDesign from 'src/components/CardDesign';
import ProductCategory from 'src/components/productCategory';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  // <Button value="Envoyer" size="medium" />
  // <Avatar size="large" />
  <div className="app">
    <ProductCategory />
    <CardDesign />
    <UserPage />
  </div>

);

// == Export
export default App;
