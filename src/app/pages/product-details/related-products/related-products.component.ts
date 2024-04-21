import {Component, OnInit} from '@angular/core';
import {Product} from "../../../interfaces/common/product.interface";
import {UtilsService} from '../../../services/core/utils.service';
import {ALL_PRODUCTS} from '../../../core/db/all-products.db';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {

  // Products Data
  products = ALL_PRODUCTS;
  relatedProducts: Product[] = [];

  // Loading
  isLoadingRelatedProducts: boolean = false;

  constructor(
    private utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {
    /**
     * BASE Get Data
     * getRelatedProducts()
     */

    this.getRelatedProducts();
  }


  /**
   * Get Data
   * getRelatedProducts()
   */
  private getRelatedProducts() {
    setTimeout(() => {
      this.relatedProducts = this.utilsService.randomDataArray(this.products, 5);
      this.isLoadingRelatedProducts = false;
    }, 200)

  }


}
