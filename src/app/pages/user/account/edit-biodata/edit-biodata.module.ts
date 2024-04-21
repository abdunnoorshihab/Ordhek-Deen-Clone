import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBiodataRoutingModule } from './edit-biodata-routing.module';
import { AddressComponent } from './address/address.component';
import { MaterialModule } from 'src/app/material/material.module';
import {OccupationInfoComponent} from "./occupation-info/occupation-info.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddressComponent,
    OccupationInfoComponent
  ],
  imports: [
    CommonModule,
    EditBiodataRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class EditBiodataModule { }
