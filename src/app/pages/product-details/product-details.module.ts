import {SwiperModule} from 'swiper/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailsRoutingModule} from './product-details-routing.module';
import {ProductDetailsComponent} from './product-details.component';
import {PipesModule} from '../../shared/pipes/pipes.module';
import {ProductCarOneLoaderModule} from '../../shared/loader/product-car-one-loader/product-car-one-loader.module';
import {RatingAndReviewComponent} from './rating-and-review/rating-and-review.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StarRatingModule} from '../../shared/components/star-rating/star-rating.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ProductCardOneModule} from '../../shared/components/product-card-one/product-card-one.module';
import {SharedModule} from '../../shared/shared.module';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { DescriptionComponent } from './description/description.component';
import { UserReviewComponent } from './user-review/user-review.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ShowcaseComponent } from './showcase/showcase.component';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    RatingAndReviewComponent,
    RelatedProductsComponent,
    ProductInfoComponent,
    DescriptionComponent,
    UserReviewComponent,
    ShowcaseComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    ProductCardOneModule,
    SwiperModule,
    PipesModule,
    ProductCarOneLoaderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    StarRatingModule,
    ReactiveFormsModule,
    MatButtonModule,
    SharedModule,
    MatDialogModule,
  ]
})
export class ProductDetailsModule {
}
