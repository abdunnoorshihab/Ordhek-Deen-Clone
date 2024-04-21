import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../interfaces/common/category.interface';

@Component({
  selector: 'app-category-card-one',
  templateUrl: './category-card-one.component.html',
  styleUrls: ['./category-card-one.component.scss']
})
export class CategoryCardOneComponent implements OnInit {

  @Input() data: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
