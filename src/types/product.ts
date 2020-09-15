export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  condition: string;
  categoryId: string;
  categories: string[];
  description: string;
  price: string;
  installmentsInfo: string;
  stockAmount: number;
  soldAmount: number;
}
