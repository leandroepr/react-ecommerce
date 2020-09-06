import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>
          <Info />
        </Column>

        <Column>
          {/* <ProductAction />
          <SellerInfo /> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection: React.FC = () => {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com o Lorem Ipsum</p>
          <p className="description">
            Receba o produto que está esperando ou devolvemos seu dinheiro
          </p>
        </span>
        <span>
          <p className="title">Compra garantida do vendedor</p>
          <p className="description">Sem Garantia</p>
        </span>
      </div>
    </Section>
  );
};

const Info: React.FC = () => {
  return (
    <Description>
      <h2>Descrição</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
        tempus diam. Proin condimentum tellus nisi, eget egestas augue laoreet
        vitae. Fusce eu nulla sit amet odio laoreet placerat. Nullam volutpat
        nunc id nibh congue viverra. Fusce pharetra cursus felis id dapibus.
        <br />
        <br />
        Características: <br />
        Sed a posuere velit. Morbi et ornare felis. Vestibulum convallis id nisl
        non tristique. Nullam vestibulum elementum lorem in gravida. Phasellus
        felis ex, semper et arcu vitae, dapibus feugiat mi. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Quisque ullamcorper vel sem eu
        porta. Praesent at sapien nibh. Fusce vel nulla nec orci mattis
        malesuada. Mauris in dapibus leo.
      </p>
    </Description>
  );
};

export default Product;
