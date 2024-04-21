import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsAndConditionRoutingModule } from './terms-and-condition-routing.module';
import { TermsAndConditionComponent } from './terms-and-condition.component';
import {PipesModule} from '../../../shared/pipes/pipes.module';


@NgModule({
  declarations: [
    TermsAndConditionComponent
  ],
    imports: [
        CommonModule,
        TermsAndConditionRoutingModule,
        PipesModule
    ]
})
export class TermsAndConditionModule { }
