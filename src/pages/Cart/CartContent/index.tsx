import React from 'react';

import {
  Container,
  ProductList,
  ActionContainer,
  Button,
  EmptyCartInfo,
} from './styles';

import ProductCard from './ProductCard';

import SumaryCard from './SumaryCard';
import { useCart } from '../../../context/CartContext';
import { useHistory } from 'react-router-dom';

const CartContent: React.FC = () => {
  const { cartItemList, deliveryValue, clearCart } = useCart();
  let valueOfProducts = 0;
  cartItemList.forEach((item) => {
    valueOfProducts =
      valueOfProducts + item.amount * parseFloat(item.product.price);
  });

  const totalAmount = valueOfProducts + deliveryValue;

  const history = useHistory();
  if (cartItemList.length === 0) {
    return (
      <EmptyCartInfo>
        <h3>O seu carrinho está vazio</h3>
        <p>Não sabe o que comprar? Milhões de produtos esperam por você!</p>
      </EmptyCartInfo>
    );
  }

  const cancelHandler = () => {
    clearCart();
  };

  const conclusionHandler = () => {
    clearCart();
    history.push('/order');
  };

  return (
    <Container>
      <ProductList>
        {cartItemList.map((item) => (
          <ProductCard key={item.product.id} item={item} />
        ))}
      </ProductList>
      <SumaryCard
        numberOfProducts={cartItemList.length}
        valueOfProducts={valueOfProducts.toFixed(2)}
        costOfFreight={deliveryValue.toFixed(2)}
        totalAmount={totalAmount.toFixed(2)}
      />
      <ActionContainer>
        <Button onClick={cancelHandler}>Cancelar a compra</Button>
        <Button onClick={conclusionHandler} solid>
          Continuar a compra
        </Button>
      </ActionContainer>
    </Container>
  );
};

export default CartContent;
