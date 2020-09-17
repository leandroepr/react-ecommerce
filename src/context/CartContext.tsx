import React, { createContext, useContext, useState } from 'react';

import usePersistedState from '../utils/usePersistedState';

export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  condition: string;
  categoryId: string;
  categories: string[];
  description: string;
  price: string;
  installmentsInfo: string;
  stockAmount: number;
  soldAmount: number;
}

export interface CartItem {
  product: Product;
  amount: number;
}

export interface Cart {
  cartItemList: CartItem[];
  removeItemFromCart: (id: string) => void;
  addItemToCart: (item: CartItem) => void;
  deliveryValue: number;
  setDeliveryValue: (value: number) => void;
  updateItemFromCart: (item: CartItem) => void;
  clearCart: () => void;
}

export const CartContext = createContext<Cart>({} as Cart);

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
