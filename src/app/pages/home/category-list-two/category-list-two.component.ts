import { Component } from '@angular/core';
import {Category} from "../../../interfaces/common/category.interface";
import {ALL_CATEGORY} from "../../../core/db/category.db";

@Component({
  selector: 'app-category-list-two',
  templateUrl: './category-list-two.component.html',
  styleUrls: ['./category-list-two.component.scss']
})
export class CategoryListTwoComponent {
  categories: Category[] = ALL_CATEGORY;
}
