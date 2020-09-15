import styled from 'styled-components';

export const Container = styled.div``;

export const ProductList = styled.div``;
export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  padding-top: 48px;
  border-top: 1px solid var(--color-border);
  margin-top: 48px;
  > button {
    padding: 13px 32px 12px;
    font-size: 18px;

    margin: 48px 0 0 32px;
  }
`;

type ButtonProps = { solid?: boolean };
export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  border-radius: 4px;
  padding: 12px 10px;
  margin-top: 10px;

  color: ${(props) =>
    props.solid ? 'var(--color-white)' : 'var(--color-blue)'};
  background: ${(props) => (props.solid ? 'var(--color-blue)' : 'transparent')};
  border: ${(props) => (props.solid ? 'none' : '1px solid var(--color-blue)')};

  cursor: pointer;
`;

export const EmptyCartInfo = styled.div`
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
