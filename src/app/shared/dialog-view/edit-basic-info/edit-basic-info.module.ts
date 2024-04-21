import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditBasicInfoComponent} from './edit-basic-info.component';
import {SharedModule} from '../../shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    EditBasicInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    EditBasicInfoComponent
  ]
})
export class EditBasicInfoModule {
}
