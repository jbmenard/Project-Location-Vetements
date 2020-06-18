import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducer';
import api from 'src/middleware/product';
import apiUser from 'src/middleware/inscription';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    api,
    apiUser,
  //   // secondMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
