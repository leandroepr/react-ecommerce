import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-black);

  margin: 0 0 30px;
`;

export const FilterTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const FilterList = styled.ul`
  list-style: none;
`;

export const FilterItem = styled.li`
  margin-bottom: 7px;
  > a {
    text-decoration: none;
    color: var(--color-gray);
    cursor: pointer;
    > span {
      font-size: 13px;

      :last-child {
        font-weight: 200;
        color: var(--color-gray);
        margin-left: 6px;
      }
    }
  }
`;
