// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import components
import UserPage from 'src/components/UserPage';
import Footer from 'src/components/Footer';
import Page404 from 'src/components/Page404';
import AddUserInfos from 'src/components/AddUserInfos';
import Home from 'src/components/Home';

// == Import containers
import ProductPage from 'src/containers/ProductPage';
import Navbar from 'src/containers/Navbar';
import Header from 'src/containers/Header';
import AddProduct from 'src/containers/AddProduct';
import ProductCategory from 'src/containers/ProductCategory';
import Inscription from 'src/containers/Inscription';


// == Immport styles
import './styles.scss';

// == Composant
const App = () => (

  <>
    <Navbar />
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/products">
        <ProductCategory />
      </Route>
      <Route exact path="/product/:slug">
        <ProductPage />
      </Route>
      <Route exact path="/user"> {/* user page */}
        <UserPage />
      </Route>
      <Route exact path="/newproduct"> {/* Form to create a new product */}
        <AddProduct />
      </Route>
      <Route exact path="/newuserinfos"> {/* Form to create new user infos */}
        <AddUserInfos />
      </Route>
      <Route exact path="/inscription"> {/* Form to create a new user */}
        <Inscription />
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
