import React, { useCallback } from 'react';

import {
  Container,
  TitleRow,
  Title,
  List,
  NextButton,
  NextIcon,
} from './styles';
import ProductSmalCard from '../ProductSmalCard';
import { useHistory } from 'react-router-dom';

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  condition: string;
  categoryId: string;
  categories: string[];
  description: string;
  price: string;
  installmentsInfo: string;
  stockAmount: number;
  soldAmount: number;
}

interface Props {
  categoryId: string;
  title: string;
  detailPath: string;
  productList: Product[];
}

const CategorySection: React.FC<Props> = ({
  categoryId,
  title,
  detailPath,
  productList,
}) => {
  const history = useHistory();
  const handleNextButtonClick = useCallback(() => {
    history.push(`/${categoryId}`);
  }, [categoryId, history]);

  return (
    <Container>
      <TitleRow>
        <Title>
          <span>{title}</span>
          <a href={detailPath}>Ver detalhes</a>
        </Title>
      </TitleRow>
      <ProductSmalCardList productList={productList} />
      <NextButton onClick={handleNextButtonClick}>
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
        categoryId={product.categoryId}
        productId={product.id}
        imageUrl={product.imageUrl}
        imageDescription={product.title}
        installmentInfo={product.installmentsInfo}
        priceFraction={product.price.split('.')[0]}
        priceCents={product.price.split('.')[1]}
      />
    ))}
  </List>
);

export default CategorySection;
