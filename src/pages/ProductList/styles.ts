import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterHeader = styled.div`
  margin-bottom: 50px;
  color: var(--color-black);

  > h1 {
    font-size: 26px;
    margin: 16px 0 5px;
  }
  > span {
    font-size: 14px;
    color: var(--color-gray);
    font-weight: 300;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 16px 0;
  color: var(--color-black);

  font-size: 14px;
  font-weight: 300;
  > strong {
    margin-right: 10px;
  }
  > span + span {
    ::before {
      content: '-';
      margin: 0 10px;
    }
  }
`;

export const Panel = styled.div`
  display: grid;
  grid-template-columns: 25fr 75fr;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  :first-child {
    /* background: var(--color-gray); */
    margin-right: 16px;
  }
  :last-child {
  }
`;

export const ProductsPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
`;
