import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgModule } from '@angular/core';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { TransactionsComponent } from './transactions/transactions.component';

// Component by Hasib:
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RequirementsComponent } from './requirements/requirements.component';

// Components by Maaher:
import { AddressComponent } from './address/address.component';
import { EducationQualComponent } from './education-qual/education-qual.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { IgnoreListComponent } from './ignore-list/ignore-list.component';
import { ReportComponent } from './report/report.component';
import { ShortListComponent } from './short-list/short-list.component';
import { MyPurchasedComponent } from './my-purchased/my-purchased.component';

//Components by Rafi
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

//Components by Miraz:
import { MarriageRelatedInfoComponent } from './marriage-related-info/marriage-related-info.component';
//component by binty
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { SecurityCodeComponent } from './security-code/security-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPassOptionComponent } from './reset-pass-option/reset-pass-option.component';
import { FaqComponent } from './faq/faq.component';
import { GuideComponent } from './guide/guide.component';

// Components by Maaher:
import { ExpectedLifePartnerComponent } from './expected-life-partner/expected-life-partner.component';
import { NotificationsComponent } from './notifications/notifications.component';
//Components by Diba
import { PledgeComponent } from './pledge/pledge.component';
import { FamilyInfoComponent } from './family-info/family-info.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'requirements', component: RequirementsComponent },
      { path: 'address', component: AddressComponent },
      { path: 'edu-qual', component: EducationQualComponent },
      { path: 'general-info', component: GeneralInfoComponent },
      { path: 'personal-info', component: PersonalInfoComponent },
      { path: 'edu-info', component: EducationalDetailsComponent },
      { path: 'marriage-related-info', component: MarriageRelatedInfoComponent },

      { path: 'accountSetting', component:AccountSettingComponent},

      {
        path: 'marriage-related-info',
        component: MarriageRelatedInfoComponent,
      },

      { path: 'accountSetting', component: AccountSettingComponent },
      { path: 'pledge', component: PledgeComponent },
      {
        path: 'expected-life-partner',
        component: ExpectedLifePartnerComponent,
      },
      { path: 'notification', component: NotificationsComponent },
      { path: 'ignore-list', component: IgnoreListComponent },
      { path: 'report', component: ReportComponent },
      { path: 'short-list', component: ShortListComponent },
      { path: 'my-purchased', component: MyPurchasedComponent },


      //Template Components: Not important
      { path: 'basic-info', component: BasicInfoComponent },
      { path: 'order-list', component: OrderListComponent },
      { path: 'order-details/:id', component: OrderDetailsComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'wishlist', component: WishlistComponent },
      {path: 'family-info', component: FamilyInfoComponent},


      { path: 'address', component: AddressComponent },
      { path: 'edu-qual', component: EducationQualComponent },
      { path: 'contact-details', component: ContactDetailsComponent },
      { path: 'forgot-password', component: ForgotPassComponent },
      { path: 'security-code', component: SecurityCodeComponent },
      { path: 'reset-pass', component: ResetPasswordComponent },
      { path: 'reset-pass-option', component: ResetPassOptionComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'guide', component: GuideComponent },
      {
        path: 'edit-bio',
        loadChildren: () =>
          import('./edit-biodata/edit-biodata.module').then(
            (m) => m.EditBiodataModule
          ),
      },
      { path: 'educational-details', component: EducationalDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
