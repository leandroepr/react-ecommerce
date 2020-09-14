import React from 'react';

import PagePattern from '../../components/PagePattern';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from './styles';
import CategorySection from './CategorySection';

const CategoryList: React.FC = () => {
  return (
    <PagePattern
      headerContent={<Header />}
      bodyContent={<CategoryListContent />}
      footerContent={<Footer />}
    />
  );
};
const CategoryListContent = () => {
  return (
    <Container>
      <CategorySection title="Roupas para você e toda família" />
      <CategorySection title="Calçados elegantes e confortáveis" />
      <CategorySection title="Utilitários, Maquiagens e muito mais" />
    </Container>
  );
};
export default CategoryList;
