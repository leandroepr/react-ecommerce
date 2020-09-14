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

interface Props {
  title: string;
}

const CategorySection: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <TitleRow>
        <Title>
          <span>{title}</span>
          <a href="#">Ver detalhes</a>
        </Title>
      </TitleRow>
      <List>
        <ProductSmalCard />
        <ProductSmalCard />
        <ProductSmalCard />
        <ProductSmalCard />
        <ProductSmalCard />
      </List>
      <NextButton>
        <span>
          <NextIcon />
        </span>
      </NextButton>
    </Container>
  );
};

export default CategorySection;
