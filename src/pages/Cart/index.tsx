import React from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import PagePattern from '../../components/PagePattern';

import { Container, TabContainer, TabTitle } from './styles';
import CartContent from './CartContent';
import SavedItems from './SavedItems';

const Cart: React.FC = () => {
  return (
    <PagePattern>
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
    </PagePattern>
  );
};

export default Cart;
