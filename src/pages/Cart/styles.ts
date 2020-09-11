import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabContainer = styled.div`
  box-shadow: var(--panel-shadow);
  margin: 32px 0;
  padding: 64px;

  background: var(--color-white);

  > div {
    > ul {
      color: var(--color-blue);
      border-color: var(--color-border);

      > li {
        margin: 0;
        padding: 0;
      }
    }
  }
`;

export const TabTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 220px;
  padding: 15px 0;

  font-size: 17px;
  font-weight: 400;
  letter-spacing: 1px;
`;
