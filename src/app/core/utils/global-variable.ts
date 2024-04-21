import {environment} from '../../../environments/environment';

export const DATABASE_KEY = Object.freeze({
  cartsProduct: 'SOFT_COMMERCE_USER_CART_' + environment.VERSION,
  userCart: 'SOFT_COMMERCE_USER_CART_' + environment.VERSION,
  userWishList: 'SOFT_COMMERCE_USER_CART_' + environment.VERSION,
  productLayout: 'SOFT_COMMERCE_PRODUCT_LAYOUT' + environment.VERSION,
});
