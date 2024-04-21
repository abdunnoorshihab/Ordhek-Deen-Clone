import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResetPasswordRoutingModule} from './reset-password-routing.module';
import {ResetPasswordComponent} from './reset-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ResetPasswordModule {
}
