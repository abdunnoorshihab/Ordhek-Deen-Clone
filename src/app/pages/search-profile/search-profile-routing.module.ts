import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchProfileComponent } from './search-profile.component';

const routes: Routes = [
  {
    path: '',
    component: SearchProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchProfileRoutingModule { }
