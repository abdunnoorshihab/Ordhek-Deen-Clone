import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import {BrandCardOneModule} from '../../shared/components/brand-card-one/brand-card-one.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    BrandsComponent
  ],
    imports: [
        CommonModule,
        BrandsRoutingModule,
        BrandCardOneModule,
        NgxPaginationModule,
        FormsModule,
        SharedModule
    ]
})
export class BrandsModule { }
