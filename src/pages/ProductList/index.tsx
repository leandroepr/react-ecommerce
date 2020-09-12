import React from 'react';

import {
  Container,
  FilterHeader,
  Row,
  Panel,
  Column,
  ProductsPanel,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PagePattern from '../../components/PagePattern';
import ProductCard from './ProductCard';
import FilterCard from './FilterCard';

const ProductList: React.FC = () => {
  return (
    <PagePattern
      headerContent={<Header />}
      bodyContent={<Content />}
      footerContent={<Footer />}
    />
  );
};

const Content = () => {
  return (
    <Container>
      <Row>
        <strong>Buscas relacionadas: </strong>
        <span>roupas femininas</span>
        <span>camisas masculinas</span>
        <span>body feminino</span>
        <span>cropped</span>
        <span>conjuntos femininos</span>
      </Row>

      <Panel>
        <Column>
          <FilterColumn />
        </Column>
        <Column>
          <ProductColumn />
        </Column>
      </Panel>
    </Container>
  );
};

const FilterColumn = () => {
  return (
    <Container>
      <FilterHeader>
        <span>Calçados, Roupas e Bolsas</span>
        <h1>Sapatos</h1>
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

const ProductColumn = () => {
  return (
    <Container>
      <ProductsPanel>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsPanel>
    </Container>
  );
};

export default ProductList;
