import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  ItemImage,
  PriceBlock,
  PriceRow,
  InstallmentsInfo,
} from './styles';

interface Product {
  productId: string;
  categoryId: string;
  imageDescription: string;
  imageUrl: string;
  installmentInfo: string;
  priceFraction: string;
  priceCents: string;
}

const ProductSmalCard: React.FC<Product> = ({
  productId,
  categoryId,
  imageUrl,
  imageDescription,
  priceFraction,
  priceCents,
  installmentInfo,
}) => {
  return (
    <Container>
      <Link to={`/${categoryId}/${productId}`}>
        <ItemImage>
          <img alt={imageDescription} src={imageUrl} />
        </ItemImage>
        <PriceBlock>
          <PriceRow>
            <span className="simbol">R$</span>
            <span className="fraction">{priceFraction}</span>
            <span className="cents">{priceCents}</span>
          </PriceRow>

          <InstallmentsInfo
            style={
              installmentInfo.includes('sem juros')
                ? { color: 'var(--color-green)' }
                : undefined
            }
          >
            {installmentInfo}
          </InstallmentsInfo>
        </PriceBlock>
      </Link>
    </Container>
  );
};

export default ProductSmalCard;
