import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandCardOneComponent } from './brand-card-one.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared.module';



@NgModule({
  declarations: [
    BrandCardOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    BrandCardOneComponent
  ]
})
export class BrandCardOneModule { }
