import {Injectable} from '@angular/core';
import {Product} from '../../interfaces/common/product.interface';
import {ALL_PRODUCTS} from '../../core/db/all-products.db';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private allProducts = ALL_PRODUCTS;

  constructor() {
  }

  /**
   * findProductsByIds()
   */

  findProductsByIds(ids: string[]): Product[] {
    const selectedProducts: Product[] = [];
    ids.forEach(productId => {
      const product = this.allProducts.find(f => f._id === productId);
      if (product) {
        selectedProducts.push(product);
      }
    });
    return selectedProducts;
  }


}
