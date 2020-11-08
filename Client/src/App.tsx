import React from 'react';
import LoginPage from './containers/LoginPage';
import SubscribePage from './containers/SubscribePage';
import CartsPage from './containers/CartsPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import CheckAuthWithToken from './components/CheckAuthWithToken';
import HomePage from './containers/HomePge';
import ProductsPage from './containers/ProductsPage';
import './App.css';
import ProductDetailPage from './containers/ProductDetailPage';

import { Provider } from 'react-redux';
import { ConfigureStore } from './store';
const App = () => {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <Router>
        <CheckAuthWithToken Component={Navbar} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route path="/products/:id" component={ProductDetailPage} />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/SubscribePage" component={SubscribePage} />
          <Route path="/carts" component={CartsPage}  />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
