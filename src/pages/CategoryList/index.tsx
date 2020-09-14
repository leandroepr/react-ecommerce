import React, { useContext } from 'react';

import PagePattern from '../../components/PagePattern';
import { Container } from './styles';
import CategorySection from './CategorySection';

import { CategoryProvider, CategoryContext } from './categoryContext';

const CategoryList: React.FC = () => {
  const categoryList = useContext(CategoryContext);
  return (
    <CategoryProvider>
      <PagePattern>
        <Container>
          {categoryList.map((category, index) => (
            <CategorySection
              key={index}
              title={category.title}
              detailPath={category.detailPath}
              productList={category.productList}
            />
          ))}
        </Container>
      </PagePattern>
    </CategoryProvider>
  );
};

export default CategoryList;
