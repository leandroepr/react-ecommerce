import React, { useState } from 'react';

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
import { useProductList } from '../../context/ProductListContext';
import { useLocation } from 'react-router-dom';
interface Props {
  category?: string;
}

const ProductList: React.FC<Props> = ({ category }) => {
  const { data, loading } = useProductList();
  const productList = data;
  // const [productList, setProductList] = useState<Product[]>([]);
  const [relatedSearchItems] = useState([
    'roupas femininas',
    'camisas masculinas',
    'body feminino',
    'cropped',
    'conjuntos femininos',
  ]);

  const filterHeaderText = category ? category : 'Todos';

  const { search } = useLocation();

  return (
    <PagePattern>
      <Container>
        <Row>
          <strong>Buscas relacionadas: </strong>
          {relatedSearchItems.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </Row>

        <Panel>
          <Column>{<FilterColumn title={filterHeaderText} />}</Column>
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

interface FilterColumnProps {
  title: string;
}

const FilterColumn: React.FC<FilterColumnProps> = ({ title }) => {
  return (
    <Container>
      <FilterHeader>
        <span>Calçados, Roupas e Bolsas</span>
        <h1>Todos</h1>
        <span>1.472.478 resultados</span>
      </FilterHeader>

      <FilterCard
        title="Gênero"
        items={[
          { name: 'Feminino', amount: '1.273' },
          { name: 'Masculino', amount: '945' },
          { name: 'Sem gênero', amount: '60' },
          { name: 'Meninas', amount: '704' },
          { name: 'Meninos', amount: '1.307' },
          { name: 'Bebês', amount: '1.000' },
        ]}
      />
      <FilterCard
        title="Categorias"
        items={[
          { name: 'Botas', amount: '1.273' },
          { name: 'Sapatos', amount: '100' },
          { name: 'Sandalhas', amount: '100' },
          { name: 'Sapatenis', amount: '5' },
        ]}
      />
      <FilterCard
        title="Pagamento"
        items={[
          { name: 'Sem juros', amount: '1.773' },
          { name: 'Com juros', amount: '1.100' },
        ]}
      />
    </Container>
  );
};

export default ProductList;
