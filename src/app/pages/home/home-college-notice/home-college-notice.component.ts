import { Component } from '@angular/core';
import { CarouselCntrlService } from 'src/app/services/common/carousel-cntrl.service';

@Component({
  selector: 'app-home-college-notice',
  templateUrl: './home-college-notice.component.html',
  styleUrls: ['./home-college-notice.component.scss'],
})
export class HomeCollegeNoticeComponent {
  constructor(private _carousel: CarouselCntrlService) {}
}
