import React from 'react';

import { Container, Wrapper } from './styles';
import Product from './Product';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductDetails: React.FC = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Product />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ProductDetails;
