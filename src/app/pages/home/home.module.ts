import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from './../../material/material.module';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BannerComponent } from './banner/banner.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeCollegeNoticeComponent } from './home-college-notice/home-college-notice.component';
import { HomeContactUsComponent } from './home-contact-us/home-contact-us.component';
import { GalleryComponent } from './home-gallery/gallery/gallery.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { HomeLectureComponent } from './home-lecture/home-lecture.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeSuccessorComponent } from './home-successor/home-successor.component';
import { HomeTeachersComponent } from './home-teachers/home-teachers.component';
// import { SingleAdBannerComponent } from './single-ad-banner/single-ad-banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeTeachersComponent,
    HomeCollegeNoticeComponent,
    HomeBannerComponent,
    HomeLectureComponent,
    HomeGalleryComponent,
    HomeSuccessorComponent,
    HomeNewsComponent,
    HomeContactUsComponent,
    BannerComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SwiperModule,
    MatMenuModule,
    MatButtonModule,
    SlickCarouselModule,
    SharedModule,
  ],
})
export class HomeModule {}
