import styled from 'styled-components';

import { HiChevronRight } from 'react-icons/hi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 30px 0 60px;
  position: relative;
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  margin-bottom: 22px;
`;

export const Title = styled.div`
  > span {
    font-size: 26px;
    color: var(--color-gray);
    font-weight: 200;
    letter-spacing: 1px;
  }

  > a {
    margin-left: 16px;
    color: var(--color-blue);
    margin-bottom: 2px;
    text-decoration: none;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 16px;
`;

const buttonSize = '64px';
export const NextButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--panel-shadow);

  position: absolute;
  top: calc(320px / 2);
  right: -32px;

  height: ${buttonSize};
  width: ${buttonSize};
  border-radius: calc(${buttonSize} / 2);
  background: var(--color-white);

  cursor: pointer;

  > span {
    position: relative;
    right: -1px;
    bottom: -2px;
  }
`;

export const NextIcon = styled(HiChevronRight)`
  height: 32px;
  width: 32px;
  color: var(--color-blue);
`;
