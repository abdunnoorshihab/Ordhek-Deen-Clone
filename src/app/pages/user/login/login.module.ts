import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
// import {DigitOnlyModule} from '@uiowa/digit-only';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // DigitOnlyModule
  ]
})
export class LoginModule {
}
