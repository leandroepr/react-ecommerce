import React, { createContext, useContext, useState } from 'react';
import { Cart, CartItem } from '../types/cart';
import usePersistedState from '../utils/usePersistedState';

const emptyCart: Cart = {
  cartItemList: [],
  deliveryValue: 0,
  setDeliveryValue: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateItemFromCart: () => {},
  clearCart: () => {},
};

export const CartContext = createContext<Cart>(emptyCart);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [deliveryValue, setDeliveryValue] = useState(10.0);

  const [cartItemList, setCartItemList] = usePersistedState<CartItem[]>(
    'cartItemList',
    []
  );

  const addItemToCart = (item: CartItem) => {
    setCartItemList((prevState) => [...prevState, item]);
  };

  const removeItemFromCart = (id: string) => {
    setCartItemList((prevState) =>
      prevState.filter((item) => item.product.id !== id)
    );
  };

  const updateItemFromCart = (item: CartItem) => {
    setCartItemList((preveState) =>
      preveState.map((i) => (i.product.id === item.product.id ? item : i))
    );
  };
  const clearCart = () => {
    setCartItemList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItemList,
        removeItemFromCart,
        addItemToCart,
        updateItemFromCart,
        deliveryValue,
        setDeliveryValue,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
