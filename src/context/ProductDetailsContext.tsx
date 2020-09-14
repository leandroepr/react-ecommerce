import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../types/product';

const emptyProduct: Product = {
  id: '',
  title: 'Carregando Título',
  imageUrl:
    'https://www.wilddesignz.com/image/cache/catalog/placeholderproduct-500x500.png',
  condition: '...',
  categories: [],
  description: 'Carregando informações...',
  price: '',
  installmentsInfo: '',
  stockAmount: 0,
  soldAmount: 0,
};

interface ContextData {
  isFetching: boolean;
  error: string;
  data: Product;
}

export const ProductDetailsContext = createContext<Partial<Product>>({});

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProductDetailsProvider: React.FC<Props> = ({ children }) => {
  const context = useContext(ProductDetailsContext);

  return (
    <ProductDetailsContext.Provider value={context}>
      {children}
    </ProductDetailsContext.Provider>
  );
};

const useFetch = (url: string) => {
  const [response, setResponse] = useState<Product>(emptyProduct);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://my-json-server.typicode.com/leandroepr/repo/products/${url}`
        );
        const json = await res.json();
        setResponse(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, [url]);
  return { response, error, loading };
};
export default useFetch;
