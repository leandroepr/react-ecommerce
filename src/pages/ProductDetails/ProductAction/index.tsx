import React, { useState } from 'react';

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
  const defaultData: ProductData = {
    condition: 'Novo',
    title: 'Camiseta Branca de Marca Desconhecida',
    price: { simbol: 'R$', fragment: '34', cents: '80' },
    installmentsInfo: 'em 3x de R$ 11,67',
    stockAmount: 100,
    soldAmount: 768,
  };

  const [productData, setProductData] = useState<ProductData>(defaultData);

  const { title, price, installmentsInfo } = productData;
  const stockStatusLabel =
    productData.stockAmount > 0 ? 'Estoque disponível' : 'Sem estoque';
  const conditionLabel = `${productData.condition} | ${productData.soldAmount} vendidos`;

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
