import React from 'react';

import { ProductListProvider } from './context/ProductListContext';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import { CategoryProvider } from './context/categoryContext';
import { CrudProvider } from './context/CrudContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <CrudProvider>
        <CartProvider>
          <CategoryProvider>
            <ProductListProvider>
              <Routes />
            </ProductListProvider>
          </CategoryProvider>
        </CartProvider>
      </CrudProvider>
    </BrowserRouter>
  );
}

export default App;
