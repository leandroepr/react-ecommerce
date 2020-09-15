import { useContext } from 'react';

import { ProductListContext } from './ProductListContext';
import { useParams } from 'react-router-dom';

// const emptyProduct: Product = {
//   id: '',
//   title: 'Carregando Título',
//   imageUrl:
//     'https://www.wilddesignz.com/image/cache/catalog/placeholderproduct-500x500.png',
//   condition: '...',
//   categoryId: 'todas',
//   categories: [],
//   description: 'Carregando informações...',
//   price: '',
//   installmentsInfo: '',
//   stockAmount: 0,
//   soldAmount: 0,
// };

export function useProduct() {
  const context = useContext(ProductListContext);

  const { id } = useParams();
  const data = context.data.filter((product) => product.id === id)[0];
  return { data };
}
