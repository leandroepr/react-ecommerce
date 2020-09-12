import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--color-white);

  border: 1px solid var(--color-border);
  border-radius: 7px;
  box-shadow: var(--panel-shadow);

  color: var(--color-black);
`;

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 284px;

  border-bottom: 1px solid var(--color-border);

  > img {
    max-width: 90%;
    max-height: 100%;
  }
`;

export const ProductContent = styled.div`
  height: 247px;
  padding: 20px;
`;

export const PriceGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
`;

export const PriceRow = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 24px;
  color: var(--color-black);

  > span {
  }
  .sinbol {
    margin-right: 5px;
  }
  .fraction {
    margin-right: 2px;
  }
  .cents {
    font-size: 16px;
    margin-top: 2px;
  }
`;

export const InstallmentsInfo = styled.div`
  font-size: 14px;
  color: var(--color-green);
`;

export const DispatchTag = styled.div`
  color: var(--color-blue);
  padding: 3px 7px;
  background: #ecf3fc;
  border-radius: 4px;
  width: fit-content;

  font-size: 14px;
  margin-bottom: 13px;
`;

export const Description = styled.div`
  font-size: 14px;
`;
