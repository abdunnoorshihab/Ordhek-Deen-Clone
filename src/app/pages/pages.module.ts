import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, HeaderModule, FooterModule],
})
export class PagesModule {}
