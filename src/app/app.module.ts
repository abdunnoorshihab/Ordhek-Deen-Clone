import {NgModule} from '@angular/core';
import {BrowserModule, Meta, Title} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SwiperModule} from 'swiper/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Import your library
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {PagesComponent} from './pages/pages.component';
import {HeaderModule} from './shared/components/header/header.module';
import {FooterModule} from './shared/components/footer/footer.module';
import {OccupationInfoComponent} from "./pages/user/account/edit-biodata/occupation-info/occupation-info.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    HeaderModule,
    FooterModule,
    SharedModule,
  ],
  providers: [
    Title,
    Meta,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
