import styled from 'styled-components';

import { IoMdRemove, IoMdAdd } from 'react-icons/io';

const minusIcon = IoMdRemove;
const plusIcon = IoMdAdd;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin: 44px 0 48px;
`;

export const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 48px;

  > img {
    margin-top: 2px;
    width: 48px;
    height: 48px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 48px;

  > h2 {
    color: var(--color-black);
    font-size: 17px;
    font-weight: 500;
  }
`;

export const Title = styled.div``;

export const Subtitle = styled.div`
  font-size: 16px;
  color: var(--color-gray);
  font-weight: 300;

  > a {
    text-decoration: none;
    color: var(--color-blue);
    margin-left: 7px;
  }
`;

export const PaymentInfo = styled.div`
  height: 30px;
  margin: 8px 0;
  > span {
    font-size: 14px;
    color: var(--color-green);
    font-weight: 300;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Action = styled.a`
  font-size: 14px;
  color: var(--color-blue);
  padding-right: 15px;

  & + a {
    padding-left: 15px;
  }
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  flex: 1;

  font-size: 14px;
  > div {
    display: flex;
    align-items: center;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: 10px;
    > svg {
      color: var(--color-blue);
      cursor: pointer;
    }
    > span {
      display: inline-block;
      width: 50px;
      text-align: center;
    }
  }
  > span {
    margin-top: 10px;
    color: var(--color-gray);
  }
`;

export const MinusIcon = styled(minusIcon)`
  width: 16px;
  height: 16px;
`;

export const PlusIcon = styled(plusIcon)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 130px;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 32px;
  font-weight: 300;
  color: var(--color-black);

  .fraction {
    margin-left: 8.8px;
  }
  .cents {
    font-size: 20px;
    padding-top: 5px;
    margin-left: 1px;
  }
`;
