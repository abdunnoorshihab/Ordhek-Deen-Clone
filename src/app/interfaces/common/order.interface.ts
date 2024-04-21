export interface Order {
  _id?: string;
  orderId?: string;
  discountTypes?: DiscountType[];
  name?: string;
  phoneNo?: string;
  email?: string;
  city?: string;
  shippingAddress?: string;
  paymentType?: string;
  orderedItems?: OrderedItem[];
  subTotal?: number;
  deliveryCharge?: number;
  discount?: number;
  totalSave?: number;
  grandTotal?: number;
  checkoutDate?: string;
  deliveryDate?: any;
  orderStatus?: number;
  paymentStatus?: string;
  hasOrderTimeline?: boolean;
  processingDate?: Date;
  shippingDate?: Date;
  deliveringDate?: Date;
  user?: string;
  coupon?: string;
  couponDiscount?: number;
  orderTimeline?: OrderTimeline;
  createdAt?: string;
  updatedAt?: Date;
  select?: boolean;
}

export interface OrderedItem {
  _id: string;
  name: string;
  slug: string;
  image: string;
  category: any;
  subCategory: any;
  brand: any;
  regularPrice: number;
  unitPrice: number;
  quantity: number;
  orderType: string;
}

export interface OrderTimeline {
  confirmed?: OrderTimelineType;
  processed?: OrderTimelineType;
  shipped?: OrderTimelineType;
  delivered?: OrderTimelineType;
  canceled?: OrderTimelineType;
  refunded?: OrderTimelineType;
}

export interface DiscountType {
  type: string;
  amount: number;
}

export interface OrderTimelineType {
  success: boolean;
  date?: Date;
  expectedDate?: Date;
}
