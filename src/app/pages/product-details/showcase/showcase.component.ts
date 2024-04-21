import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  // Step Control Data
  step: number = 1;

  constructor() {
  }

  ngOnInit(): void {

  }


  /**
   * On Step Change
   * onStepChange()
   */
  onStepChange(number: number) {
    this.step = number;
  }
}
