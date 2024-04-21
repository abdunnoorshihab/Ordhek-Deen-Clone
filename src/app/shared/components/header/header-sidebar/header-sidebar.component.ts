import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.scss'],
})
export class HeaderSidebarComponent implements OnInit, OnDestroy {
  // BOOLEAN VARIABLE
  headerSideBar:boolean = false;
  
  constructor() {}

  ngOnInit(): void {}

  /** 
   * HEADER SIDEBAR FUNCTION
   * onHeaderSideBar()
  */
  onHeaderSideBar(){
    this.headerSideBar = !this.headerSideBar;
  }

  ngOnDestroy(): void {}
}
