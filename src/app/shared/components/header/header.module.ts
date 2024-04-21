import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared.module';
import {PipesModule} from '../../pipes/pipes.module';
import {CategorySlideComponent} from './category-slide/category-slide.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    HeaderComponent,
    CategorySlideComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    PipesModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [
    HeaderComponent,
    MatIconModule
  ]
})
export class HeaderModule {
}
