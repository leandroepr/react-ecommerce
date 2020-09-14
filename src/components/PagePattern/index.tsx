import React from 'react';

import {
  Container,
  Warpper,
  HeaderContent,
  Body,
  FooterContent,
} from './styles';
import Header from '../Header';
import Footer from '../Footer';

interface Props {
  headerContent?: React.ReactNode;
  children: JSX.Element[] | JSX.Element;
  footerContent?: React.ReactNode;
}

const PagePattern: React.FC<Props> = ({
  headerContent,
  footerContent,
  children,
}) => {
  return (
    <Container>
      <HeaderContent>
        <Warpper>{headerContent || <Header />}</Warpper>
      </HeaderContent>

      <Body>
        <Warpper>{children}</Warpper>
      </Body>

      <FooterContent>
        <Warpper>{footerContent || <Footer />}</Warpper>
      </FooterContent>
    </Container>
  );
};

export default PagePattern;
