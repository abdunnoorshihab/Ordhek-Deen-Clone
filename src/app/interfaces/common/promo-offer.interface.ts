import { Product } from './product.interface';

export interface PromoOffer {
  _id?: string;
  title?: string;
  slug?: string;
  description?: string;
  bannerImage?: string;
  startDateTime?: any;
  endDateTime?: any;
  products?: Product[];
  createdAt?: any;
  updatedAt?: any;
  select?: boolean;
}
