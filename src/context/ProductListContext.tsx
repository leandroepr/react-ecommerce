import React, { createContext, useContext } from 'react';
import { useFetch } from '../utils/useFetch';
import { Product } from '../types/product';

interface ProductContext {
  data: Product[];
  error: string | null;
  loading: boolean;
}

export const ProductListContext = createContext<ProductContext>({
  data: [],
  error: null,
  loading: false,
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProductListProvider: React.FC<Props> = ({ children }) => {
  const { data, error, loading } = useFetch<Product[]>('products', []);

  return (
    <ProductListContext.Provider value={{ data, error, loading }}>
      {children}
    </ProductListContext.Provider>
  );
};

export function useProductList() {
  const { data, error, loading } = useContext(ProductListContext);
  return { data, error, loading };
}
