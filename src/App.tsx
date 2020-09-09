import React from 'react';
import ProductDetails from './pages/ProductDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import CategoryList from './pages/CategoryList';
import CategoryDetails from './pages/CategoryDetails';
import Order from './pages/Order';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/category/:name" children={<CategoryDetails />} />
        <Route path="/category/" children={<CategoryList />} />

        <Route path="/product/:id" children={<ProductDetails />} />
        <Route path="/product/" children={<ProductList />} />

        <Route path="/cart" children={<Cart />} />
        <Route path="/order" children={<Order />} />

        <Route path="/" children={<Home />} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
