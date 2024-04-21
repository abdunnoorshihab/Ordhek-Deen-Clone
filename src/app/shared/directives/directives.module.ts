import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyLoadDirective} from './image-lazy-load';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyLoadDirective],
  exports: [LazyLoadDirective]
})
export class DirectivesModule { }
