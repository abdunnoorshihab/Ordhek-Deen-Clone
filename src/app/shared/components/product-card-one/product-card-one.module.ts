import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardOneComponent} from './product-card-one.component';
import {PipesModule} from '../../pipes/pipes.module';
import {YoutubeVideoShowModule} from '../../dialog-view/youtube-video-show/youtube-video-show.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SharedModule} from '../../shared.module';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ProductCardOneComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        PipesModule,
        YoutubeVideoShowModule,
        MatTooltipModule,
        SharedModule,
        MatIconModule,
    ],
  exports: [
    ProductCardOneComponent
  ]
})
export class ProductCardOneModule {
}
