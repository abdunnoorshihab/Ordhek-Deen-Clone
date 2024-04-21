import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-car-one-loader',
  templateUrl: './product-car-one-loader.component.html',
  styleUrls: ['./product-car-one-loader.component.scss']
})
export class ProductCarOneLoaderComponent implements OnInit {

  @Input() type: string = 'grid';
  constructor() { }

  ngOnInit(): void {
  }

}
