import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DigitOnlyModule} from '@uiowa/digit-only';


@NgModule({
  declarations: [
    RegistrationComponent
  ],
    imports: [
        CommonModule,
        RegistrationRoutingModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        DigitOnlyModule
    ]
})
export class RegistrationModule { }
