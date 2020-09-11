import React from 'react';

import { Container, ProductList, ActionContainer, Button } from './styles';

import ProductCard from './ProductCard';

import SumaryCard from './SumaryCard';

const CartContent: React.FC = () => {
  return (
    <Container>
      <ProductList>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductList>
      <SumaryCard />
      <SumaryActions />
    </Container>
  );
};
const SumaryActions = () => {
  return (
    <ActionContainer>
      <Button solid>Continuar a compra</Button>
    </ActionContainer>
  );
};
export default CartContent;
