import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CheckNullPipe} from "./check-null.pipe";
import {EngBnNumPipe} from "./eng-bn-num.pipe";
import {NumberMinDigitPipe} from './number-min-digit.pipe';
import {OrderStatusPipe} from './order-status.pipe';
import {PricePipe} from './price.pipe';
import {SafeHtmlCustomPipe} from './safe-html.pipe';
import {SlugToNormalPipe} from './slug-to-normal.pipe';
import {SortPipe} from './sort.pipe';


@NgModule({
  declarations: [
    SafeHtmlCustomPipe,
    SortPipe,
    NumberMinDigitPipe,
    SlugToNormalPipe,
    CheckNullPipe,
    PricePipe,
    OrderStatusPipe,
    EngBnNumPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafeHtmlCustomPipe,
    SortPipe,
    NumberMinDigitPipe,
    SlugToNormalPipe,
    CheckNullPipe,
    PricePipe,
    OrderStatusPipe,
    EngBnNumPipe,
  ]
})
export class PipesModule {
}
