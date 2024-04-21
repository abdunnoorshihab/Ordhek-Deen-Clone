import {SwiperModule} from 'swiper/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PromoOfferRoutingModule} from './promo-offer-routing.module';
import {PromoOfferComponent} from './promo-offer.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import {ProductCarOneLoaderModule} from '../../shared/loader/product-car-one-loader/product-car-one-loader.module';
import {FormsModule} from '@angular/forms';
import {FeatureCardModule} from '../../shared/components/feature-card/feature-card.module';
import {ProductCardOneModule} from '../../shared/components/product-card-one/product-card-one.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {TimeCounterOneModule} from '../../shared/components/time-counter-one/time-counter-one.module';

@NgModule({
  declarations: [
    PromoOfferComponent
  ],
  imports: [
    CommonModule,
    PromoOfferRoutingModule,
    ProductCardOneModule,
    RouterModule,
    SwiperModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    ProductCarOneLoaderModule,
    FormsModule,
    FeatureCardModule,
    MatCheckboxModule,
    TimeCounterOneModule,
  ]
})
export class PromoOfferModule {
}
