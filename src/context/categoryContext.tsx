import React, { useState, createContext, useContext } from 'react';

import TShirt from '../assets/images/tshirt.png';

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
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
    ],
  },
  {
    title: 'Calçados elegantes e confortáveis',
    detailPath: 'calcados',
    productList: [
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
    ],
  },
  {
    title: 'Utilitários, Maquiagens e muito mais',
    detailPath: 'calcados',
    productList: [
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
      },
      {
        imageUrl: TShirt,
        imageDescription: 'T-shirt',
        priceFraction: '35',
        priceCents: '98',
        installmentInfo: '3x de R$ 11,67 sem juro',
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
