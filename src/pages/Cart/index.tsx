import React from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import PagePattern from '../../components/PagePattern';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Container, TabContainer, TabTitle } from './styles';
import CartContent from './CartContent';
import SavedItems from './SavedItems';

const Cart: React.FC = () => {
  return (
    <PagePattern
      headerContent={<Header />}
      bodyContent={<Content />}
      footerContent={<Footer />}
    />
  );
};

const Content = () => {
  return (
    <Container>
      <TabContainer>
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab>
              <TabTitle>Carrinho (3)</TabTitle>
            </Tab>
            <Tab>
              <TabTitle>Salvo (0) </TabTitle>
            </Tab>
          </TabList>

          <TabPanel>
            <CartContent />
          </TabPanel>

          <TabPanel>
            <SavedItems />
          </TabPanel>
        </Tabs>
      </TabContainer>
    </Container>
  );
};

export default Cart;
