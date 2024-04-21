import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from './feature-card.component';
import {PipesModule} from '../../pipes/pipes.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SharedModule} from '../../shared.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    FeatureCardComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        PipesModule,
        MatTooltipModule,
        SharedModule,
        MatIconModule
    ],
  exports:[
    FeatureCardComponent
  ]
})
export class FeatureCardModule { }
