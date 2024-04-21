import {Component} from '@angular/core';
import {FocusProduct} from "../../../interfaces/common/focus-product.interface";
import {FOCUS_PRODUCT_DATA} from "../../../core/db/focus-product.db";

@Component({
  selector: 'app-focus-products',
  templateUrl: './focus-products.component.html',
  styleUrls: ['./focus-products.component.scss']
})
export class FocusProductsComponent {

  // Products Data
  focusProduct?: FocusProduct = FOCUS_PRODUCT_DATA;


  constructor() {
  }

  ngOnInit(): void {
  }


}
