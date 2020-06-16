// == Import npm
import React from 'react';

import ProductCategory from 'src/components/productCategory';
// == Import
import CardDesign from 'src/components/CardDesign';

import Footer from 'src/components/Footer';

import UserPage from 'src/components/UserPage';


import './styles.scss';

// == Composant
const App = () => (

  // <Button value="Envoyer" size="medium" />
  // <Avatar size="large" />
  <>
    <ProductCategory />
    <CardDesign />
    <Footer />
    <UserPage />
  </>

);

// == Export
export default App;
