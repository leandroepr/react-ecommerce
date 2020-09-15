import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--color-white);
  margin: 32px 0;
  border-radius: 4px;
  box-shadow: var(--panel-shadow);

  padding: 120px 30px 300px;

  > h3 {
    font-size: 32px;
    font-weight: 200;
    color: var(--color-black);
  }

  > p {
    color: var(--color-gray);
    font-weight: 200;
    width: 400px;
    text-align: center;
    line-height: 1.6;
  }
`;
