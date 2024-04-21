import {Component, Input, OnInit} from '@angular/core';
import {Brand} from '../../../interfaces/common/brand.interface';

@Component({
  selector: 'app-brand-card-one',
  templateUrl: './brand-card-one.component.html',
  styleUrls: ['./brand-card-one.component.scss']
})
export class BrandCardOneComponent implements OnInit {
  @Input() data: Brand;

  constructor() { }

  ngOnInit(): void {
  }

}
