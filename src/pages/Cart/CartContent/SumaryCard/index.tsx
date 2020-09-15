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

interface Props {
  numberOfProducts: number;
  valueOfProducts: string;
  costOfFreight: string;
  totalAmount: string;
}

const SumaryCard: React.FC<Props> = ({
  numberOfProducts,
  valueOfProducts,
  costOfFreight,
  totalAmount,
}) => {
  return (
    <Container>
      <SumaryContent>
        <SumaryRowProducts>
          <Label>Produtos ({numberOfProducts})</Label>
          <Price>
            <span className="simbol">R$</span>
            <span className="fraction">{valueOfProducts.split('.')[0]}</span>
            <span className="cents">{valueOfProducts.split('.')[1]}</span>
          </Price>
        </SumaryRowProducts>
        <SumaryRowShipping>
          <Label>Envio para Avenida do Porto 280, Colombo</Label>
          <Price>
            <span className="simbol">R$</span>
            <span className="fraction">{costOfFreight.split('.')[0]}</span>
            <span className="cents">{costOfFreight.split('.')[1]}</span>
          </Price>
        </SumaryRowShipping>
      </SumaryContent>
      <SumaryTotalContent>
        <SumaryRowTotal>
          <Label>Total</Label>
          <Price>
            <span className="simbol">R$</span>
            <span className="fraction">{totalAmount.split('.')[0]}</span>
            <span className="cents">{totalAmount.split('.')[1]}</span>
          </Price>
        </SumaryRowTotal>
      </SumaryTotalContent>
    </Container>
  );
};

export default SumaryCard;
