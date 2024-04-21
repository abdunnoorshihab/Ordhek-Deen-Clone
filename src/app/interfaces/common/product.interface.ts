
export interface Product {
  _id?: string;
  name: string;
  slug?: string;
  slug2?: string;
  description?: string;
  costPrice?: number;
  salePrice: number;
  hasTax?: boolean;
  tax?: number;
  sku?: string;
  emiMonth?: number[];
  discountType?: number;
  discountAmount?: number;
  images?: string[];
  images2?: string[];
  trackQuantity?: boolean;
  quantity?: number;
  category?: CatalogInfo;
  subCategory?: CatalogInfo;
  brand?: CatalogInfo;
  tags?: any;
  specifications?: ProductSpecification[];
  colors?: ProductSize[];
  sizes?: ProductColor[];
  hasVariations?: boolean;
  status?: string;
  videoUrl?: string;
  videoUrl2?: any;
  unit?: string;

  // Seo
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  // Point
  earnPoint?: boolean;
  pointType?: number;
  pointValue?: number;
  redeemPoint?: boolean;
  redeemType?: number;
  redeemValue?: number;
  createdAt?: any;
  updatedAt?: any;
  select?: boolean;
  selectedQty?: number;

  // For Offer
  offerDiscountAmount?: number;
  offerDiscountType?: number;
  resetDiscount?: boolean;
}

interface CatalogInfo {
  _id: string;
  name: string;
  slug: string;
}

export interface ProductFilterGroup {
  categories: GroupCategory[];
  subCategories: GroupSubCategory[];
  brands: BrandSubCategory[];
}

interface GroupCategory {
  _id: {
    category: string
  },
  name: string;
  slug: string;
  total: number;
  select?: boolean;
}

interface GroupSubCategory {
  _id: {
    subCategory: string
  },
  name: string;
  slug: string;
  total: number;
  select?: boolean;
}

interface BrandSubCategory {
  _id: {
    brand: string
  },
  name: string;
  slug: string;
  total: number;
  select?: boolean;
}


export interface ProductSpecification {
  name?: string;
  value?: string;
}

export interface ProductColor {
  name?: string;
  value?: string;
}

export interface ProductSize {
  name?: string;
  value?: string;
}

export interface Description {
  _id?: string;
  description?: any;
}
