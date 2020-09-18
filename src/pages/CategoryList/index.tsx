import React from 'react';

import PagePattern from '../../components/PagePattern';
import { Container } from './styles';
import CategorySection from './CategorySection';

import {
  useCategories,
  Category,
  Product,
} from '../../context/categoryContext';

const CategoryList: React.FC = () => {
  const { categoryList, productList } = useCategories();

  return (
    <PagePattern>
      <CategoryListCard categoryList={categoryList} productList={productList} />
    </PagePattern>
  );
};

interface Props {
  categoryList: Category[];
  productList: Product[];
}
const CategoryListCard: React.FC<Props> = ({ categoryList, productList }) => {
  if (!categoryList) {
    return <p>Loading</p>;
  }
  return (
    <Container>
      {categoryList.map((category) => (
        <CategorySection
          key={category.id}
          categoryId={category.id}
          title={category.displayName}
          detailPath={category.id}
          productList={productList
            .filter((p) => p.categoryId === category.id)
            .slice(0, 5)}
        />
      ))}
    </Container>
  );
};

export default CategoryList;
