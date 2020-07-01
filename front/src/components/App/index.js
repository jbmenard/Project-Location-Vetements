// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import components
import Footer from 'src/components/Footer';
import Page404 from 'src/components/Page404';

import Home from 'src/components/Home';
import Information from 'src/components/information';

// == Import containers
import UserPage from 'src/containers/UserPage';
import ProductPage from 'src/containers/ProductPage';
import Navbar from 'src/containers/Navbar';
import Header from 'src/containers/Header';
import AddProduct from 'src/containers/AddProduct';
import ProductCategory from 'src/containers/ProductCategory';
import Inscription from 'src/containers/Inscription';
// import AddUserInfos from 'src/containers/AddUserInfos';
import UpdateProduct from 'src/containers/UpdateProduct';

// == Immport styles
import './styles.scss';

// == Composant
const App = ({
  listCard, listUsers, loading, error, fetchProducts, fetchUsers, user, isLoggin, checkIsLogged,
}) => {
  useEffect(() => {
    fetchProducts();
    fetchUsers();
    checkIsLogged();
  }, []);
  console.log(listUsers);

  return (

    <>
      <Navbar isLoggin={isLoggin} user={user} />
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
        {

            listUsers.map((userInfo) => {
              return (
                <Route exact path={`/user/${userInfo.id}`}> {/* user page */}
                  <UserPage taMere={userInfo} fetchUser={fetchUsers} fetchProduct={fetchProducts} loading={loading} error={error} />
                </Route>
              );
            })
          }
        <Route exact path="/newproduct"> {/* Form to create a new product */}
          <AddProduct />
        </Route>
        <Route exact path="/update/:slug"> {/* Form to update a product */}
          <UpdateProduct />
        </Route>
        {/* {isLoggin
          && (
          <Route exact path="/newuserinfos">
            <AddUserInfos userData={user} />
          </Route>
          )} */}
        <Route exact path="/inscription"> {/* Form to create a new user */}
          <Inscription />
        </Route>
        <Route exact path="/information">
          <Information />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
      <Footer />

    </>
  );
};
// == Export
export default App;
