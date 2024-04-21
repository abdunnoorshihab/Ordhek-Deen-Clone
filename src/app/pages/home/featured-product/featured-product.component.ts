import { Component } from '@angular/core';
import {Product} from "../../../interfaces/common/product.interface";
import {ALL_PRODUCTS} from "../../../core/db/all-products.db";

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent {

  // Products Data
  products = ALL_PRODUCTS;
  featureProductsOne: Product[] = [];
  featureProductsTwo: Product[] = [];

  ngOnInit(): void {
    /**
     * BASE Get Data
     * getFeatureProducts()
     */
    this.getFeatureProducts();
  }

  /**
   * Skeleton Loader
   * All skeleton loader control by those variable
   */
  isLoadingFeaturedProducts: boolean = true;


  private getFeatureProducts() {
    setTimeout(() => {
      const featureProducts = this.products.filter(f => f.tags === 'featured');
      this.featureProductsOne = this.products.filter(f => f.tags === 'featured').slice(0, 7);
      this.featureProductsTwo = this.products.filter(f => f.tags === 'featured').slice(8, featureProducts.length - 1);
      this.isLoadingFeaturedProducts = false;
    }, 200)
  }
}
