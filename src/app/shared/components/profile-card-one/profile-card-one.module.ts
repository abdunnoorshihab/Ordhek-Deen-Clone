import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardOneComponent } from './profile-card-one.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileCardOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProfileCardOneComponent
  ]
})
export class ProfileCardOneModule { }
