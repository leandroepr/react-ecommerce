import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';

import Cart from './pages/Cart';
import CategoryList from './pages/CategoryList';
import Order from './pages/Order';
import AddProduct from './pages/AddProduct/intex';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/categorias/" children={<CategoryList />} />

    <Route path="/cart" children={<Cart />} />
    <Route path="/order/" children={<Order />} />
    <Route path="/crud/" children={<AddProduct />} />

    <Route path="/roupas/:id" children={<ProductDetails />} />
    <Route path="/calcados/:id" children={<ProductDetails />} />
    <Route path="/acessorios/:id" children={<ProductDetails />} />

    <Route path="/roupas/" children={<ProductList category="roupas" />} />
    <Route path="/calcados" children={<ProductList category="calcados" />} />
    <Route
      path="/acessorios"
      children={<ProductList category="acessorios" />}
    />

    <Route path="/product/" children={<ProductList />} />

    <Route path="/" children={<CategoryList />} />
  </Switch>
);

export default Routes;
