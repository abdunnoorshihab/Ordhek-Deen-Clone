import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProfileRoutingModule } from './search-profile-routing.module';
import { SearchProfileComponent } from './search-profile.component';
import { RouterModule } from '@angular/router';
import { ProfileCardOneModule } from 'src/app/shared/components/profile-card-one/profile-card-one.module';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    SearchProfileComponent,
  ],
  imports: [
    CommonModule,
    SearchProfileRoutingModule,
    RouterModule,
    ProfileCardOneModule,
    MatExpansionModule
  ]
})
export class SearchProfileModule { }
