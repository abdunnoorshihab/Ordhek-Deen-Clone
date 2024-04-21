import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Subscription} from 'rxjs';
import {DATABASE_KEY} from '../../../core/utils/global-variable';
import {Cart} from '../../../interfaces/common/cart.interface';
import {Product} from '../../../interfaces/common/product.interface';
import {WishList} from '../../../interfaces/common/wish-list.interface';
import {CartService} from '../../../services/common/cart.service';
import {WishListService} from '../../../services/common/wish-list.service';
import {ReloadService} from '../../../services/core/reload.service';
import {UiService} from '../../../services/core/ui.service';
import {YoutubeVideoShowComponent} from '../../dialog-view/youtube-video-show/youtube-video-show.component';
import {Currency} from '../../../interfaces/core/currency.interface';
import {CURRENCY} from '../../../core/utils/app-data';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit, OnDestroy {

  // Currency
  currency: Currency = CURRENCY;

  // Cart Data
  carts: Cart[] = [];
  cart: Cart = null;

  // Wishlist Data
  wishLists: WishList[] = [];
  wishlist: WishList = null;

  // Product Data
  @Input() data?: Product;

  // Subscriptions
  private subReloadCart: Subscription;
  private subReloadWishlist: Subscription;

  constructor(
    private reloadService: ReloadService,
    private cartService: CartService,
    private wishListService: WishListService,
    private uiService: UiService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    // Cart Reload Data & Get Data
    this.subReloadCart = this.cartService.refreshStoredCart$.subscribe(() => {
      this.carts = this.cartService.cartItems;
      this.checkCartList();
    });
    this.carts = this.cartService.cartItems;
    this.checkCartList();

    // Wishlist Reload Data & Get Data
    this.subReloadWishlist = this.wishListService.refreshStoredWishList$.subscribe(() => {
      this.wishLists = this.wishListService.wishListItems;
      this.checkWishList();
    });
    this.wishLists = this.wishListService.wishListItems;
    this.checkWishList();
  }

  /**
   * Cart Feature Methods
   * onAddToCart()
   * onIncrementQty()
   * onDecrementQty()
   * checkCartList()
   */

  onAddToCart(event: MouseEvent) {
    event.stopPropagation();
    const data: Cart = {
      product: this.data?._id,
      selectedQty: 1,
    };
    this.cartService.addCartItemToLocalStorage(data);
    this.reloadService.needRefreshCart$(true);
  }

  onIncrementQty(event: MouseEvent) {
    event.stopPropagation();
    const data = this.cartService.getCartItemFromLocalStorage();
    if (data != null) {
      const fIndex = data.findIndex(f => (f.product as string) === (this.cart.product as Product)._id);
      data[fIndex].selectedQty = data[fIndex].selectedQty + 1;
      localStorage.setItem(DATABASE_KEY.userCart, JSON.stringify(data));
      this.reloadService.needRefreshCart$(true);
    }
  }

  onDecrementQty(event: MouseEvent) {
    event.stopPropagation();
    if (this.cart.selectedQty === 1) {
      this.uiService.warn('Minimum quantity is 1');
      return;
    }
    const data = this.cartService.getCartItemFromLocalStorage();
    if (data != null) {
      const fIndex = data.findIndex(f => (f.product as string) === (this.cart.product as Product)._id);
      data[fIndex].selectedQty = data[fIndex].selectedQty - 1;
      localStorage.setItem(DATABASE_KEY.userCart, JSON.stringify(data));
      this.reloadService.needRefreshCart$(true);
    }
  }

  checkCartList() {
    this.cart = this.carts.find(f => (f.product as Product)._id === this.data?._id);
  }

  /**
   * Wishlist Feature Methods
   * onAddToWishList()
   * checkWishList()
   */
  onAddToWishList(event: MouseEvent) {
    event.stopPropagation();
    if (this.wishlist) {
      this.wishListService.deleteWishListItemFromLocalStorage((this.wishlist?.product as Product)?._id);
      this.reloadService.needRefreshWishList$();
    } else {
      const data: WishList = {
        product: this.data?._id,
        selectedQty: 1,
      };
      this.wishListService.addWishListItemToLocalStorage(data);
      this.reloadService.needRefreshWishList$(true);
    }

  }

  checkWishList() {
    this.wishlist = this.wishLists.find(f => (f.product as Product)._id === this.data?._id);
  }

  /**
   * YouTube Video Dialog
   * openYoutubeVideoDialog()
   */
  public openYoutubeVideoDialog(event: MouseEvent, url: string) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(YoutubeVideoShowComponent, {
      data: {url: url},
      panelClass: ['theme-dialog', 'no-padding-dialog'],
      width: '98%',
      maxWidth: '700px',
      height: 'auto',
      maxHeight: '100vh',
      autoFocus: false,
      disableClose: false
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult && dialogResult.data) {
      }
    });
  }


  /**
   * NG ON DESTROY
   */
  ngOnDestroy() {
    if (this.subReloadCart) {
      this.subReloadCart.unsubscribe();
    }
    if (this.subReloadWishlist) {
      this.subReloadWishlist.unsubscribe();
    }
  }


}
