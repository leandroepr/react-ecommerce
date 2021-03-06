import React from 'react';

import { Container, FilterTitle, FilterList, FilterItem } from './styles';

interface Filter {
  name: string;
  amount: string;
}
interface FilterProps {
  title: string;
  filters: Filter[];
}
const FilterCard: React.FC<FilterProps> = ({ title, filters }) => {
  return (
    <Container>
      <FilterTitle>{title}</FilterTitle>
      <FilterList>
        {filters.map(({ name, amount }, i) => (
          <FilterItem key={i}>
            <a href="/">
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
