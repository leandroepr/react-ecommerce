import React from 'react';
import PagePattern from '../../components/PagePattern';

import { Container } from './styles';

const Order: React.FC = () => {
  return (
    <PagePattern>
      <Container>
        <h1>Compra realizada com sucesso!</h1>
        <p>Agradecemos sua preferência!</p>
      </Container>
    </PagePattern>
  );
};

export default Order;
