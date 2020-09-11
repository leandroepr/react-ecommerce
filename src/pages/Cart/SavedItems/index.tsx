import React from 'react';

import { Container } from './styles';

const SavedItems: React.FC = () => {
  return (
    <Container>
      <h3>Você não tem produtos salvos</h3>
      <p>
        Se ainda não decidiu comprar algum produto do seu carrinho, você pode
        deixá-lo aqui.
      </p>
    </Container>
  );
};

export default SavedItems;
