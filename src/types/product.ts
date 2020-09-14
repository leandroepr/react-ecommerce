export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  condition: string;
  categories: string[];
  description: string;
  price: string;
  installmentsInfo: string;
  stockAmount: number;
  soldAmount: number;
}
