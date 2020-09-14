import React from 'react';

import tshirt from '../../../assets/images/tshirt.png';

import {
  Container,
  ItemImage,
  PriceBlock,
  PriceRow,
  InstallmentsInfo,
} from './styles';

const ProductSmalCard: React.FC = () => {
  return (
    <Container>
      <ItemImage>
        <img src={tshirt} />
      </ItemImage>
      <PriceBlock>
        <PriceRow>
          <span className="simbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>3x de R$ 11,67 sem juros</InstallmentsInfo>
      </PriceBlock>
    </Container>
  );
};

export default ProductSmalCard;
