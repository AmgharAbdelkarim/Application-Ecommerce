import ProductsWatchers from './saga/products/saga';
import AuthWatchers from './saga/user/saga';
import CartWatcher from './saga/cart/saga';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ProductReducer } from './saga/products/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { AuthReducer } from './saga/user/reducer';
import { getUserWithToken } from './api';

export const ConfigureStore = (initialState?: any) => {
  const sagaMiddleware = createSagaMiddleware();
  
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(
    combineReducers({ ProductReducer, AuthReducer }),
    initialState,
    enhancer,
  );

  [...AuthWatchers, ...ProductsWatchers, ...CartWatcher].forEach((saga) =>
    sagaMiddleware.run(saga),
  );
  return store;
};
