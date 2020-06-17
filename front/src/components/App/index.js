// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import components
import UserPage from 'src/components/UserPage';
import Footer from 'src/components/Footer';
import ProductPage from 'src/components/ProductPage';
import ConnexionInscription from 'src/components/Connexion_Inscription';

// == Import containers
import Navbar from 'src/containers/Navbar';
import Header from 'src/containers/Header';
import AddProduct from 'src/containers/AddProduct';
import ProductCategory from 'src/containers/ProductCategory';


// == Immport styles
import './styles.scss';


// == Composant
const App = () => (

  <>
    <Navbar />
    <Header />
    <Switch>
      <Route exact path="/">
        <ProductCategory />
      </Route>
      <Route exact path="/product">
        <ProductPage />
      </Route>
      <Route exact path="/user"> {/* user page */}
        <UserPage />
      </Route>
      <Route exact path="/newproduct"> {/* Form to create a new product */}
        <AddProduct />
      </Route>
      <Route exact path="/inscription"> {/* Form to create a new user */}
        <ConnexionInscription />
      </Route>
    </Switch>
    <Footer />

  </>
);

// == Export
export default App;
