import { Component, Input } from '@angular/core';
import {Statistics} from '../../../interfaces/common/statistics.interface';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @Input() data: Statistics[] = [];
}
