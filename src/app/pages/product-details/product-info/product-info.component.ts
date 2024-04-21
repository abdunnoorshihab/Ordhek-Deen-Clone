import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";
import {ALL_PRODUCTS} from "../../../core/db/all-products.db";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from '../../../interfaces/common/product.interface';
import {Cart} from '../../../interfaces/common/cart.interface';
import {WishList} from '../../../interfaces/common/wish-list.interface';
import {Subscription} from 'rxjs';
import {ReloadService} from '../../../services/core/reload.service';
import {CartService} from '../../../services/common/cart.service';
import {WishListService} from '../../../services/common/wish-list.service';
import {DATABASE_KEY} from '../../../core/utils/global-variable';
import {UiService} from '../../../services/core/ui.service';
import {Currency} from '../../../interfaces/core/currency.interface';
import {CURRENCY} from '../../../core/utils/app-data';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit, OnDestroy{

  // Currency
  currency: Currency = CURRENCY;

  // Data Form
  @ViewChild('formElement') formElement: NgForm;
  dataForm?: FormGroup;

  // Cart Data
  carts: Cart[] = [];
  cart: Cart = null;

  // Wishlist Data
  wishLists: WishList[] = [];
  wishlist: WishList = null;

  //store data
  slug?: string;
  product: Product = null;
  selectedColor: string;
  selectedSize: string;


  // Image Zoom & View Area
  @ViewChild('zoomViewer', {static: true}) zoomViewer;
  image: string;
  zoomImage: string;

  // Subscriptions
  private subRouteParam: Subscription;
  private subReloadCart: Subscription;
  private subReloadWishlist: Subscription;


  constructor(
    private activateRoute: ActivatedRoute,
    private reloadService: ReloadService,
    private cartService: CartService,
    private wishListService: WishListService,
    private uiService: UiService,
    private router: Router,
  ) {
  }


  ngOnInit(): void {
    this.subRouteParam = this.activateRoute.paramMap.subscribe(param => {
      this.slug = param.get('slug');
      if (this.slug) {
        this.product = ALL_PRODUCTS.find(ele => ele.slug === this.slug);
        this.image = this.product.images[0];
        this.setDefaultImage();
      }
    });

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
      product: this.product?._id,
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
    this.cart = this.carts.find(f => (f.product as Product)._id === this.product?._id);
  }

  onBuy(event: MouseEvent) {
    this.onAddToCart(event);
    this.router.navigate(['/checkout']);
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
        product: this.product?._id,
        selectedQty: 1,
      };
      this.wishListService.addWishListItemToLocalStorage(data);
      this.reloadService.needRefreshWishList$(true);
    }

  }

  checkWishList() {
    this.wishlist = this.wishLists.find(f => (f.product as Product)._id === this.product?._id);
  }


  /**
   * IMAGE ZOOM & VIEW AREA & OTHER CONTROL
   * setDefaultImage()
   * selectImage()
   * onMouseMove()
   * onMouseLeave()
   * stepControl()
   */
  private setDefaultImage() {
    this.image = this.product.images && this.product.images.length > 0 ? this.product.images[0] : '/assets/images/placeholder/test.png';
    this.zoomImage = this.image;
  }

  public selectImage(data: any) {
    this.image = data;
    this.zoomImage = data;
  }

  public onMouseMove(e) {
    if (window.innerWidth >= 1099) {
      const image = e.currentTarget;
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;
      const x = offsetX / image.offsetWidth * 110;
      const y = offsetY / image.offsetHeight * 110;
      const zoom = this.zoomViewer.nativeElement.children[0];
      if (zoom) {
        zoom.style.backgroundPosition = x + '% ' + y + '%';
        zoom.style.display = 'block';
        zoom.style.height = `${image.height}px`;
        zoom.style.width = `${image.width + 30}px`;
      }
    }
  }

  public onMouseLeave(event) {
    this.zoomViewer.nativeElement.children[0].style.display = 'none';
  }

  /**
   * CLICK FUNCTIONS
   * createNavigationUrl()
   */



  onSelectColor(color: any) {
    this.selectedColor = color.name;
  }

  onSelectSize(size: any) {
    this.selectedSize = size.name;
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
