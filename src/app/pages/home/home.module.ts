import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {SwiperModule} from 'swiper/angular';
import {BrandCardOneModule} from '../../shared/components/brand-card-one/brand-card-one.module';
import {CategoryCardOneModule} from '../../shared/components/category-card-one/category-card-one.module';
import {TimeCounterOneModule} from '../../shared/components/time-counter-one/time-counter-one.module';
import {CategoryMenuLoaderModule} from '../../shared/loader/category-menu-loader/category-menu-loader.module';
import {ProductCarOneLoaderModule} from '../../shared/loader/product-car-one-loader/product-car-one-loader.module';
import {PipesModule} from '../../shared/pipes/pipes.module';
import {SharedModule} from '../../shared/shared.module';
import {CarouselComponent} from './carousel/carousel.component';
import {CategoryListTwoComponent} from './category-list-two/category-list-two.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {FeaturedProductComponent} from './featured-product/featured-product.component';
import {FocusProductsComponent} from './focus-products/focus-products.component';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {NewProductsComponent} from './new-products/new-products.component';
import {PromoOffersComponent} from './promo-offers/promo-offers.component';
import {ShowcaseComponent} from './showcase/showcase.component';
import {TopSellProductsComponent} from './top-sell-products/top-sell-products.component';
import {ProductCardOneModule} from '../../shared/components/product-card-one/product-card-one.module';
import {FeatureCardModule} from '../../shared/components/feature-card/feature-card.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { FilterComponent } from './filter/filter.component';
import { CreateBiodataComponent } from './create-biodata/create-biodata.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HowCompanyWorkComponent } from './how-company-work/how-company-work.component';
import { TopBannerComponent } from './top-banner/top-banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryListComponent,
    CarouselComponent,
    ShowcaseComponent,
    CategoryListTwoComponent,
    PromoOffersComponent,
    FeaturedProductComponent,
    NewProductsComponent,
    TopSellProductsComponent,
    FocusProductsComponent,
    FilterComponent,
    CreateBiodataComponent,
    StatisticsComponent,
    HowCompanyWorkComponent,
    TopBannerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    SlickCarouselModule,
    ProductCardOneModule,
    FeatureCardModule,
    SharedModule,
    BrandCardOneModule,
    CategoryCardOneModule,
    ProductCarOneLoaderModule,
    CategoryMenuLoaderModule,
    TimeCounterOneModule,
    PipesModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class HomeModule {
}
