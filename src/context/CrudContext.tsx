import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { AddressWarpper } from '../components/Header/styles';
import api from '../services/api';
import { useProductList } from './ProductListContext';

interface IProduct {
  id: string;
  title: string;
  imageUrl: string;
  condition: string;
  categoryId: string;
  categories: string[];
  categoriesAsString?: string;
  price: string;
  installmentsInfo: string;
  stockAmount: number;
  soldAmount: number;
}

interface IClient {
  onSuccess: () => void;
  onError: (error: string) => void;
}

interface ICrudContext {
  product: IProduct;
  setProduct: Dispatch<SetStateAction<IProduct>>;
  handleClearProduct: () => void;
  handleAddProduct: (product: IProduct, client: IClient) => void;
  handleUpdateProduct: (product: IProduct, client: IClient) => void;
  handleDeleteProduct: (productId: string, client: IClient) => Promise<void>;
  loading: boolean;
}

const defaultProduct: IProduct = {
  id: '',
  title: 'Nome do produto detalhado',
  imageUrl: 'http://shorturl.at/eiyCH',
  condition: 'Novo',
  categoryId: 'roupas',
  categories: ['Categoria', 'Subcategoria', 'Tag1', 'TagN'],
  categoriesAsString: 'Categoria, Subcategoria, Tag1, TagN',
  price: '99.99',
  installmentsInfo: 'em 10x R$ 9,99 sem juros',
  stockAmount: 1,
  soldAmount: 1,
};

export const CrudContext = createContext<ICrudContext>({} as ICrudContext);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CrudProvider: React.FC<Props> = ({ children }) => {
  const [product, setProduct] = useState(defaultProduct);
  const [loading, setLoading] = useState(false);

  function createProductId(text: string): string {
    return text.replace(/[\s-]+/g, '-').toLowerCase();
  }

  function handleClearProduct(): void {
    setProduct(defaultProduct);
  }

  async function handleAddProduct(
    product: Omit<IProduct, 'id' | 'categoriesAsString'>,
    client: IClient
  ): Promise<void> {
    try {
      setLoading(false);
      const newProduct = { ...product, id: createProductId(product.title) };
      const userExist =
        (
          await api.get('/products/', {
            params: { id: newProduct.id },
          })
        ).data.length > 0;
      if (userExist) {
        client.onError('Produto com este nome já cadastrado');
        return;
      }
      await api.post('/products', newProduct);
      setProduct(newProduct);
      client.onSuccess();
    } catch (error) {
      client.onError(`Ocorreu um erro ao adicionar produto: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdateProduct(
    product: IProduct,
    client: IClient
  ): Promise<void> {
    try {
      setLoading(true);
      await api.put(`/products/${product.id}`, {
        ...product,
        id: createProductId(product.id),
      });
      client.onSuccess();
    } catch (error) {
      client.onError(`Ocorreu um erro ao atualizar produto: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteProduct(
    productId: string,
    client: IClient
  ): Promise<void> {
    try {
      setLoading(true);
      await api.delete(`/products/${productId}`);
      handleClearProduct();
      client.onSuccess();
    } catch (error) {
      client.onError(`Ocorreu um erro ao deletar: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  const context: ICrudContext = {
    product,
    setProduct,
    handleClearProduct,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    loading,
  };

  return (
    <CrudContext.Provider value={context}>{children}</CrudContext.Provider>
  );
};

export function useCrudProduct() {
  const context = useContext(CrudContext);
  return context;
}
