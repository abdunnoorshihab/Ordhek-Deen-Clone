import {Component, OnInit} from '@angular/core';
import {ALL_ORDERS} from '../../../../core/db/order-data.db';
import {Order} from '../../../../interfaces/common/order.interface';
import {Currency} from '../../../../interfaces/core/currency.interface';
import {CURRENCY} from '../../../../core/utils/app-data';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  // Currency
  currency: Currency = CURRENCY;

  orders: Order[] = ALL_ORDERS;

  constructor() {
  }

  ngOnInit(): void {

  }


}
