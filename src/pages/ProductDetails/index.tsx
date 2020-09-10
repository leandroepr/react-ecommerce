import React from 'react';

import Product from './Product';
import PagePattern from '../../components/PagePattern';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const ProductDetails: React.FC = () => {
  return (
    <PagePattern
      headerContent={<Header />}
      bodyContent={<Product />}
      footerContent={<Footer />}
    />
  );
};

export default ProductDetails;
