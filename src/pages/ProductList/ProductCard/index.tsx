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

import tshirtImage from '../../../assets/images/tshirt.png';

interface Props {
  freeShipping?: boolean;
  interestFree?: boolean;
}

const ProductCard: React.FC = () => {
  return (
    <Container>
      <ProductImage>
        <img alt="T-Shirt" src={tshirtImage} />
      </ProductImage>
      <ProductContent>
        <PriceGroup>
          <PriceRow>
            <span className="sinbol">R$</span>
            <span className="fraction">34</span>
            <span className="cents">99</span>
          </PriceRow>

          <InstallmentsInfo>3x de R$ 11,67 sem juros</InstallmentsInfo>
        </PriceGroup>

        <DispatchTag>Enviando normalmente</DispatchTag>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          eum, fugiat iusto quo voluptate a.
        </Description>
      </ProductContent>
    </Container>
  );
};

export default ProductCard;
