import {Component, OnInit} from '@angular/core';
import {CategoryMenu} from "../../../interfaces/common/category-menu.interface";
import {ALL_CATEGORY_MENU} from "../../../core/db/categoryMenu.db";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryMenus: CategoryMenu[] = ALL_CATEGORY_MENU;

  /**
   * Skeleton Loader
   * All skeleton loader control by those variable
   */
  isLoadingCategoryMenu: boolean = true;

  ngOnInit(): void {
    /**
     * BASE Get Data
     * skeletonLoaderTimeout()
     * getFeatureProducts()
     * getNewProducts()
     * getBrowseProducts()
     */

    this.skeletonLoaderTimeout();
  }

  /**
   * Skeleton Loader View
   * skeletonLoaderTimeout()
   */

  private skeletonLoaderTimeout() {
    setTimeout(() => {
      this.isLoadingCategoryMenu = false;
    }, 200)
  }

}
