import {Component, OnInit, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditBasicInfoComponent} from '../../../../shared/dialog-view/edit-basic-info/edit-basic-info.component';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  user: any = null;
  phoneNo: string = null;

  constructor(
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {

  }


  openNewDialog() {
    this.dialog.open(EditBasicInfoComponent, {
      data: this.user,
      panelClass: ['theme-dialog'],
      autoFocus: false,
      disableClose: false
    });
  }


}
