import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Warpper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
`;

export const CategoriesWarpper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormWarpper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 16px;

  background: var(--color-white);
  box-shadow: var(--panel-shadow);
  border-radius: 4px;
`;

export const Row = styled.div`
  display: flex;
  padding: 32px;
  border-bottom: 1px solid var(--color-border);
  > h1 {
    color: var(--color-balck);
    font-size: 26px;
    color: var(--color-gray);
    font-weight: 200;
    letter-spacing: 1px;
  }
`;

export const Form = styled.form`
  background: var(--color-white);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 32px;

  > label {
    position: relative;
    > span {
      position: absolute;
      color: var(--color-gray);
      font-size: 12px;
      top: -7px;
      margin-left: 13px;
      background: var(--color-white);
      padding: 0 3px;
      font-weight: 200;
    }

    > input,
    > select {
      width: 100%;
      height: 39px;
      padding: 0 42px 0 16px;
      margin-bottom: 16px;

      font-size: 14px;
      color: var(--color-black);
      background: var(--color-white);

      border: 1px solid var(--color-border);
      border-radius: 4px;
      box-shadow: var(--input-shadow);

      outline: 0;

      &::placeholder {
        color: var(--color-search-placeholder);
      }
    }
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 16px;
  border-top: 1px solid var(--color-border);
  margin-top: 16px;
  > button {
    padding: 13px 32px 12px;
    font-size: 18px;
    color: #dc3545;
    border: 1px solid #dc3545;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex: 1;

    > button {
      padding: 13px 32px 12px;
      font-size: 18px;
    }
    > button + button {
      margin-left: 32px;
    }
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

  color: ${(props) =>
    props.solid ? 'var(--color-white)' : 'var(--color-blue)'};
  background: ${(props) => (props.solid ? 'var(--color-blue)' : 'transparent')};
  border: ${(props) => (props.solid ? 'none' : '1px solid var(--color-blue)')};

  width: 150px;

  cursor: pointer;
`;
