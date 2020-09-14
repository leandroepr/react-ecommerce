import styled, { css } from 'styled-components';

import {
  HiOutlineUserCircle,
  HiOutlineShoppingCart,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { FiShoppingBag, FiZap } from 'react-icons/fi';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'logo search offer'
    'address navigation profile';
  grid-template-columns: 150px 1fr 320px;
  grid-template-rows: 39px 26px;
  grid-gap: 8px 32px;

  padding: 12px 0px;
`;

export const LogoWarpper = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-weight: bold;
  color: var(--color-emphasis);

  font-variant-caps: all-petite-caps;
  font-size: 18px;
  line-height: 15px;

  > div {
    margin-left: 10px;
    > p + p {
      letter-spacing: 6px;
      font-weight: 400;
    }
  }
`;

export const SearchWrapper = styled.div`
  grid-area: search;
  display: flex;
  flex-direction: row;
  position: relative;

  > input {
    width: 100%;
    height: 39px;
    padding: 0 42px 0 16px;

    font-size: 14px;
    color: var(--color-gray);
    background: var(--color-white);

    border: 1px solid var(--color-border);
    border-radius: 4px;
    box-shadow: var(--input-shadow);

    outline: 0;

    &::placeholder {
      color: var(--color-search-placeholder);
    }

    ~ svg {
      position: absolute;
      color: var(--color-gray);
      top: 10px;
      right: 10px;

      padding-left: 10px;
      border-left: 1px solid var(--color-border);

      transition: 180ms ease-in-out;

      cursor: pointer;
      &:hover {
        color: var(--color-blue);
      }
    }

    &:focus {
      border: 1px solid var(--color-blue);

      ~ svg {
        color: var(--color-blue);
      }
    }
  }
`;

export const OfferWarpper = styled.div`
  grid-area: offer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  color: var(--color-gray);
  > span {
    margin-left: 5px;
  }
  /* background: yellow; */
`;

export const AddressWarpper = styled.div`
  grid-area: address;
  /* background: purple; */

  display: flex;
  flex-direction: row;

  font-size: 10px;
  color: var(--color-gray);
  > div {
    margin-left: 5px;

    overflow: hidden;
    > p {
      font-size: 11px;
      font-weight: 300;
      text-overflow: ellipsis;
    }
    > strong {
      text-overflow: ellipsis;
    }
  }
`;

export const NavigationWarpper = styled.nav`
  grid-area: navigation;
  display: flex;
  flex-direction: row;
  align-items: center;

  > span {
    font-size: 14px;
    font-weight: 300;
    color: var(--color-gray);

    cursor: pointer;
    margin-right: 32px;

    &:hover {
      color: var(--color-blue);
    }
  }
`;

export const ProfileMenuWarpper = styled.div`
  grid-area: profile;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    > span {
      font-size: 14px;
      font-weight: 400;
      color: var(--color-gray);
      margin: 0 5px;
    }

    span + span {
      font-size: 12px;
      color: var(--color-gray);
    }
  }

  .more::after {
    content: '▾';
    font-size: 18px;
    margin-left: 2px;
  }
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: var(--color-gray);
`;

export const SearchIcon = styled(HiOutlineSearch)`
  width: 30px;
  height: 20px;
`;

export const ProfileIcon = styled(HiOutlineUserCircle)`
  ${iconCSS}
`;

export const LogoIcon = styled(FiShoppingBag)`
  width: 32px;
  height: 32px;
`;
export const OfferIcon = styled(FiZap)`
  ${iconCSS}
`;
export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconCSS}
`;

export const NotificationIcon = styled(HiOutlineBell)`
  ${iconCSS}
  cursor: pointer;
`;

export const CartIcon = styled(HiOutlineShoppingCart)`
  ${iconCSS}
  cursor: pointer;
`;
