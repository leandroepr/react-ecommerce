import React from 'react';

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';
import { Product } from '../../../types/product';
import { useCart } from '../../../context/CartContext';
import ProductList from '../../ProductList';

interface Props {
  product: Product;
}

const ProductAction: React.FC<Props> = ({ product }) => {
  const {
    id,
    title,
    price,
    installmentsInfo,
    stockAmount,
    condition,
    soldAmount,
  } = product;

  const stockStatusLabel =
    stockAmount > 0 ? 'Estoque disponível' : 'Sem estoque';
  const conditionLabel = `${condition} | ${soldAmount} vendidos`;
  const [fragment, cents] = price.split('.');

  const { addItemToCart, cartItemList } = useCart();

  const byItNowHandler = () => {
    console.log(`By ${product.id} now`);
  };

  const addToCartHandler = () => {
    console.log(`Add ${product.id} to cart`);
    addItemToCart({
      product: product,
      amount: 1,
    });
  };

  const isThisProductinCart =
    cartItemList.filter((item) => item.product.id === product.id).length > 0;

  return (
    <Container>
      <Condition>{conditionLabel}</Condition>
      <Row>
        <h1>{title}</h1>
        <HeartIcon />
      </Row>
      <DispatchTag>Enviando normalmente</DispatchTag>
      <PriceCard>
        <PriceRow>
          <span className="simbol">R$</span>
          <span className="fraction">{fragment}</span>
          <span className="cents">{cents}</span>
        </PriceRow>
        <InstallmentsInfo>{installmentsInfo}</InstallmentsInfo>
        <StockStatus>{stockStatusLabel}</StockStatus>
        <MethodCard>
          <CheckIcon />
          <div>
            <span className="title">Frete grátis</span>
            <span className="details">Benefício Lorem Ipsum</span>
            <a href="#" className="more">
              Ver mais opções
            </a>
          </div>
        </MethodCard>
        <Actions>
          <Button onClick={byItNowHandler} solid>
            Comprar agora
          </Button>
          <Button
            style={
              isThisProductinCart
                ? {
                    cursor: 'not-allowed',
                    border: '1px solid var(--color-border)',
                    outline: '0',
                  }
                : undefined
            }
            onClick={isThisProductinCart ? undefined : addToCartHandler}
          >
            {isThisProductinCart
              ? 'Adicionado ao carrinho'
              : 'Adicionar ao carrinho'}
          </Button>
        </Actions>
        <Benefits>
          <li>
            <ShieldIcon />
            <p>
              Compra Grarantida, receba o produto que está esperando ou
              devolvemos o dinheiro.
            </p>
          </li>
        </Benefits>
      </PriceCard>
    </Container>
  );
};

export default ProductAction;
