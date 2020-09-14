import React from 'react';

import PagePattern from '../../components/PagePattern';
import { Container } from './styles';
import CategorySection from './CategorySection';

const CategoryList: React.FC = () => {
  return (
    <PagePattern>
      <Container>
        <CategorySection title="Roupas para você e toda família" />
        <CategorySection title="Calçados elegantes e confortáveis" />
        <CategorySection title="Utilitários, Maquiagens e muito mais" />
      </Container>
    </PagePattern>
  );
};

export default CategoryList;
