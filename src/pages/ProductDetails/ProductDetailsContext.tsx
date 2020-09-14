import React, { createContext, useContext } from 'react';

import tshirtImage from '../../assets/images/tshirt.png';

export interface Category {
  id: string;
  displayName: string;
}
export interface Image {
  url: string;
  description: string;
}
interface PriceTag {
  simbol: string;
  fragment: string;
  cents: string;
}

export interface Product {
  id: string;
  title: string;
  image: Image;
  condition: string;
  categories: Category[];
  description: string;
  price: PriceTag;
  installmentsInfo: string;
  stockAmount: number;
  soldAmount: number;
}

const defaultData: Product = {
  id: 'camiseta-hering-super-cotton-masculina',
  title: 'Camiseta Hering Super Cotton - Masculina',
  condition: 'Novo',
  image: {
    url:
      'https://http2.mlstatic.com/camiseta-hering-super-cotton-masculina-D_NQ_NP_851063-MLB40515678610_012020-O.jpg',
    description: 'Camiseta Hering Super Cotton - Masculina',
  },
  price: { simbol: 'R$', fragment: '49', cents: '99' },
  installmentsInfo: 'em 3x de R$ 11,67',
  stockAmount: 100,
  soldAmount: 768,
  categories: [
    { id: 'roupas', displayName: 'Roupas' },
    { id: 'camisetas', displayName: 'Camisetas' },
    { id: 'masculina', displayName: 'Masculina' },
  ],
  description:
    'Camiseta masculina confeccionada em algodão super cotton, malha com peso maior e espessura mais grossa. Em modelagem comfort, que confere um caimento mais solto e mais largo, o modelo possui mangas curtas, decote redondo e barra reta. Clássicas e indispensáveis no guarda-roupas masculino, as camisetas Hering combinam com shorts, bermudas e calças, seja para looks casuais ou esportivos. Invista!\n\n\n\nCores M2H e MD3: Composição em algodão e poliéster.\n\nCor M2H (Cinza): 88% algodão + 12% poliéster\n\nCor MD3 (Chumbo): 50% algodão + 50% poliéster',
};

export const ProductDetailsContext = createContext<Product>(defaultData);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProductDetailsProvider: React.FC<Props> = ({ children }) => {
  const context = useContext(ProductDetailsContext);
  return (
    <ProductDetailsContext.Provider value={context}>
      {children}
    </ProductDetailsContext.Provider>
  );
};
