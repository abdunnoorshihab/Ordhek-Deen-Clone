import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {Subscription} from 'rxjs';
import {DATABASE_KEY} from 'src/app/core/utils/global-variable';
import {Cart} from 'src/app/interfaces/common/cart.interface';
import {OrderStatus} from '../../../enum/order.enum';
import {Product} from '../../../interfaces/common/product.interface';
import {CartService} from '../../../services/common/cart.service';
import {OrderService} from '../../../services/common/order.service';
import {ProductService} from '../../../services/common/product.service';
import {ReloadService} from '../../../services/core/reload.service';
import {StorageService} from '../../../services/core/storage.service';
import {UiService} from '../../../services/core/ui.service';
import {UtilsService} from '../../../services/core/utils.service';
import {EngBnNumPipe} from '../../../shared/pipes/eng-bn-num.pipe';
import {PricePipe} from '../../../shared/pipes/price.pipe';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [PricePipe, EngBnNumPipe]
})
export class CheckoutComponent implements OnInit, OnDestroy {

  // Form group
  dataForm?: FormGroup;
  @ViewChild('formElement') formElement: NgForm;

  // Cart Data
  carts: Cart[] = [];

  // Delivery Charge Data
  insideCity: number = 30;
  outsideCity: number = 80;

  // Payment Method Data
  selectedPaymentMethod: string = 'cash_on_delivery';


  // Subscriptions
  private subReloadCart: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private reloadService: ReloadService,
    private uiService: UiService,
    private pricePipe: PricePipe,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private utilsService: UtilsService,
    private orderService: OrderService,
    private spinnerService: NgxSpinnerService,
    private storageService: StorageService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {

    // Init Form
    this.initFormGroup();

    // Cart Reload Data & Get Data
    this.subReloadCart = this.cartService.refreshStoredCart$.subscribe(() => {
      this.carts = this.cartService.cartItems;
    });
    this.carts = this.cartService.cartItems;

  }


  /**
   * FORM Methods
   * initFormGroup()
   * onSubmit()
   */
  private initFormGroup() {
    this.dataForm = this.fb.group({
      phone: ["01648879969", Validators.required],
      name: ["Alex Jonson", Validators.required],
      address: ['Dhaka, Bangladesh'],
      deliveryCharge: [this.insideCity],
      paymentMethod: [this.selectedPaymentMethod],
      acceptTerms: [true],
    });

  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required field');
      return;
    }

    if (!this.dataForm.value.acceptTerms) {
      this.uiService.warn('Please accept ours terms & condition to continue.')
      return;
    }

    if (!this.dataForm.value.phone) {
      this.uiService.warn('Please enter phone')
      return;
    }

    // Product Info
    const products = this.carts.map(m => {
      return {
        _id: (m.product as Product)._id,
        name: (m.product as Product).name,
        slug: (m.product as Product).slug,
        image: (m.product as Product).images && (m.product as Product).images.length ? (m.product as Product).images[0] : null,
        category: {
          _id: (m.product as Product).category?._id,
          name: (m.product as Product).category?.name,
          slug: (m.product as Product).category?.slug,
        },
        subCategory: {
          _id: (m.product as Product).subCategory?._id,
          name: (m.product as Product).subCategory?.name,
          slug: (m.product as Product).category?.slug,
        },
        brand: {
          _id: (m.product as Product).brand?._id,
          name: (m.product as Product).brand?.name,
          slug: (m.product as Product).category?.slug,
        },
        regularPrice: this.pricePipe.transform((m.product as Product), 'regularPrice'),
        unitPrice: this.pricePipe.transform((m.product as Product), 'salePrice'),
        quantity: m.selectedQty,
        orderType: 'regular',
        color: m.color ? m.color : null,
        size: m.size ? m.size : null,
      } as any;
    });

    const orderData: any = {
      orderId: '00' + this.utilsService.getRandomInt(0, 100),
      name: this.dataForm.value.name,
      phoneNo: this.dataForm.value.phone,
      shippingAddress: this.dataForm.value.address,
      paymentType: this.dataForm.value.paymentMethod,
      paymentStatus: 'unpaid',
      orderStatus: OrderStatus.PENDING,
      orderedItems: products,
      subTotal: this.cartSubTotal,
      deliveryCharge: this.dataForm.value.deliveryCharge,
      discount: 0,
      totalSave: this.cartDiscountAmount,
      grandTotal: this.grandTotal,
      checkoutDate: this.utilsService.getDateString(new Date()),
      orderTimeline: null,
      hasOrderTimeline: false,
      user: null
    }

    this.orderService.addOrder(orderData);
    this.router.navigate(['/complete_order']).then();

  }


  /**
   * CART Functions
   * onIncrementQty()
   * onDecrementQty()
   * onDeleteCartItem()
   */
  onIncrementQty(index: number) {
    const data = this.cartService.getCartItemFromLocalStorage();
    if (data != null) {
      data[index].selectedQty = data[index].selectedQty + 1;
      localStorage.setItem(DATABASE_KEY.userCart, JSON.stringify(data));
      this.reloadService.needRefreshCart$();
    }
  }

  onDecrementQty(index: number) {
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
   * Calculation
   * cartSubTotal()
   * grandTotal()
   * cartDiscountAmount()
   */

  get cartSubTotal(): number {
    return this.carts.map(t => {
      return this.pricePipe.transform(t.product as Product, 'salePrice', t.selectedQty) as number;
    }).reduce((acc, value) => acc + value, 0);
  }

  get grandTotal(): number {
    return (this.cartSubTotal + this.dataForm.value.deliveryCharge);
  }

  get cartDiscountAmount(): number {
    return this.carts.map(t => {
      return this.pricePipe.transform(t.product as Product, 'discountAmount', t.selectedQty) as number;
    }).reduce((acc, value) => acc + value, 0);
  }


  /**
   * NG ON DESTROY
   */
  ngOnDestroy() {
    if (this.subReloadCart) {
      this.subReloadCart.unsubscribe();
    }
  }


}
