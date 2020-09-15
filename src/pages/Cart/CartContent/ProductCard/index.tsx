import React from 'react';

import {
  Container,
  ProductImage,
  Item,
  Subtitle,
  PaymentInfo,
  Actions,
  Action,
  Counter,
  MinusIcon,
  PlusIcon,
  Price,
  PriceRow,
} from './styles';
import { CartItem } from '../../../../types/cart';
import { Link } from 'react-router-dom';
import { useCart } from '../../../../context/CartContext';

interface Props {
  item: CartItem;
}

const ProductCard: React.FC<Props> = ({ item }) => {
  const { product, amount } = item;
  const { updateItemFromCart, removeItemFromCart } = useCart();

  const increase = () => {
    updateItemFromCart({ product: product, amount: amount + 1 });
  };
  const decrease = () => {
    updateItemFromCart({ product: product, amount: amount - 1 });
  };
  const remove = () => {
    removeItemFromCart(product.id);
  };

  const [fraction, cents] = `${(
    item.amount * parseFloat(item.product.price)
  ).toFixed(2)}`.split('.');

  return (
    <Container>
      <ProductImage>
        <img alt={product.title} src={product.imageUrl} />
      </ProductImage>
      <Item>
        <h2>{product.title}</h2>
        <Subtitle>
          <span>Lorem ipsum dolor sit amet consectetur</span>
          <Link to={`/${product.categoryId}/${product.id}`}>Alterar</Link>
        </Subtitle>
        <PaymentInfo>
          <span>{product.installmentsInfo}</span>
        </PaymentInfo>
        <Actions>
          <Action>Mais Produtos do vendedor</Action>
          <Action>Comprar agora</Action>
          <Action>Salvar para depois</Action>
          <Action style={{ cursor: 'pointer' }} onClick={remove}>
            Excluir
          </Action>
        </Actions>
      </Item>
      <Counter>
        <div>
          <MinusIcon
            style={amount === 0 ? { color: 'var(--color-border)' } : undefined}
            onClick={amount > 0 ? decrease : undefined}
          />
          <span>{amount}</span>
          <PlusIcon onClick={increase} />
        </div>
        <span>{`${product.stockAmount} disponíveis`}</span>
      </Counter>
      <Price>
        <PriceRow>
          <span className="simbol">R$</span>
          <span className="fraction">{fraction}</span>
          <span className="cents">{cents}</span>
        </PriceRow>
      </Price>
    </Container>
  );
};

export default ProductCard;
