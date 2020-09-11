import styled, { css } from 'styled-components';

const columnCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* background: gray; */
`;

const rowCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.div``;

export const SumaryContent = styled.div`
  ${columnCss}
`;

export const SumaryRowProducts = styled.div`
  ${rowCss}
  margin-bottom: 8px;
`;

export const SumaryRowShipping = styled.div`
  ${rowCss}
  margin-bottom: 16px;
  > span {
    color: var(--color-blue);

    ::after {
      content: '▾';
      margin-left: 5px;
      font-size: 24px;
    }
  }
`;
export const SumaryTotalContent = styled.div`
  ${columnCss}
  margin-bottom: 16px;
`;

export const SumaryRowTotal = styled.div`
  ${rowCss}
  > span {
    font-size: 24px;
  }
  > div {
    > span {
      font-size: 32px;
      font-weight: 500;
    }
    .cents {
      font-size: 14px;
      margin-top: 2px;
    }
  }
`;

export const Label = styled.span`
  font-size: 18px;
  line-height: 32px;
  color: var(--color-black);
  font-weight: 300;
  letter-spacing: 1px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: var(--color-black);

  width: 170px;
  text-align: end;
  margin-left: 24px;

  > span {
    font-size: 24px;
    font-weight: 300;
  }
  .simbol {
    margin-right: 5px;
  }
  .fraction {
    margin-right: 1px;
  }
  .cents {
    font-size: 10px;
    margin-top: 2px;
  }
`;
