import {Category} from './category.interface';

export interface SubCategory {
  _id?: string;
  readOnly?: boolean;
  category?: string | Category;
  categoryInfo?: Category;
  name?: string;
  slug?: string;
  image?: string;
  imageIcon?: string;
  status?: string;
  priority?: number;
  createdAt?: any;
  updatedAt?: any;
  select?: boolean;
}
