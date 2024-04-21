import {Injectable} from '@angular/core';
import {DATABASE_KEY} from '../../core/utils/global-variable';
import {ReloadService} from '../core/reload.service';
import {Subject} from 'rxjs';
import {WishList} from '../../interfaces/common/wish-list.interface';


@Injectable({
  providedIn: 'root'
})
export class WishListService {

  /**
   * REFRESH LOCAL STORED CART
   */
  private refreshStoredWishList = new Subject<void>();

  get refreshStoredWishList$() {
    return this.refreshStoredWishList;
  }

  needRefreshStoredWishList$() {
    this.refreshStoredWishList.next();
  }

  // Store Data
  private wishLists: WishList[] = [];

  constructor(
    private reloadService: ReloadService,
  ) {
  }

  /**
   * Wishlist LOCAL STORAGE
   * addWishListItemToLocalStorage()
   * getWishListItemFromLocalStorage()
   * deleteWishListItemFromLocalStorage()
   * deleteAllWishListFromLocal()
   */
  addWishListItemToLocalStorage(wishListItem: WishList) {
    const items = JSON.parse(localStorage.getItem(DATABASE_KEY.userWishList));

    let wishLists;

    if (!items) {
      wishLists = [];
      wishLists.push(wishListItem);
    } else {
      wishLists = items;
      const fIndex = wishLists.findIndex((o) => o.product === wishListItem.product);
      if (fIndex === -1) {
        wishLists.push(wishListItem);
      } else {
        wishLists[fIndex].selectedQty += 1;
      }
    }
    localStorage.setItem(DATABASE_KEY.userWishList, JSON.stringify(wishLists));
  }

  getWishListItemFromLocalStorage(): WishList[] {
    const wishLists = localStorage.getItem(DATABASE_KEY.userWishList);
    if (wishLists === null) {
      return [];
    }
    return JSON.parse(wishLists) as WishList[];
  }

  deleteWishListItemFromLocalStorage(id: string) {
    const items = JSON.parse(localStorage.getItem(DATABASE_KEY.userWishList));
    const filtered = items.filter(el => el.product !== id);
    localStorage.setItem(DATABASE_KEY.userWishList, JSON.stringify(filtered));
  }

  deleteAllWishListFromLocal(refresh?: boolean) {
    localStorage.removeItem(DATABASE_KEY.userWishList);
    this.reloadService.needRefreshWishList$(refresh ? refresh : false);
  }

  /**
   * CART STORE & GET LOCALLY
   * updateWishListList()
   * wishListItems()
   */
  public updateWishListList(data: WishList[]) {
    this.wishLists = data;
    this.needRefreshStoredWishList$();
  }

  public get wishListItems() {
    return [...this.wishLists]
  }


}
