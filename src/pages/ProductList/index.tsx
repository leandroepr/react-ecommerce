import React, { useEffect, useState } from 'react';

import {
  Container,
  FilterHeader,
  Row,
  Panel,
  Column,
  ProductsPanel,
} from './styles';
import PagePattern from '../../components/PagePattern';
import ProductCard from './ProductCard';
import FilterCard from './FilterCard';
// import { useProductList } from '../../context/ProductListContext';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';

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

interface Props {
  category?: string;
}

const ProductList: React.FC<Props> = ({ category }) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      setLoading(true);
      const response = await api.get('/products');
      setProductList(response.data);
      setLoading(false);
    }
    async function loadRelatedProducts(): Promise<void> {
      const response = await api.get('/relatedProducts');
      setRelatedProducts(response.data);
    }

    loadProducts();
    loadRelatedProducts();
  }, []);

  const { search } = useLocation();

  return (
    <PagePattern>
      <Container>
        <Row>
          <strong>Buscas relacionadas: </strong>
          {relatedProducts.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </Row>

        <Panel>
          <Column>{<FilterColumn />}</Column>
          <Column>
            <ProductsPanel>
              {loading && <p>Carregando Produtos...</p>}

              {productList
                .filter(
                  (p) =>
                    (p.categoryId === category || category === undefined) &&
                    (search === undefined ||
                      p.title
                        .toLocaleLowerCase()
                        .includes(search.replace('?', '').toLocaleLowerCase()))
                )
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </ProductsPanel>
          </Column>
        </Panel>
      </Container>
    </PagePattern>
  );
};

type Filter = {
  name: string;
  amount: string;
};
type FilterGroup = {
  title: string;
  filters: Filter[];
};

const FilterColumn: React.FC = () => {
  const [filterGroup, setFilterGroup] = useState<FilterGroup[]>([]);
  useEffect(() => {
    async function loadFilterGroups(): Promise<void> {
      const response = await api.get('/filterGroups');
      setFilterGroup(response.data);
    }

    loadFilterGroups();
  }, []);

  return (
    <Container>
      <FilterHeader>
        <span>Calçados, Roupas e Bolsas</span>
        <h1>Todos</h1>
        <span>1.472.478 resultados</span>
      </FilterHeader>

      {filterGroup.map((group) => (
        <FilterCard
          key={group.title}
          title={group.title}
          filters={group.filters}
        />
      ))}
    </Container>
  );
};

export default ProductList;
