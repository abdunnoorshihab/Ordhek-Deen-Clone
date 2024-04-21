import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CategoryMenu} from '../../../../interfaces/common/category-menu.interface';
import {ALL_CATEGORY_MENU} from '../../../../core/db/categoryMenu.db';

@Component({
  selector: 'app-category-slide',
  templateUrl: './category-slide.component.html',
  styleUrls: ['./category-slide.component.scss']
})
export class CategorySlideComponent implements OnInit, OnDestroy {
  //Store Data
  categoryMenus: CategoryMenu[] = ALL_CATEGORY_MENU;
  toggleSub: any;

  // Subscriptions
  private subDataOne: Subscription;
  //CategorySlide
  categorySlide = false;

  constructor() {
  }


  ngOnInit(): void {
  }


  onShowCategory() {
    this.categorySlide = true;
  }

  onHideCategory() {
    this.categorySlide = false;
  }

  showSub(id: any) {

    if (this.toggleSub === id) {
      this.toggleSub = null;
    } else {
      this.toggleSub = id;
    }

  }

  ngOnDestroy(): void {
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
  }

}
