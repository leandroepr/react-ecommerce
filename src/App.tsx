import React from 'react';
import ProductDetails from './pages/ProductDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import GlobalStyles from './styles/GlobalStyles';
import CategoryList from './pages/CategoryList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/category/" children={<CategoryList />} />

        <Route path="/roupas/:id" children={<ProductDetails />} />
        <Route path="/roupas/" children={<ProductList category="roupas" />} />

        <Route path="/calcados/:id" children={<ProductDetails />} />
        <Route
          path="/calcados"
          children={<ProductList category="calcados" />}
        />

        <Route path="/utilitarios/:id" children={<ProductDetails />} />
        <Route
          path="/utilitarios"
          children={<ProductList category="utilitarios" />}
        />

        <Route path="/cart" children={<Cart />} />

        <Route path="/" children={<ProductList />} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
