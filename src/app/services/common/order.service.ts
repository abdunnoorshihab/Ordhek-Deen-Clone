import {Injectable} from '@angular/core';
import {Order} from '../../interfaces/common/order.interface';
import {ALL_ORDERS} from '../../core/db/order-data.db';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() {
  }

  /**
   * addOrder()
   * getOrderById()
   */

  addOrder(data: Order) {
    ALL_ORDERS.unshift(data);
    localStorage.setItem("orderId", data.orderId);
  }

  getOrderById(orderId: string) {
    return ALL_ORDERS.find(f => f.orderId === orderId);
  }
}
