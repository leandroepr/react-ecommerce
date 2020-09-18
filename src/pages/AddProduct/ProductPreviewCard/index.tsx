import React from 'react';

import {
  Container,
  ProductImage,
  ProductContent,
  PriceGroup,
  PriceRow,
  InstallmentsInfo,
  CategoryTag,
  Condition,
  Title,
} from './styles';

interface IProduct {
  id: string;
  title: string;
  imageUrl: string;
  condition: string;
  categoryId: string;
  categories: string[];
  price: string;
  installmentsInfo: string;
  stockAmount: number;
  soldAmount: number;
}

interface Props {
  product: IProduct;
}

const ProductPrevewCard: React.FC<Props> = ({ product }) => {
  const [fragment, cents] =
    typeof product.price === 'undefined'
      ? ['00', '00']
      : product.price.split('.');

  const isInterestFree = product.installmentsInfo.includes('sem juros');
  const condition = `${product.condition} | ${product.soldAmount} vendidos`;
  return (
    <Container>
      <ProductImage>
        <img alt="" src={product.imageUrl} />
      </ProductImage>
      <ProductContent>
        <Condition>{condition}</Condition>
        <Title>{product.title}</Title>
        <PriceGroup>
          <PriceRow>
            <span className="sinbol">R$</span>
            <span className="fraction">{fragment}</span>
            <span className="cents">{cents}</span>
          </PriceRow>

          <InstallmentsInfo
            style={isInterestFree ? { color: 'var(--color-green)' } : undefined}
          >
            {product.installmentsInfo}
          </InstallmentsInfo>
        </PriceGroup>

        {product.categories.map((category) => (
          <CategoryTag key={category}>{category}</CategoryTag>
        ))}
      </ProductContent>
    </Container>
  );
};

export default ProductPrevewCard;
