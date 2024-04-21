import {Component, Inject, PLATFORM_ID} from '@angular/core';
import localeBn from '@angular/common/locales/bn';
import {isPlatformBrowser, isPlatformServer, registerLocaleData} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Check Browser & Server
  isBrowser: boolean;
  isServer: boolean;


  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    registerLocaleData(localeBn, 'bn');
    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
  }


}
