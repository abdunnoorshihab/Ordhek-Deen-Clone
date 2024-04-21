import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarOneLoaderComponent } from './product-car-one-loader.component';
// @ts-ignore
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    ProductCarOneLoaderComponent
  ],
  exports: [
    ProductCarOneLoaderComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ]
})
export class ProductCarOneLoaderModule { }
