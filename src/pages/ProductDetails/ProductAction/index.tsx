import React, { useState, useContext } from 'react';

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
import { ProductDetailsContext } from '../ProductDetailsContext';

interface PriceTag {
  simbol: string;
  fragment: string;
  cents: string;
}

interface ProductData {
  condition: string;
  title: string;
  price: PriceTag;
  installmentsInfo: string;
  stockAmount: number;
  soldAmount: number;
}

function ProductAction() {
  const {
    title,
    price,
    installmentsInfo,
    stockAmount,
    condition,
    soldAmount,
  } = useContext(ProductDetailsContext);
  const stockStatusLabel =
    stockAmount > 0 ? 'Estoque disponível' : 'Sem estoque';
  const conditionLabel = `${condition} | ${soldAmount} vendidos`;

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
          <span className="simbol">{price.simbol}</span>
          <span className="fraction">{price.fragment}</span>
          <span className="cents">{price.cents}</span>
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
          <Button solid>Comprar agora</Button>
          <Button>Adicionar ao carrinho</Button>
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
}

export default ProductAction;
