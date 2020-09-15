import React, { createContext, useContext } from 'react';

export interface Product {
  imageUrl: string;
  imageDescription: string;
  priceFraction: string;
  priceCents: string;
  installmentInfo: string;
}

export interface Category {
  title: string;
  detailPath: string;
  productList: Product[];
}

export const CategoryContext = createContext<Category[]>([
  {
    title: 'Roupas para você e toda família',
    detailPath: 'roupas',
    productList: [
      {
        imageUrl:
          'https://http2.mlstatic.com/camiseta-hering-super-cotton-masculina-D_NQ_NP_851063-MLB40515678610_012020-O.jpg',
        imageDescription: 'Camiseta Hering Super Cotton - Masculina',
        priceFraction: '49',
        priceCents: '99',
        installmentInfo: 'em 10x R$ 5,65',
      },
      {
        imageUrl:
          'https://http2.mlstatic.com/camiseta-hering-0299-original-masculinas-gola-redonda-D_NQ_NP_685591-MLB41818645468_052020-O.jpg',
        imageDescription:
          'Camiseta Hering 0299 (original) - Masculinas - Gola Redonda',
        priceFraction: '34',
        priceCents: '99',
        installmentInfo: 'em 6x R$ 6,41',
      },
      {
        imageUrl:
          'https://http2.mlstatic.com/camiseta-masculina-basica-algodo-premium-modelo-exclusivo-D_NQ_NP_635393-MLB32793978695_112019-O.jpg',
        imageDescription:
          'Camiseta Masculina Básica Algodão Premium Modelo Exclusivo',
        priceFraction: '29',
        priceCents: '00',
        installmentInfo: 'em 5x R$ 5,80',
      },
      {
        imageUrl:
          'https://http2.mlstatic.com/camisa-termica-segunda-pele-proteco-uv-nova-street-mista-D_NQ_NP_719728-MLB42097074385_062020-O.jpg',
        imageDescription:
          'Camisa Térmica Segunda Pele Proteção Uv Nova Street Mista',
        priceFraction: '48',
        priceCents: '00',
        installmentInfo: 'em 10x R$ 5,42',
      },
      {
        imageUrl:
          'https://http2.mlstatic.com/5-camiseta-masculina-camisas-slim-voker-100-algodo-atacado-D_NQ_NP_855910-MLB41149427249_032020-O.jpg',
        imageDescription:
          '5 Camiseta Masculina Camisas Slim Voker 100% Algodão Atacado',
        priceFraction: '144',
        priceCents: '90',
        installmentInfo: 'em 12x R$ 13,76',
      },
    ],
  },
  {
    title: 'Calçados elegantes e confortáveis',
    detailPath: 'calcados',
    productList: [
      {
        imageUrl:
          'https://http2.mlstatic.com/tenis-flatform-amortecimento-air-feminino-conforto-leveza-D_NQ_NP_690842-MLB40506722492_012020-F.jpg',
        imageDescription:
          'Tenis Flatform Amortecimento Air Feminino Conforto Leveza',
        priceFraction: '85',
        priceCents: '41',
        installmentInfo: 'em 12x R$ 8,11',
      },
      {
        imageUrl:
          'https://http2.mlstatic.com/sapatnis-confort-couro-legitimo-D_NQ_NP_606970-MLB32419057696_102019-O.jpg',
        imageDescription: 'T-shirt',
        priceFraction: '89',
        priceCents: '99',
        installmentInfo: 'em 12x R$ 7,50 sem juros',
      },
      {
        imageUrl:
          'https://http2.mlstatic.com/sapatenis-tenis-casual-masculino-cano-alto-da-polo-botinha-D_NQ_NP_797235-MLB28274296751_102018-F.jpg',
        imageDescription: 'T-shirt',
        priceFraction: '64',
        priceCents: '50',
        installmentInfo: 'em 12x R$ 6,13',
      },
    ],
  },
  {
    title: 'Utilitários, Maquiagens e muito mais',
    detailPath: 'calcados',
    productList: [
      {
        imageUrl:
          'https://http2.mlstatic.com/paleta-48-sombras-jasmyne-com-espelho-D_NQ_NP_935212-MLB43218287171_082020-O.jpg',
        imageDescription: 'T-shirt',
        priceFraction: '49',
        priceCents: '40',
        installmentInfo: 'em 6x R$ 8,23 sem juros',
      },
      {
        imageUrl:
          'https://http2.mlstatic.com/conjunto-corrente-pulseira-masculina-3x1-aco-inox-ref-325-D_NQ_NP_764980-MLB32557629693_102019-O.jpg',
        imageDescription: 'T-shirt',
        priceFraction: '27',
        priceCents: '90',
        installmentInfo: 'em 5x R$ 5,58 sem juros',
      },
      {
        imageUrl:
          'https://http2.mlstatic.com/par-de-alianca-8mm-banhado-ouro-18k-com-garantia-ref-a1-D_NQ_NP_764357-MLB25743079753_072017-O.jpg',
        imageDescription: 'T-shirt',
        priceFraction: '29',
        priceCents: '99',
        installmentInfo: 'em 5x R$ 6,00 sem juros',
      },
    ],
  },
]);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CategoryProvider: React.FC<Props> = ({ children }) => {
  const categoryList = useContext(CategoryContext);

  return (
    <CategoryContext.Provider value={categoryList}>
      {children}
    </CategoryContext.Provider>
  );
};
