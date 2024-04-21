import {Component, OnDestroy, OnInit} from '@angular/core';

import {PricePipe} from '../../../../shared/pipes/price.pipe';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {OrderService} from '../../../../services/common/order.service';
import {Order} from '../../../../interfaces/common/order.interface';
import {Currency} from '../../../../interfaces/core/currency.interface';
import {CURRENCY} from '../../../../core/utils/app-data';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  providers: [PricePipe]
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  // Currency
  currency: Currency = CURRENCY;

  // Store Data
  orderId: string = null;
  order?: Order = null;

  // Subscription Data
  private subRouteParam: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
  ) {

  }

  ngOnInit(): void {

    // Get Data from Param
    this.subRouteParam = this.activatedRoute.paramMap.subscribe(param => {
      this.orderId = param.get('id');
      if (this.orderId) {
        this.order = this.orderService.getOrderById(this.orderId);
      }
    });

  }


  /**
   * ON Destroy
   */
  ngOnDestroy() {
    if (this.subRouteParam) {
      this.subRouteParam.unsubscribe();
    }
  }


}
