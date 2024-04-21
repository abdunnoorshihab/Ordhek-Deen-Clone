import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrivacyPolicyRoutingModule} from './privacy-policy-routing.module';
import {PrivacyPolicyComponent} from './privacy-policy.component';
import {PipesModule} from '../../../shared/pipes/pipes.module';


@NgModule({
  declarations: [
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    PrivacyPolicyRoutingModule,
    PipesModule
  ]
})
export class PrivacyPolicyModule {
}
