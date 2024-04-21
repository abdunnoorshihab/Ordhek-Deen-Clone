import {Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';

import {TopBanner} from '../../interfaces/common/top-banner.interface';
import {TOP_BANNER_DB} from '../../core/db/top-banner.db';

import { Statistics } from 'src/app/interfaces/common/statistics.interface';
import { STATISTICS_DB } from 'src/app/core/db/statistics.db';

import { UserGuide } from 'src/app/interfaces/common/user-guide.interface';
import { USER_GUIDE_DB } from 'src/app/core/db/user-guide.db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  // Static Data
  topBanners: TopBanner[] = TOP_BANNER_DB;
  statistics: Statistics[] = STATISTICS_DB;
  userGuides: UserGuide[] = USER_GUIDE_DB;


  // Scroll Data
  @ViewChild('scroll') scroll: ElementRef;

  // Check Browser
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  }

  /**
   * Scroll Control
   * scrollTop()
   * hideShowScrollBtn()
   */
  scrollTop() {
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll')
  hideShowScrollBtn() {
    if (window.scrollY > 400) {
      this.scroll.nativeElement.style.display = 'flex';
    } else {
      this.scroll.nativeElement.style.display = 'none';
    }
  }

}
