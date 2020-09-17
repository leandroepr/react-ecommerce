import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  condition: string;
  categoryId: string;
  categories: string[];
  description: string;
  price: string;
  installmentsInfo: string;
  stockAmount: number;
  soldAmount: number;
}

export interface Category {
  id: string;
  name: string;
  displayName: string;
  detail: string;
  productList: Product[];
}

interface Context {
  categoryList: Category[];
  productList: Product[];
  isLoading: boolean;
  error: string | null;
}

export const CategoryContext = createContext<Context>({} as Context);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CategoryProvider: React.FC<Props> = ({ children }) => {
  // const categoryList = useContext(CategoryContext);

  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      const response = await api.get('/categories');
      setCategoryList(response.data);
    }
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');
      setProductList(response.data);
    }
    try {
      setIsloading(true);
      loadCategories();
      loadProducts();
    } catch (error) {
      setError(`Erro ao recuperar dados: ${error}`);
    } finally {
      setIsloading(false);
    }

    // let newCategoryList = categoryList.map((c) => {
    //   c.productList = productList.filter((p) => p.categoryId === c.id);
    //   return c;
    // });

    setCategoryList((prevState) =>
      prevState.map((c) => {
        return {
          ...c,
          productList: productList.filter((p) => p.categoryId === c.id),
        };
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log('Testando Context');
  // console.log(categoryList);
  // console.log(productList);

  return (
    <CategoryContext.Provider
      value={{ categoryList, productList, isLoading, error }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export function useCategories() {
  const { categoryList, productList, isLoading, error } = useContext(
    CategoryContext
  );

  return { categoryList, productList, isLoading, error };
}
