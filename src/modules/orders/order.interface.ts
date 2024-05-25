import { TProduct } from '../products/product.interface';

export type POrder = {
  productId: string;
  email: string;
  price: number;
  quantity: number;
};
