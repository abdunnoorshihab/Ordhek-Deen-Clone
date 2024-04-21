import {Component} from '@angular/core';
import {PRODUCT_DESCRIPTION_DATA} from "../../../core/db/product-details.db";
import {Description} from '../../../interfaces/common/product.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {

  // Description Data
  description: Description = PRODUCT_DESCRIPTION_DATA;

  constructor() {
  }


  ngOnInit(): void {

  }

}
