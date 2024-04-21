import { registerLocaleData } from '@angular/common';
import localeBn from '@angular/common/locales/bn';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('scroll') scroll: ElementRef;

  constructor(private router: Router) {
    registerLocaleData(localeBn, 'bn');
  }

  /**
   * scrollTop();
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
