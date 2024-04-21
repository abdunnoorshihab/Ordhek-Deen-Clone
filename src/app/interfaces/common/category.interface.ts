export interface Category {
  _id?: string;
  readOnly?: boolean;
  name?: string;
  slug?: string;
  image?: string;
  imageIcon?: string;
  description?: string;
  priority?: number;
  createdAt?: Date;
  updatedAt?: Date;
  select?: boolean;
}
