import {Product} from "./product.interface";

export interface Cart {
  _id?: string;
  product?: string | Product;
  user?: string | any;
  selectedQty?: number;
  size?: string;
  color?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
