import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSpinnerModule,
    MatButtonModule
  ]
})
export class ContactUsModule { }
