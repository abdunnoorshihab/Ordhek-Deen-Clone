import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DATABASE_KEY } from '../../core/utils/global-variable';
import { Cart } from '../../interfaces/common/cart.interface';
import { ReloadService } from '../core/reload.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  /**
   * REFRESH LOCAL STORED CART
   */
  private refreshStoredCart = new Subject<void>();

  get refreshStoredCart$() {
    return this.refreshStoredCart;
  }

  needRefreshStoredCart$() {
    this.refreshStoredCart.next();
  }

  // Store Data
  private cartList: Cart[] = [];

  constructor(
    private reloadService: ReloadService,
  ) {
  }

  /**
   * CART LOCAL STORAGE
   * addCartItemToLocalStorage()
   * getCartItemFromLocalStorage()
   * deleteCartItemFromLocalStorage()
   * deleteAllCartFromLocal()
   */

  addCartItemToLocalStorage(cartItem: Cart) {
    const items = JSON.parse(localStorage.getItem(DATABASE_KEY.userCart));
    let carts;
    if (!items) {
      carts = [];
      carts.push(cartItem);
    } else {
      carts = items;
      const fIndex = carts.findIndex((o) => o.product === cartItem.product);
      if (fIndex === -1) {
        carts.push(cartItem);
      } else {
        carts[fIndex].selectedQty += 1;
      }
    }
    localStorage.setItem(DATABASE_KEY.userCart, JSON.stringify(carts));
  }

  getCartItemFromLocalStorage(): Cart[] {
    const carts = localStorage.getItem(DATABASE_KEY.userCart);
    if (carts === null) {
      return [];
    }
    return JSON.parse(carts) as Cart[];
  }

  deleteCartItemFromLocalStorage(id: string) {
    const items = JSON.parse(localStorage.getItem(DATABASE_KEY.userCart));
    const filtered = items.filter(el => el.product !== id);
    localStorage.setItem(DATABASE_KEY.userCart, JSON.stringify(filtered));
  }

  deleteAllCartFromLocal(refresh?: boolean) {
    localStorage.removeItem(DATABASE_KEY.userCart);
    this.reloadService.needRefreshCart$(refresh ? refresh : false);
  }

  /**
   * CART STORE & GET LOCALLY
   * updateCartList()
   * cartItems()
   */
  public updateCartList(data: Cart[]) {
    this.cartList = data;
    this.needRefreshStoredCart$();
  }

  public get cartItems() {
    return [...this.cartList]
  }


}
