import {Component, OnInit} from '@angular/core';
import {Product, ProductFilterGroup} from 'src/app/interfaces/common/product.interface';
import {Router} from '@angular/router';
import {StorageService} from '../../services/core/storage.service';
import {DATABASE_KEY} from '../../core/utils/global-variable';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {PRODUCT_DATA} from "../../core/db/product.db";
import {PRODUCT_FILTER_GROUP_DATA} from "../../core/db/productFilterGroup.db";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // Store Data
  products: Product[] = PRODUCT_DATA;
  productFilterGroup: ProductFilterGroup = PRODUCT_FILTER_GROUP_DATA;
  selectedViewType: string = 'grid';
  selectedCategories: string[] = [];
  selectedSubCategories: string[] = [];
  selectedBrands: string[] = [];

  // Pagination
  currentPage = 1;
  totalProducts = PRODUCT_DATA.length;
  productsPerPage = 15;


  // Complex Filter
  categoryFilterArray: any[] = [];
  subCategoryFilterArray: any[] = [];
  brandFilterArray: any[] = [];
  priceFilterArray: any[] = [];

  // Price
  lowValue: number = null;
  highValue: number = null;

  // FilterData
  filter: any = null;


  filterSlide = false;

  // Loading
  isLoading = true;

  constructor(
    private router: Router,
    private storageService: StorageService,
  ) {
  }


  ngOnInit(): void {
    // Check View Layouts
    if (this.savedViewLayout) {
      this.selectedViewType = this.savedViewLayout['viewType'];
    }

    // Skeleton Loader
    this.skeletonLoaderTimeout();
  }


  /**
   * Skeleton Loader
   * skeletonLoaderTimeout()
   */
  private skeletonLoaderTimeout() {
    setTimeout(() => {
      this.isLoading = false;
    }, 200)
  }


  /**
   * CHANGE LAYOUT
   * changeViewLayout()
   * get savedViewLayout()
   */

  changeViewLayout(viewType: string) {
    this.selectedViewType = viewType;
    this.storageService.storeDataToLocalStorage({viewType: viewType}, DATABASE_KEY.productLayout)
  }

  get savedViewLayout() {
    return this.storageService.getDataFromLocalStorage(
      DATABASE_KEY.productLayout
    );
  }


  /***
   * Mobile Filter Toggle
   * filterSlideToggle()
   */
  filterSlideToggle() {
    this.filterSlide = !this.filterSlide;
  }


  /**
   * COMPLEX FILTER METHODS
   * onCheckChange()
   * onPriceRangeChange()
   */
  onCheckChange(event: MatCheckboxChange, type: string, index: number) {

  }

  onPriceRangeChange() {
    const range = {salePrice: {$gt: this.lowValue, $lt: this.highValue}};
    this.priceFilterArray = [range];

  }


  /**
   * RESET FILTER
   * resetCategoryFilter()
   * resetSubCategoryFilter()
   * resetBrandFilter()
   */

  resetCategoryFilter() {
    this.selectedCategories = [];
    this.categoryFilterArray = [];
    this.productFilterGroup.categories.forEach((cat, i) => {
      this.productFilterGroup.categories[i].select = false;
    });
    this.router.navigate(
      ['/products'],
      {queryParams: {categories: []}, queryParamsHandling: 'merge'}
    );
  }

  resetSubCategoryFilter() {
    this.selectedSubCategories = [];
    this.subCategoryFilterArray = [];
    this.productFilterGroup.subCategories.forEach((cat, i) => {
      this.productFilterGroup.subCategories[i].select = false;
    });
    this.router.navigate(
      ['/products'],
      {queryParams: {subCategories: []}, queryParamsHandling: 'merge'}
    );
  }

  resetBrandFilter() {
    this.selectedBrands = [];
    this.brandFilterArray = [];
    this.productFilterGroup.brands.forEach((cat, i) => {
      this.productFilterGroup.brands[i].select = false;
    });
    this.router.navigate(
      ['/products'],
      {queryParams: {brands: []}, queryParamsHandling: 'merge'}
    );
  }


  /**
   * ON PAGINATION CHANGE
   * onPageChanged()
   */
  onPageChanged(event: number) {
    this.currentPage = event;
  }


}

