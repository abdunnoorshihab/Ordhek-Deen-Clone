import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarRatingComponent} from './star-rating.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    StarRatingComponent,
  ]
})
export class StarRatingModule {
}
