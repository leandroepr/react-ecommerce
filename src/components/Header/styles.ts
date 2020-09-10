import styled, { css } from 'styled-components';

import {
  HiOutlineUserCircle,
  HiOutlineShoppingCart,
  HiOutlineSearch,
} from 'react-icons/hi';

export const Container = styled.div`
  width: 100%;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  flex-direction: column;
`;

export const Warpper = styled.div`
  display: flex;
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: var(--color-gray);
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--color-white);
  width: 50%;

  border: 1px solid var(--color-border);
  box-shadow: var(--input-shadow);
  border-radius: 4px;

  position: relative;
  > input {
    padding: 0 42px 0 16px;
    height: 30px;
    width: 100%;

    color: var(--color-gray);
    outline-color: var(--color-border);
  }
`;

export const SearchIcon = styled(HiOutlineSearch)`
  position: absolute;
  width: 30px;
  height: 20px;
  color: var(--color-gray);
  top: 5px;
  right: 10px;

  padding-left: 10px;
  border-left: 1px solid var(--color-border);

  cursor: pointer;
  &:hover {
    color: var(--color-blue);
  }
`;

export const ProfileData = styled.div`
  display: flex;
  > div {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 14px;
      color: var(--color-gray);
    }

    span + span {
      font-size: 12px;
      color: var(--color-gray);
    }
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  font-weight: 100;
  color: var(--color-gray);
`;

export const ProfileIcon = styled(HiOutlineUserCircle)`
  ${iconCSS}
  margin-right: 16px;
`;

export const CartIcon = styled(HiOutlineShoppingCart)`
  ${iconCSS}

  margin-left: 16px;
  &:hover {
    color: var(--color-blue);
  }
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
