import React from 'react';

import {
  Container,
  SumaryContent,
  SumaryRowProducts,
  Label,
  Price,
  SumaryRowShipping,
  SumaryTotalContent,
  SumaryRowTotal,
} from './styles';

const SumaryCard: React.FC = () => {
  return (
    <Container>
      <SumaryContent>
        <SumaryRowProducts>
          <Label>Produtos (3)</Label>
          <Price>
            <span className="simbol">R$</span>
            <span className="fraction">34</span>
            <span className="cents">99</span>
          </Price>
        </SumaryRowProducts>
        <SumaryRowShipping>
          <Label>Envio para Avenida do Porto 280, Colombo</Label>
          <Price>
            <span className="simbol">R$</span>
            <span className="fraction">270</span>
            <span className="cents">99</span>
          </Price>
        </SumaryRowShipping>
      </SumaryContent>
      <SumaryTotalContent>
        <SumaryRowTotal>
          <Label>Total</Label>
          <Price>
            <span className="simbol">R$</span>
            <span className="fraction">270</span>
            <span className="cents">87</span>
          </Price>
        </SumaryRowTotal>
      </SumaryTotalContent>
    </Container>
  );
};

export default SumaryCard;
