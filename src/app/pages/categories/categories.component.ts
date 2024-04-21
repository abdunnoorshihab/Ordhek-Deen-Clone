import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../interfaces/common/category.interface';
import {NgForm} from '@angular/forms';
import {UtilsService} from '../../services/core/utils.service';

import {ALL_CATEGORY} from "../../core/db/category.db";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @ViewChild('searchForm') searchForm: NgForm;

  // Store Data
  categories: Category[] = ALL_CATEGORY;

  // Search Control Data
  searchQueryProduct: string;

  // Pagination
  currentPage = 1;
  totalCategories = 0;
  categoriesPerPage = 15;


  constructor(
    private utilsService: UtilsService
  ) {
  }


  ngOnInit(): void {

  }

  /**
   * ON SEARCH CHANGE
   * onChangeInput()
   */
  onChangeInput(event: string, fieldName: string) {
    if (event) {
      const options: { caseSensitive: boolean, includedKeys: string[] } = {
        caseSensitive: false,
        includedKeys: [fieldName],
      }
      this.categories = this.utilsService.searchWithRegex(ALL_CATEGORY, event, options);
    } else {
      this.categories = ALL_CATEGORY
    }
  }


  /**
   * PAGINATION CHANGE
   * onPageChanged()
   */
  public onPageChanged(event: number) {
    this.currentPage = event
  }


}
