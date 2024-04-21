import {Component, OnDestroy, OnInit} from '@angular/core';


import {Subscription} from 'rxjs';
import {ProductService} from 'src/app/services/common/product.service';
import {WishListService} from 'src/app/services/common/wish-list.service';
import {ReloadService} from 'src/app/services/core/reload.service';
import {WishList} from '../../../../interfaces/common/wish-list.interface';
import {Currency} from '../../../../interfaces/core/currency.interface';
import {CURRENCY} from '../../../../core/utils/app-data';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {

  // Currency
  currency: Currency = CURRENCY;

  // Wishlist Data
  wishLists: WishList[] = [];


  // Subscriptions
  private subReloadWishlist: Subscription;

  // Pagination
  currentPage = 0;
  productsPerPage = 5;

  constructor(
    private wishListService: WishListService,
    private productService: ProductService,
    private reloadService: ReloadService,
  ) {
  }

  ngOnInit(): void {

    // Wishlist Reload Data & Get Data
    this.subReloadWishlist = this.wishListService.refreshStoredWishList$.subscribe(() => {
      this.wishLists = this.wishListService.wishListItems;
    });
    this.wishLists = this.wishListService.wishListItems;

  }

  /**
   * ON Remove Wishlist
   * removeWishlistById()
   */
  removeWishlistById(productId?: string) {
    this.wishListService.deleteWishListItemFromLocalStorage(productId);
    this.reloadService.needRefreshWishList$();
  }

  /**
   * ON Page Changed
   * onPageChange()
   */
  onPageChange(event: number) {
    this.currentPage = event;
  }


  /**
   * ON Destroy
   */
  ngOnDestroy() {
    if (this.subReloadWishlist) {
      this.subReloadWishlist.unsubscribe();
    }
  }



}
