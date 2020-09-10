import React from 'react';

import { Container, Warpper, Header, Body, Footer } from './styles';

interface Props {
  headerContent: React.ReactNode;
  bodyContent: React.ReactNode;
  footerContent: React.ReactNode;
}

const PagePattern: React.FC<Props> = ({
  headerContent,
  bodyContent,
  footerContent,
}) => {
  return (
    <Container>
      <Header>
        <Warpper>{headerContent}</Warpper>
      </Header>

      <Body>
        <Warpper>{bodyContent}</Warpper>
      </Body>

      <Footer>
        <Warpper>{footerContent}</Warpper>
      </Footer>
    </Container>
  );
};

export default PagePattern;
