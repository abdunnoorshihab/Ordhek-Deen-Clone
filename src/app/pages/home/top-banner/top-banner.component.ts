import {Component, Input} from '@angular/core';
import {TopBanner} from '../../../interfaces/common/top-banner.interface';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent {

  @Input() data: TopBanner[] = [];

}
