import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
