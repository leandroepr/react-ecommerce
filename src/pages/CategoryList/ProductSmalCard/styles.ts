import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  color: var(--color-gray);
  box-shadow: var(--panel-shadow);
  border-radius: 5px;
  cursor: pointer;
`;

export const ItemImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 224px;

  > img {
    max-height: 99%;
  }
`;

export const PriceBlock = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 24px;
`;

export const PriceRow = styled.div`
  display: flex;

  font-size: 24px;
  color: var(--color-black);
  font-weight: 300;
  .simbol {
    margin-right: 3px;
  }
  .fraction {
    margin-right: 1px;
  }
  .cents {
    font-size: 16px;
    margin-top: 1px;
  }
`;

export const InstallmentsInfo = styled.span`
  font-size: 16px;
  font-weight: 300;
`;
