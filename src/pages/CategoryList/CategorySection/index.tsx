import React from 'react';

import {
  Container,
  TitleRow,
  Title,
  List,
  NextButton,
  NextIcon,
} from './styles';
import ProductSmalCard from '../ProductSmalCard';
import { Product } from '../categoryContext';

interface Props {
  title: string;
  detailPath: string;
  productList: Product[];
}

const CategorySection: React.FC<Props> = ({
  title,
  detailPath,
  productList,
}) => {
  return (
    <Container>
      <TitleRow>
        <Title>
          <span>{title}</span>
          <a href={detailPath}>Ver detalhes</a>
        </Title>
      </TitleRow>
      <ProductSmalCardList productList={productList} />
      <NextButton>
        <span>
          <NextIcon />
        </span>
      </NextButton>
    </Container>
  );
};

interface CardProps {
  productList: Product[];
}
const ProductSmalCardList: React.FC<CardProps> = ({ productList }) => (
  <List>
    {productList.map((product, index) => (
      <ProductSmalCard
        key={index}
        imageUrl={product.imageUrl}
        imageDescription={product.imageDescription}
        installmentInfo={product.installmentInfo}
        priceFraction={product.priceFraction}
        priceCents={product.priceCents}
      />
    ))}
  </List>
);

export default CategorySection;
