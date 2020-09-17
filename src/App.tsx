import React from 'react';

import { ProductListProvider } from './context/ProductListContext';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <CartProvider>
        <ProductListProvider>
          <Routes />
        </ProductListProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
