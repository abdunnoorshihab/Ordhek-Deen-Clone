import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckoutRoutingModule} from './checkout-routing.module';
import {CheckoutComponent} from './checkout.component';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from "../../../shared/shared.module";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    RouterModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class CheckoutModule {
}
