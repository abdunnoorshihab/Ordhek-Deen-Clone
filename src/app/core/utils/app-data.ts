
import {Select} from '../../interfaces/core/select';
import {OrderStatus} from '../../enum/order.enum';
import {Currency} from '../../interfaces/core/currency.interface';

export const GENDERS: Select[] = [
  {value: 'male', viewValue: 'Male'},
  {value: 'female', viewValue: 'Female'},
  {value: 'other', viewValue: 'Other'}
];

export const CURRENCY: Currency = {
  dollar: '$',
  bdt: '৳',
}

export const ORDER_STATUS: Select[] = [
  { value: OrderStatus.PENDING, viewValue: 'Pending'},
  { value: OrderStatus.CONFIRM, viewValue: 'Confirm'},
  { value: OrderStatus.PROCESSING, viewValue: 'Processing'},
  { value: OrderStatus.SHIPPING, viewValue: 'Shipping'},
  { value: OrderStatus.DELIVERED, viewValue: 'Delivered'},
  { value: OrderStatus.CANCEL, viewValue: 'Cancel'},
  { value: OrderStatus.REFUND, viewValue: 'Refund'},
];
