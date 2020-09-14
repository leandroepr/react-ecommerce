import React from 'react';

import {
  Container,
  ItemImage,
  PriceBlock,
  PriceRow,
  InstallmentsInfo,
} from './styles';
import { Product } from '../../../context/categoryContext';

const ProductSmalCard: React.FC<Product> = ({
  imageUrl,
  imageDescription,
  priceFraction,
  priceCents,
  installmentInfo,
}) => {
  return (
    <Container>
      <ItemImage>
        <img alt={imageDescription} src={imageUrl} />
      </ItemImage>
      <PriceBlock>
        <PriceRow>
          <span className="simbol">R$</span>
          <span className="fraction">{priceFraction}</span>
          <span className="cents">{priceCents}</span>
        </PriceRow>

        <InstallmentsInfo>{installmentInfo}</InstallmentsInfo>
      </PriceBlock>
    </Container>
  );
};

export default ProductSmalCard;
