import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Product } from '../types/product';
import api from '../services/api';

interface IProductContext {
  productList: Product[];
  setProductList: Dispatch<SetStateAction<Product[]>>;
  error: string | null;
  loading: boolean;
}

export const ProductListContext = createContext<IProductContext>(
  {} as IProductContext
);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProductListProvider: React.FC<Props> = ({ children }) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');
      setProductList(response.data);
    }

    try {
      setLoading(true);
      loadProducts();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const context: IProductContext = {
    productList,
    setProductList,
    error,
    loading,
  };

  return (
    <ProductListContext.Provider value={context}>
      {children}
    </ProductListContext.Provider>
  );
};

export function useProductList() {
  const context = useContext(ProductListContext);
  return context;
}
