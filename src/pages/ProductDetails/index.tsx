import React, { useContext, useState, useEffect } from 'react';

import PagePattern from '../../components/PagePattern';

import { Container, Row, Panel, Column, Gallery, Description } from './styles';
import SellerInfoCard from './SellerInfoCard';
import ProductAction from './ProductAction';
import WarrantyCard from './WarrantyCard';
import useFetch from '../../context/ProductDetailsContext';

const ProductDetails: React.FC = () => {
  const { response, error, loading } = useFetch(
    'camiseta-hering-super-cotton-masculina'
  );

  console.log(response);

  return (
    <PagePattern>
      {/* <div className="App">
        <h1>useFetch Usage</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong...</p>}
        {response && <p>{response.title}</p>}
      </div> */}
      <Container>
        <Row>
          <a href="/">Voltar à lista</a>
          {response &&
            response.categories.map((category, index) => (
              <a key={index} href="/">
                {category}
              </a>
            ))}
        </Row>

        <Panel>
          <Column>
            <Gallery>
              <img alt={response.description} src={response.imageUrl} />
            </Gallery>
            <Description>
              <h2>Descrição</h2>
              <p>{addLineBreaks(response.description)}</p>
            </Description>
          </Column>

          <Column>
            <ProductAction product={response!} />
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
