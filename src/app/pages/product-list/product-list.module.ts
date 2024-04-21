import {SwiperModule} from 'swiper/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductListRoutingModule} from './product-list-routing.module';
import {ProductListComponent} from './product-list.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import {ProductCarOneLoaderModule} from '../../shared/loader/product-car-one-loader/product-car-one-loader.module';
import {FormsModule} from '@angular/forms';
import {FeatureCardModule} from '../../shared/components/feature-card/feature-card.module';
import {ProductCardOneModule} from '../../shared/components/product-card-one/product-card-one.module';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    ProductCardOneModule,
    RouterModule,
    SwiperModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    ProductCarOneLoaderModule,
    FormsModule,
    FeatureCardModule,
    MatCheckboxModule
  ]
})
export class ProductListModule {
}
