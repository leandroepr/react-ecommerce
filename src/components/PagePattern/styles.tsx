import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 0 16px 0;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  min-height: 48px;

  border-top: 1px solid var(--color-border);
  background: var(--color-footer);
`;
