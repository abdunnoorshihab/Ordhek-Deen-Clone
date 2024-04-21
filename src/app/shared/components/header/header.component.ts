import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Cart} from '../../../interfaces/common/cart.interface';
import {Product} from '../../../interfaces/common/product.interface';
import {CartService} from '../../../services/common/cart.service';
import {ProductService} from '../../../services/common/product.service';
import {WishListService} from '../../../services/common/wish-list.service';
import {ReloadService} from '../../../services/core/reload.service';
import {UiService} from '../../../services/core/ui.service';
import {UtilsService} from '../../../services/core/utils.service';
import {PricePipe} from '../../pipes/price.pipe';
import {ALL_PRODUCTS} from '../../../core/db/all-products.db';
import {DATABASE_KEY} from '../../../core/utils/global-variable';
import {CategorySlideComponent} from './category-slide/category-slide.component';
import {Currency} from '../../../interfaces/core/currency.interface';
import {CURRENCY} from '../../../core/utils/app-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [PricePipe],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  // Currency
  currency: Currency = CURRENCY;

  // Header Logic Data
  headerFixed = false;
  resSearchShow = false;
  cartSlide = false;
  cartAnimate = false;

  // Cart Data
  carts: Cart[] = [];

  // Wishlist Data
  wishLists: Cart[] = [];

  // Category Control Data
  categoryBar = false;
  @ViewChild('categorySlide') categorySlide!: CategorySlideComponent;

  // Search Data
  searchProducts: Product[] = [];

  // Search Control Data
  searchQueryProduct: string;
  overlay = false;
  isOpen = false;
  isFocused = false;
  isLoading = false;
  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('searchInputMobile') searchInputMobile: ElementRef;

  // Search Placeholder Animation
  timeOutOngoing: any;
  char = 0;
  txt = 'Search products in Soft Commerce...';

  // Subscriptions
  private headerHideRoute: Subscription;
  private subReloadCart: Subscription;
  private subReloadWishlist: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private reloadService: ReloadService,
    private uiService: UiService,
    private pricePipe: PricePipe,
    private wishListService: WishListService,
    private utilsService: UtilsService,
  ) {
  }

  ngOnInit(): void {

    // Cart Reload Data & Get Data
    this.subReloadCart = this.reloadService.refreshCart$.subscribe((refresh) => {
      this.getCarsItemFromLocal(refresh);
    });
    this.getCarsItemFromLocal();

    // Wishlist Reload Data & Get Data
    this.subReloadWishlist = this.reloadService.refreshWishList$.subscribe((refresh) => {
      this.getWishListItemFromLocalStorage(refresh);
    });
    this.getWishListItemFromLocalStorage();

    // Category Control
    this.categoryBarControl();

  }

  ngAfterViewInit() {
    // Search Animation
    this.searchAnim();
  }

  /**
   * ON SEARCH CHANGE
   * onChangeInput()
   */
  onChangeInput(event: string, fieldName: string) {
    this.isLoading = true;
    if (event) {
      const options: { caseSensitive: boolean, includedKeys: string[] } = {
        caseSensitive: false,
        includedKeys: [fieldName],
      }
      this.searchProducts = this.utilsService.searchWithRegex(ALL_PRODUCTS, event, options);
      if (this.searchProducts.length > 0) {
        this.isOpen = true;
        this.overlay = true;
      }
      this.isLoading = false;
    } else {
      this.isLoading = false;
      this.overlay = false;
      this.searchProducts = [];
    }
  }

  /**
   * CART Functions
   * getCarsItemFromLocal()
   * onIncrementQty()
   * onDecrementQty()
   * onDeleteCartItem()
   */

  private getCarsItemFromLocal(refresh?: boolean) {
    const items = this.cartService.getCartItemFromLocalStorage();
    if (items && items.length > 0) {

      const ids: string[] = items.map((m) => m.product as string);
      const products = this.productService.findProductsByIds(ids);
      if (products && products.length > 0) {
        this.carts = items.map((t1) => ({
          ...t1,
          ...{product: products.find((t2) => t2._id === t1.product)},
        }));
        this.cartService.updateCartList(this.carts);
        if (refresh) {
          this.cartAnimate = true;
          setTimeout(() => {
            if (this.cartAnimate == true) {
              this.cartAnimate = false;
            }
          }, 1000);
        }
      }
    } else {
      this.carts = [];
      this.cartService.updateCartList(this.carts);
    }
  }

  onIncrementQty(cartId: string, index: number) {
    const data = this.cartService.getCartItemFromLocalStorage();
    if (data != null) {
      data[index].selectedQty = data[index].selectedQty + 1;
      localStorage.setItem(DATABASE_KEY.userCart, JSON.stringify(data));
      this.reloadService.needRefreshCart$();
    }
  }

  onDecrementQty(cartId: string, index: number) {
    const data = this.cartService.getCartItemFromLocalStorage();
    if (data[index].selectedQty === 1) {
      return;
    }
    if (data != null) {
      data[index].selectedQty = data[index].selectedQty - 1;
      localStorage.setItem(DATABASE_KEY.userCart, JSON.stringify(data));
      this.reloadService.needRefreshCart$();
    }
  }

  onDeleteCartItem(cartId: string, productId?: string) {
    this.cartService.deleteCartItemFromLocalStorage(productId);
    this.reloadService.needRefreshCart$();
  }


  /**
   * Wishlist Functions
   * getWishListItemFromLocalStorage()
   */
  private getWishListItemFromLocalStorage(refresh?: boolean) {
    const items = this.wishListService.getWishListItemFromLocalStorage();
    if (items && items.length > 0) {
      const ids: string[] = items.map((m) => m.product as string);
      const products = this.productService.findProductsByIds(ids);
      if (products && products.length > 0) {

        this.wishLists = items.map((t1) => ({
          ...t1,
          ...{product: products.find((t2) => t2._id === t1.product)},
        }));

        this.wishListService.updateWishListList(this.wishLists);
      }
    } else {
      this.wishLists = [];
      this.wishListService.updateWishListList(this.wishLists);
    }
  }

  /**
   * Calculation
   * cartSubTotal()
   */

  get cartSubTotal(): number {
    return this.carts
      .map((t) => {
        return this.pricePipe.transform(
          t.product as Product,
          'salePrice',
          t.selectedQty
        ) as number;
      })
      .reduce((acc, value) => acc + value, 0);
  }

  /***
   * UI Essentials
   * scrollBody()
   * resSearchBoxToggle()
   * cartSlideShow()
   * cartSlideHide()
   * clickProceedToCart()
   * categoryBarControl()
   * showCategory()
   */
  @HostListener('window:scroll')
  scrollBody() {
    this.headerFixed = window.scrollY > 400;
  }

  resSearchBoxToggle() {
    this.resSearchShow = !this.resSearchShow;
  }

  cartSlideShow() {
    this.cartSlide = true;
    this.categorySlide.onHideCategory();
  }

  cartSlideHide() {
    this.cartSlide = false;
  }

  public clickProceedToCart() {
    this.cartSlide = false;
    if (this.carts.length) {
      this.router.navigate(['/checkout']);
    } else {
      this.uiService.warn('Sorry! No product to your cart.')
    }

  }

  categoryBarControl() {
    this.router.events.subscribe(() => {
      this.categoryBar = this.router.url != '/';
    });
    if (this.router.url == '/') {
      this.categoryBar = true;
    } else {
      this.categoryBar = true;
    }
  }

  showCategory() {
    this.categorySlide.onShowCategory();
  }

  /**
   * HANDLE SEARCH Area
   * onClickHeader()
   * onClickSearchArea()
   * handleFocus()
   * setPanelState()
   * handleOpen()
   * handleOutsideClick()
   * handleCloseOnly()
   * handleCloseAndClear()
   * onSelectItem()
   */

  onClickHeader(): void {
    this.searchInput.nativeElement.value = '';
    this.handleCloseOnly();
  }

  onClickSearchArea(event: MouseEvent): void {
    event.stopPropagation();
  }


  handleFocus(event: FocusEvent): void {
    this.searchInput.nativeElement.focus();

    if (this.isFocused) {
      return;
    }
    if (this.searchProducts.length > 0) {
      this.setPanelState(event);
    }
    this.isFocused = true;
  }

  private setPanelState(event: FocusEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.isOpen = false;
    this.handleOpen();
  }

  handleOpen(): void {
    if (this.isOpen || (this.isOpen && !this.isLoading)) {
      return;
    }
    if (this.searchProducts.length > 0) {
      this.isOpen = true;
      this.overlay = true;
    }
  }

  handleOutsideClick(): void {
    this.searchInput.nativeElement.value = '';
    if (!this.isOpen) {
      // this.isFocused = false;
      return;
    }
    this.isOpen = false;
    this.overlay = false;
    this.isFocused = false;
  }

  handleCloseOnly(): void {
    if (!this.isOpen) {
      this.isFocused = false;
      return;
    }
    this.isOpen = false;
    this.overlay = false;
    this.isFocused = false;
  }

  handleCloseAndClear(): void {
    if (!this.isOpen) {
      this.isFocused = false;
      return;
    }
    this.isOpen = false;
    this.overlay = false;
    this.searchProducts = [];
    this.isFocused = false;
  }

  onSelectItem(data: Product): void {
    this.searchInput.nativeElement.value = '';
    this.handleCloseAndClear();
    this.router.navigate(['/products/details', data?.slug]);
  }

  /**
   * Search Animation
   * searchAnim()
   * typeIt()
   */
  private searchAnim() {
    const target = this.searchInput.nativeElement as HTMLInputElement;
    const target2 = this.searchInputMobile
      ? (this.searchInputMobile.nativeElement as HTMLInputElement)
      : null;
    target.placeholder = '|';
    this.typeIt(target);
    if (target2) {
      target2.placeholder = '|';
      this.typeIt(target2);
    }
  }

  private typeIt(target: HTMLInputElement) {
    const humanize = Math.round(Math.random() * (300 - 30)) + 30;
    this.timeOutOngoing = setTimeout(() => {
      this.char++;
      const type = this.txt.substring(0, this.char);
      target.placeholder = type + '|';
      this.typeIt(target);
      if (this.char === this.txt.length) {
        target.placeholder = '|';
        this.char = 0;
      }
    }, humanize);
  }


  /**
   * NG ON DESTROY
   */

  ngOnDestroy(): void {
    if (this.headerHideRoute) {
      this.headerHideRoute.unsubscribe();
    }
    if (this.subReloadCart) {
      this.subReloadCart.unsubscribe();
    }
    if (this.subReloadWishlist) {
      this.subReloadWishlist.unsubscribe();
    }
  }

}
