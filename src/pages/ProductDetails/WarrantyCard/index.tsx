import React from 'react';

import { Container, Section } from './styles';

const WarrantyCard: React.FC = () => {
  return (
    <Container>
      <Section>
        <h4>Garantia</h4>

        <div>
          <span>
            <p className="title">Compra garantida com o Lorem Ipsum</p>
            <p className="description">
              Receba o produto que está esperando ou devolvemos seu dinheiro
            </p>
          </span>
          <span>
            <p className="title">Compra garantida do vendedor</p>
            <p className="description">Sem Garantia</p>
          </span>
        </div>

        <a href="#">Saiba mais sobre garantia</a>
      </Section>
    </Container>
  );
};

export default WarrantyCard;
