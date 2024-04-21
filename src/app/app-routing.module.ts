import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { CustomPreloadingStrategy } from './core/utils/preloading-strategy';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products/details',
        loadChildren: () =>
          import('./pages/product-details/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./pages/contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
        data: { preload: true, delay: 10 },
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/product-list/product-list.module').then(
            (m) => m.ProductListModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/user/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'registration',
        loadChildren: () =>
          import('./pages/user/registration/registration.module').then(
            (m) => m.RegistrationModule
          ),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('./pages/user/reset-password/reset-password.module').then(
            (m) => m.ResetPasswordModule
          ),
        data: { preload: true, delay: 10 },
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./pages/user/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
      {
        path: 'complete_order',
        loadChildren: () =>
          import('./pages/user/confirmation/confirmation.module').then(
            (m) => m.ConfirmationModule
          ),
        data: { preload: true, delay: 10 },
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./pages/user/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
      {
        path: 'brands',
        loadChildren: () =>
          import('./pages/brands/brands.module').then((m) => m.BrandsModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./pages/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'promo-offer',
        loadChildren: () =>
          import('./pages/promo-offer/promo-offer.module').then(
            (m) => m.PromoOfferModule
          ),
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import(
            './pages/additional-pages/privacy-policy/privacy-policy.module'
          ).then((m) => m.PrivacyPolicyModule),
        data: { preload: true, delay: 10 },
      },
      {
        path: 'terms-and-condition',
        loadChildren: () =>
          import(
            './pages/additional-pages/terms-and-condition/terms-and-condition.module'
          ).then((m) => m.TermsAndConditionModule),
        data: { preload: true, delay: 10 },
      },
      {
        path: 'familyInfo',
        loadChildren: () => import('./pages/user/account/family-info/family-info.component').then(m => m.FamilyInfoComponent),
        data: {preload: true, delay: 10},
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact/contact.module').then((m) => m.ContactModule),
        data: { preload: true, delay: 10 },
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact/contact.module').then((m) => m.ContactModule),
        data: { preload: true, delay: 10 },
      },
      {
        path: 'createAccount',
        loadChildren: () =>
          import('./pages/create-account/create-account.module').then(
            (m) => m.CreateAccountModule
          ),
        data: { preload: true, delay: 10 },
      },
      {
        path: 'search-profile',
        loadChildren: () =>
          import('./pages/search-profile/search-profile.module').then(
            (m) => m.SearchProfileModule
          ),
      },
      {
        path: 'aboutUs',
        loadChildren: () =>
          import('./pages/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
        data: { preload: true, delay: 10 },
      },
      {
          path: '**',
          loadChildren: () =>
            import('./pages/not-found/not-found.module').then(
              (m) => m.NotFoundModule
            ),
      },
]
  }
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      // preloadingStrategy: PreloadAllModules,
      preloadingStrategy: CustomPreloadingStrategy,
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
