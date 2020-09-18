import { Product } from './product';

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
