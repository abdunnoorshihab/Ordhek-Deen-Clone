import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryCardOneComponent } from './category-card-one.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared.module';


@NgModule({
  declarations: [
    CategoryCardOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    CategoryCardOneComponent
  ]
})
export class CategoryCardOneModule { }
