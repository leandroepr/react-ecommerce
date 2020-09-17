import React from 'react';

import { ProductListProvider } from './context/ProductListContext';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import { CategoryProvider } from './context/categoryContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <CartProvider>
        <CategoryProvider>
          <ProductListProvider>
            <Routes />
          </ProductListProvider>
        </CategoryProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
