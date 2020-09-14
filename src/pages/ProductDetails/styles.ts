import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0px;

  > a {
    font-size: 14px;
    text-decoration: none;
    padding: 2.5px 0;
    color: var(--color-gray);

    & + a {
      color: var(--color-blue);
      padding-left: 10px;
      border-left: 1px solid var(--color-border);
      margin-left: 10px;
    }
  }
`;

export const Panel = styled.div`
  background: var(--color-white);
  box-shadow: var(--panel-shadow);

  display: grid;
  grid-template-columns: 65fr 35fr; // porcentagem de distribuição das colunas
`;

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
  }
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 530px;

  > img {
    height: 73%;
  }
`;
export const Description = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 44px 32px;
  /* white-space: pre-wrap; */

  > h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }
  > p {
    font-size: 20px;
    color: var(--color-gray);
    line-height: 27px;
  }
`;
