import React from 'react';
import CartsPage from 'containers/CartsPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'containers/Header';
import HomePage from 'containers/HomePge';
import ProductsPage from 'containers/ProductsPage';
import { AppContainer } from 'App.styles';
import ProductDetailPage from 'containers/ProductDetailPage';

import { Provider } from 'react-redux';
import { ConfigureStore } from 'store';

import Footer from 'containers/Footer';
import AuthenticationPage from 'containers/AuthentificationPage';

const App = () => {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <Router>
        <AppContainer >
        <Navbar />    
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/products" component={ProductsPage} />
              <Route path="/products/:id" component={ProductDetailPage} />
              <Route path="/LoginPage" component={AuthenticationPage} />
              <Route path="/carts" component={CartsPage} />
            </Switch>         
          <Footer />
          </AppContainer>
      </Router>
    </Provider>
  );
};

export default App;
