import React from 'react';

import { Container, FilterTitle, FilterList, FilterItem } from './styles';

interface FilterItem {
  name: string;
  amount: string;
}
interface FilterProps {
  title: string;
  items: FilterItem[];
}

const FilterCard: React.FC<FilterProps> = ({ title, items }) => {
  return (
    <Container>
      <FilterTitle>{title}</FilterTitle>
      <FilterList>
        {items.map(({ name, amount }, i) => (
          <FilterItem key={i}>
            <a href="#">
              <span>{name}</span>
              <span>({amount})</span>
            </a>
          </FilterItem>
        ))}
      </FilterList>
    </Container>
  );
};

export default FilterCard;
