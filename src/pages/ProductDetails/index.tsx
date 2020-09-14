import React, { useContext } from 'react';

import PagePattern from '../../components/PagePattern';

import { Container, Row, Panel, Column, Gallery, Description } from './styles';
import SellerInfoCard from './SellerInfoCard';
import ProductAction from './ProductAction';
import WarrantyCard from './WarrantyCard';
import {
  ProductDetailsProvider,
  ProductDetailsContext,
} from './ProductDetailsContext';

const ProductDetails: React.FC = () => {
  const { categories, image, description } = useContext(ProductDetailsContext);
  return (
    <ProductDetailsProvider>
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
    </ProductDetailsProvider>
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
