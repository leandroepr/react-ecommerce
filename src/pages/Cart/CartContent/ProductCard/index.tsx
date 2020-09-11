import React from 'react';

import tshirtImage from '../../../../assets/images/tshirt.png';

import {
  Container,
  ProductImage,
  Item,
  Title,
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

const ProductCard: React.FC = () => {
  return (
    <Container>
      <ProductImage>
        <img alt="T-Shirt" src={tshirtImage} />
      </ProductImage>
      <Item>
        <h2>Tênis Masculino Form's Cano Alto Marrom Lançamento!!</h2>
        <Subtitle>
          <span>Cor: Branco 012, Tamanho: 42</span>
          <a href="#">Alterar</a>
        </Subtitle>
        <PaymentInfo>
          <span>Até 12 vezes sem juros</span>
        </PaymentInfo>
        <Actions>
          <Action>Mais Produtos do vendedor</Action>
          <Action>Comprar agora</Action>
          <Action>Salvar para depois</Action>
          <Action>Excluir</Action>
        </Actions>
      </Item>
      <Counter>
        <div>
          <MinusIcon />
          <span>2</span>
          <PlusIcon />
        </div>
        <span>688 disponíveis</span>
      </Counter>
      <Price>
        <PriceRow>
          <span className="simbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>
      </Price>
    </Container>
  );
};

export default ProductCard;
