import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  // Order Data
  orderId: string;

  constructor() {
  }

  ngOnInit(): void {

    this.orderId = localStorage.getItem("orderId");
    localStorage.removeItem("orderId");
  }

}
