import ProductsWatchers from 'store/products/saga';
import AuthWatchers from 'store/user/saga';
import CartWatcher from 'store/cart/saga';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ProductReducer } from 'store/products/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { AuthReducer } from 'store/user/reducer';

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
