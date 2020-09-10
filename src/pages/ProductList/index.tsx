import React from 'react';

import { Container, Wrapper } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductList: React.FC = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <h1>ProductList</h1>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ProductList;
