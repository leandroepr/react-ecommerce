import React from 'react';

import PagePattern from '../../components/PagePattern';

import { Container, Row, Panel, Column, Gallery, Description } from './styles';
import SellerInfoCard from './SellerInfoCard';
import ProductAction from './ProductAction';
import WarrantyCard from './WarrantyCard';
import tshirtImage from '../../assets/images/tshirt.png';

export interface Category {
  id: string;
  displayName: string;
}
export interface Image {
  url: string;
  description: string;
}

export interface Product {
  image: Image;
  categories: Category[];
  description: string;
}

const ProductDetails: React.FC = () => {
  const product: Product = {
    image: { url: tshirtImage, description: 'TShirt' },
    categories: [
      { id: 'roupas', displayName: 'Roupas' },
      { id: 'camisetas', displayName: 'Camisetas' },
      { id: 'masculina', displayName: 'Masculina' },
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque eu tempus diam. Proin condimentum tellus nisi, eget
    egestas augue laoreet vitae. Fusce eu nulla sit amet odio laoreet
    placerat. Nullam volutpat nunc id nibh congue viverra. Fusce
    pharetra cursus felis id dapibus.

    Características:
    Elemento 1x
    Elemento 1x
    Elemento 1x
    Elemento 1x
    Elemento 1x

    Sed a posuere velit. Morbi et ornare felis. Vestibulum convallis
    id nisl non tristique. Nullam vestibulum elementum lorem in
    gravida. Phasellus felis ex, semper et arcu vitae, dapibus feugiat
    mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quisque ullamcorper vel sem eu porta. Praesent at sapien nibh.
    Fusce vel nulla nec orci mattis malesuada. Mauris in dapibus leo.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque eu tempus diam. Proin condimentum tellus nisi, eget
    egestas augue laoreet vitae. Fusce eu nulla sit amet odio laoreet
    placerat. Nullam volutpat nunc id nibh congue viverra. Fusce
    pharetra cursus felis id dapibus.`,
  };

  const { categories, image, description } = product;
  return (
    <PagePattern>
      <Container>
        <Row>
          <a href="/">Voltar à lista</a>
          {categories.map((category, index) => (
            <a key={index} href="/">
              {category.displayName}
            </a>
          ))}
        </Row>

        <Panel>
          <Column>
            <Gallery>
              <img alt={image.description} src={image.url} />
            </Gallery>
            <Description>
              <h2>Descrição</h2>
              <p>{addLineBreaks(description)}</p>
            </Description>
          </Column>

          <Column>
            <ProductAction />
            <SellerInfoCard />
            <WarrantyCard />
          </Column>
        </Panel>
      </Container>
    </PagePattern>
  );
};

const addLineBreaks = (text: string) =>
  text.split('\n').map((line, index) => (
    <React.Fragment key={`${line}-${index}`}>
      {line}
      <br />
    </React.Fragment>
  ));
export default ProductDetails;
