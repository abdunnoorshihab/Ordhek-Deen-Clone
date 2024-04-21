import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, Subscription, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';
import { BANNER } from 'src/app/core/db/home.banner.db';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  imgLoad: boolean = false;
  slideIndex: number;
  banners: any[] = BANNER;

  // Store Data
  windowWidth: number = window.innerWidth;

  //subscription
  subDataOne: Subscription;

  // BREAKPOINTS
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 599px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.slideIndex = 0;
    }, 600);

    setInterval(() => {
      this.nextSlide();
    }, 8000);
  }

  /**
   * CREATE CUSTOM BANNER SLIDE
   * nextSlide()
   * prevSlide()
   * slideShow()
   * autoPlaySlide()
   */
  slideShow(s: any) {
    // condition slide control with indicator
    if (s > this.banners.length - 1) {
      this.slideIndex = 0;
    } else if (s < 0) {
      this.slideIndex = this.banners.length - 1;
    } else {
      this.slideIndex = s;
    }
  }
  nextSlide() {
    this.slideShow((this.slideIndex = this.slideIndex + 1));
  }
  prevSlide() {
    this.slideShow((this.slideIndex = this.slideIndex - 1));
  }

  /**
   * WINDOW WIDTH GET
   * onGetWindowWidth()
   */

  @HostListener('window:resize')
  onGetWindowWidth() {
    this.windowWidth = window.innerWidth;
  }

  ngOnDestroy(): void {
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
  }
}
