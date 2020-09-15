import React from 'react';
import ProductDetails from './pages/ProductDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import GlobalStyles from './styles/GlobalStyles';
import CategoryList from './pages/CategoryList';
import { ProductListProvider } from './context/ProductListContext';
import { CartProvider } from './context/CartContext';
import Order from './pages/Order';

function App() {
  return (
    <CartProvider>
      <ProductListProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/order/" children={<Order />} />
            <Route path="/category/" children={<CategoryList />} />

            <Route path="/roupas/:id" children={<ProductDetails />} />
            <Route path="/calcados/:id" children={<ProductDetails />} />
            <Route path="/acessorios/:id" children={<ProductDetails />} />
            <Route
              path="/roupas/"
              children={<ProductList category="roupas" />}
            />

            <Route
              path="/calcados"
              children={<ProductList category="calcados" />}
            />
            <Route
              path="/acessorios"
              children={<ProductList category="acessorios" />}
            />

            <Route path="/cart" children={<Cart />} />

            <Route path="/" children={<ProductList />} />
          </Switch>
          <GlobalStyles />
        </BrowserRouter>
      </ProductListProvider>
    </CartProvider>
  );
}

export default App;
