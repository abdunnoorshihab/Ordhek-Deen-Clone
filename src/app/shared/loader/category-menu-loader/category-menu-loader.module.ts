import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuLoaderComponent } from './category-menu-loader.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    CategoryMenuLoaderComponent
  ],
  exports: [
    CategoryMenuLoaderComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ]
})
export class CategoryMenuLoaderModule { }
