import {Component} from '@angular/core';
import {ALL_PRODUCTS} from "../../../core/db/all-products.db";
import {Product} from "../../../interfaces/common/product.interface";
import {UtilsService} from '../../../services/core/utils.service';

@Component({
  selector: 'app-top-sell-products',
  templateUrl: './top-sell-products.component.html',
  styleUrls: ['./top-sell-products.component.scss']
})
export class TopSellProductsComponent {

  // Products Data
  products = ALL_PRODUCTS;
  browseProducts: Product[] = [];

  /**
   * Skeleton Loader
   * All skeleton loader control by those variable
   */
  isLoadingTopSalesProducts: boolean = true;
  isLoadingTopRatingProducts: boolean = true;
  isLoadingTopDiscountProducts: boolean = true;

  /**
   * Selected Product Type Tab Control
   * Here default type is top sale
   */
  selectedProductType: string = 'topSales';


  constructor(
    private utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {
    /**
     * BASE Get Data
     * getBrowseProducts()
     */
    this.getBrowseProducts('topSales');
  }

  private getBrowseProducts(type: 'topSales' | 'topRating' | 'topDiscount') {
    this.isLoadingTopSalesProducts = true;
    this.isLoadingTopRatingProducts = true;
    this.isLoadingTopDiscountProducts = true;
    setTimeout(() => {
      switch (type) {
        case 'topSales': {
          this.isLoadingTopSalesProducts = false;
          this.browseProducts = this.utilsService.randomDataArray(this.products, 5);
          break;
        }
        case 'topRating': {
          this.isLoadingTopRatingProducts = false;
          this.browseProducts = this.utilsService.randomDataArray(this.products, 5);
          break;
        }
        case 'topDiscount': {
          this.isLoadingTopDiscountProducts = false;
          this.browseProducts = this.utilsService.randomDataArray(this.products, 5);
          break;
        }
      }
    }, 200)
  }


  /**
   * Show and Hide Niche div
   */

  onClickShowNiche(type: 'topSales' | 'topRating' | 'topDiscount') {
    this.selectedProductType = type;
    this.getBrowseProducts(type);
  }


}
