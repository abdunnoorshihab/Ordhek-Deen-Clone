import { Injectable } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow,EffectFade,Autoplay,Pagination, Navigation ,Thumbs, Grid} from "swiper";
// install Swiper modules
SwiperCore.use([EffectCoverflow,EffectFade,Autoplay,Pagination, Navigation,Thumbs,Grid]);

@Injectable({
  providedIn: 'root'
})
export class CarouselCntrlService {

  constructor() { }
}
