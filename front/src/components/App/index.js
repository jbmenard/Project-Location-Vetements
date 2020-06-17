// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import components
// import Navbar from 'src/components/Navbar';;
import UserPage from 'src/components/UserPage';
import AddProduct from 'src/components/AddProduct';
import Footer from 'src/components/Footer';
import Page404 from 'src/components/Page404';
import ProductPage from 'src/components/ProductPage';
import ConnexionInscription from '../Connexion_Inscription';

// == Import containers
import AddProduct from 'src/containers/AddProduct';
import ProductCategory from 'src/containers/ProductCategory';


// == Immport styles
import './styles.scss';


// == Composant
const App = () => (

  <>

    {/* <Navbar /> */}
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
      <Route>
        <Page404 />
      </Route>
    </Switch>
    <Footer />

  </>
);

// == Export
export default App;
