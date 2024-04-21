import {Component} from '@angular/core';
import {Product} from "../../../interfaces/common/product.interface";
import {ALL_PRODUCTS} from "../../../core/db/all-products.db";
import {UtilsService} from '../../../services/core/utils.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent {

  // Products Data
  products = ALL_PRODUCTS;
  newProducts: Product[] = [];

  // Skeleton Loader Data
  isLoadingNewProducts: boolean = true;

  constructor(
    private utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {
    /**
     * BASE Get Data
     * getNewProducts()
     */

    this.getNewProducts();
  }


  /**
   * Get Data
   * getNewProducts()
   */
  private getNewProducts() {
    setTimeout(() => {
      const allNewProducts = this.products.filter(f => f.tags === 'new');
      this.newProducts = this.utilsService.randomDataArray(allNewProducts, 6);
      this.isLoadingNewProducts = false;
    }, 200)

  }
}
