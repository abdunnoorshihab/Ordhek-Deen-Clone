import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from './account-routing.module';
import {AccountComponent} from './account.component';
import {SharedModule} from '../../../shared/shared.module';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {OrderListComponent} from './order-list/order-list.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {EditBasicInfoModule} from '../../../shared/dialog-view/edit-basic-info/edit-basic-info.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {ImageCropComponent} from './image-crop/image-crop.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ImageCropperModule} from 'ngx-image-cropper';
import {WishlistComponent} from './wishlist/wishlist.component';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import { AddressComponent } from './address/address.component';
import { EducationQualComponent } from './education-qual/education-qual.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';


import {AccountSettingComponent} from "./account-setting/account-setting.component";
import { ReportComponent } from './report/report.component';
import { ShortListComponent } from './short-list/short-list.component';
import { MyPurchasedComponent } from './my-purchased/my-purchased.component';

// component by Sharif
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {MaterialModule} from "../../../material/material.module";
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { SecurityCodeComponent } from './security-code/security-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPassOptionComponent } from './reset-pass-option/reset-pass-option.component';

import { ExpectedLifePartnerComponent } from './expected-life-partner/expected-life-partner.component';
import { FamilyInfoComponent } from './family-info/family-info.component';

import { FaqComponent } from './faq/faq.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { GuideComponent } from './guide/guide.component';
import { IgnoreListComponent } from './ignore-list/ignore-list.component';
import { MarriageRelatedInfoComponent } from './marriage-related-info/marriage-related-info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule } from '@angular/router';
import { PledgeComponent } from './pledge/pledge.component';


@NgModule({
  declarations: [
    AccountComponent,
    BasicInfoComponent,
    ChangePasswordComponent,
    OrderListComponent,
    ReviewsComponent,
    TransactionsComponent,
    OrderDetailsComponent,
    ImageCropComponent,
    WishlistComponent,
    UserDashboardComponent,
    EducationQualComponent,
    RequirementsComponent,
    PersonalInfoComponent,
    AddressComponent,
    EducationQualComponent,
    MarriageRelatedInfoComponent,
    EducationalDetailsComponent,
    UserDashboardComponent,
    ExpectedLifePartnerComponent,
    GeneralInfoComponent,
    AccountSettingComponent,
    NotificationsComponent,
    ContactDetailsComponent,
    GeneralInfoComponent,
    AccountSettingComponent,
    IgnoreListComponent,
    ReportComponent,
    ShortListComponent,
    MyPurchasedComponent,
    ForgotPassComponent,
    SecurityCodeComponent,
    ResetPasswordComponent,
    ResetPassOptionComponent,
    FaqComponent,
    GuideComponent,
    PledgeComponent,
    FamilyInfoComponent,

  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    EditBasicInfoModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    ImageCropperModule,
    FormsModule,
    PipesModule,
    NgxSpinnerModule,
    MaterialModule,
    RouterModule
  ]
})
export class AccountModule {}
