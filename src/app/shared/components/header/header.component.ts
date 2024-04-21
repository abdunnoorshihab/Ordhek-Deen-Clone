import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerSidebar') headerSidebar: HeaderSidebarComponent;

  constructor() {}

  ngOnInit(): void {}

  /**
   * HEADER SIDEBAR OPEN FUNCTION
   * onHeaderSidebarOpen()
  */
  onHeaderSidebarOpen() {
    this.headerSidebar.onHeaderSideBar();
  }
}
