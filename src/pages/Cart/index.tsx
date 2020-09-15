import React from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import PagePattern from '../../components/PagePattern';

import { Container, TabContainer, TabTitle } from './styles';
import CartContent from './CartContent';
import SavedItems from './SavedItems';
import { useCart } from '../../context/CartContext';

const Cart: React.FC = () => {
  const { cartItemList } = useCart();

  return (
    <PagePattern>
      <Container>
        <TabContainer>
          <Tabs defaultIndex={0}>
            <TabList>
              <Tab>
                <TabTitle>Carrinho ({cartItemList.length})</TabTitle>
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
