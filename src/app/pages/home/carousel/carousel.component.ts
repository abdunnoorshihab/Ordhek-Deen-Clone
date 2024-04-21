import { Component } from '@angular/core';
import {Carousel} from "../../../interfaces/common/carousel.interface";
import {ALL_CAROUSEL} from "../../../core/db/carousel.db";
import { CarouselCntrlService } from 'src/app/services/common/carousel-cntrl.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  /**
   * BASE DATA
   * All static data come from /src/app/core/db
   * Here All data store in variables. You can replace or rename data in .ts & .html file
   */
  carousels: Carousel[] = ALL_CAROUSEL;

  constructor(
    private _carousel:CarouselCntrlService
  ){

  }

}
