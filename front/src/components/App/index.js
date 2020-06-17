// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import components
// import Navbar from 'src/components/Navbar';
import ProductCategory from 'src/components/productCategory';
import UserPage from 'src/components/UserPage';
import AddProduct from 'src/components/AddProduct';
import Footer from 'src/components/Footer';
import ProductPage from 'src/components/ProductPage';

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
    </Switch>
    <Footer />

  </>
);

// == Export
export default App;
