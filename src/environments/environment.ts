// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiBaseLink: 'https://api.heriken.co',
  ftpBaseLink: 'https://api.heriken.co',
  // apiBaseLink: 'http://localhost:4001',
  // ftpBaseLink: 'http://localhost:4001',
  userBaseUrl: 'account',
  userProfileUrl: '/account',
  userLoginUrl: 'login',
  storageSecret: 'SOFT_2021_IT_1998',
  userTokenSecret: 'SOFT_ADMIN_1996_&&_SOBUR_dEv',
  apiTokenSecret: 'SOFT_API_1998_&&_SAZIB_dEv',

  bkashCallbackUrl: 'http://localhost:4200/payment/check-bkash-payment',

  firebaseConfig: {
    apiKey: 'AIzaSyCtwO_4F74Eo6fmRA6W56M6gRhUAGEOiU8',
    authDomain: 'esquire-electronics-23467.firebaseapp.com',
    projectId: 'esquire-electronics-23467',
    storageBucket: 'esquire-electronics-23467.appspot.com',
    messagingSenderId: '91313515423',
    appId: '1:91313515423:web:7e8406f5216c6926652baa',
    measurementId: 'G-G102PDVQQ6',

  },
  VERSION: 2,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
