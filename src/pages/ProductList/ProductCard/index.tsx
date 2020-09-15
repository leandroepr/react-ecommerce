import React from 'react';

import {
  Container,
  ProductImage,
  ProductContent,
  PriceGroup,
  PriceRow,
  InstallmentsInfo,
  DispatchTag,
  Description,
} from './styles';

import { Product } from '../../../types/product';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [fragment, cents] = product.price.split('.');

  const isInterestFree = product.installmentsInfo.includes('sem juros');
  return (
    <Container>
      <Link to={`/${product.categoryId}/${product.id}`}>
        <ProductImage>
          <img alt={product.title} src={product.imageUrl} />
        </ProductImage>
        <ProductContent>
          <PriceGroup>
            <PriceRow>
              <span className="sinbol">R$</span>
              <span className="fraction">{fragment}</span>
              <span className="cents">{cents}</span>
            </PriceRow>

            <InstallmentsInfo
              style={
                isInterestFree ? { color: 'var(--color-green)' } : undefined
              }
            >
              {product.installmentsInfo}
            </InstallmentsInfo>
          </PriceGroup>

          <DispatchTag>Enviando normalmente</DispatchTag>

          <Description>{product.title}</Description>
        </ProductContent>
      </Link>
    </Container>
  );
};

export default ProductCard;
