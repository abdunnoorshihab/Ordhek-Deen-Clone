import { Component } from '@angular/core';
import { CarouselCntrlService } from 'src/app/services/common/carousel-cntrl.service';

@Component({
  selector: 'app-home-successor',
  templateUrl: './home-successor.component.html',
  styleUrls: ['./home-successor.component.scss'],
})
export class HomeSuccessorComponent {
  constructor(private carouselCtrl: CarouselCntrlService) {}
}
