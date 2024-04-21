import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { OccupationInfoComponent } from './occupation-info/occupation-info.component';


const routes: Routes = [
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: 'occupation-info',
    component: OccupationInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditBiodataRoutingModule { }
