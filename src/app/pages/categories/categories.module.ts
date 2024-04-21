import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {CategoryCardOneModule} from '../../shared/components/category-card-one/category-card-one.module';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        NgxPaginationModule,
        CategoryCardOneModule,
        FormsModule,
        SharedModule
    ]
})
export class CategoriesModule { }
