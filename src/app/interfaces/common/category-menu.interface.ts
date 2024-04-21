import {SubCategory} from './sub-category.interface';

export interface CategoryMenu {
  _id?: string;
  name?: string;
  slug?: string;
  image?: string;
  imageIcon?: string;
  serial?: number;
  status?: string;
  subCategories?: SubCategory[]
}
