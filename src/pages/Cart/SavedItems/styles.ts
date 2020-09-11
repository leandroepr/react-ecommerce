import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 120px 30px 300px;

  > h3 {
    font-size: 32px;
    font-weight: 200;
    color: var(--color-gray);
  }

  > p {
    color: var(--color-gray);
    font-weight: 200;
    width: 400px;
    text-align: center;
    line-height: 1.6;
  }
`;
