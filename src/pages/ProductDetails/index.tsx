import React from 'react';

import PagePattern from '../../components/PagePattern';

import { Container, Row, Panel, Column, Gallery, Description } from './styles';
import SellerInfoCard from './SellerInfoCard';
import ProductAction from './ProductAction';
import WarrantyCard from './WarrantyCard';
import { useProduct } from '../../context/ProductContext';

const ProductDetails: React.FC = () => {
  const { data } = useProduct();
  const product = data;
  if (!data) {
    return (
      <PagePattern>
        <Container>
          <p>Loading...</p>
        </Container>
      </PagePattern>
    );
  }
  return (
    <PagePattern>
      <Container>
        <Row>
          <a href="/">Voltar à lista</a>
          {product &&
            product.categories.map((category, index) => (
              <a key={index} href="/">
                {category}
              </a>
            ))}
        </Row>

        <Panel>
          <Column>
            <Gallery>
              <img alt={product.title} src={product.imageUrl} />
            </Gallery>
            <Description>
              <h2>Descrição</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit laudantium modi sed error maxime explicabo, aliquid
                odit dolores. Quisquam, vero corrupti consectetur ex ad quae
                delectus repellendus velit consequuntur eius.
              </p>
            </Description>
          </Column>

          <Column>
            <ProductAction product={product} />
            <SellerInfoCard />
            <WarrantyCard />
          </Column>
        </Panel>
      </Container>
    </PagePattern>
  );
};

// const addLineBreaks = (text: string) =>
//   text.split('\n').map((line, index) => (
//     <React.Fragment key={`${line}-${index}`}>
//       {line}
//       <br />
//     </React.Fragment>
//   ));
export default ProductDetails;
