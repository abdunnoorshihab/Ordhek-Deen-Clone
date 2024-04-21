import {Component, OnInit} from '@angular/core';
import {ALL_ORDERS} from '../../../../core/db/order-data.db';
import {Order} from '../../../../interfaces/common/order.interface';
import {CURRENCY} from '../../../../core/utils/app-data';
import {Currency} from '../../../../interfaces/core/currency.interface';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  // Currency
  currency: Currency = CURRENCY;

  orders: Order[] = ALL_ORDERS;


  constructor() {}

  ngOnInit(): void {

  }


}
