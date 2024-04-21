import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating = 0;
  @Input() starCount = 5;
  @Input() color = 'accent';
  @Input() showRateText = true;
  @Input() showSnackbar = true;
  @Output() ratingUpdated = new EventEmitter();

  private snackBarDuration = 2000;
  ratingArr = [];

  constructor(private snackBar: MatSnackBar) {
  }


  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {
    if (this.showSnackbar) {
      this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
        duration: this.snackBarDuration
      });
    }
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }


  /**
   * RATING VALUE COLOR
   */
  get ratingValueColor(): string {
    let color;
    if (this.showRateText) {
      switch (this.rating) {
        case 1: {
          color = '#FF5733';
          break;
        }
        case 2 : {
          color = '#FF4078';
          break;
        }
        case 3: {
          color = 'orange';
          break;
        }
        case 4 : {
          color = '#008BB4';
          break;
        }
        case 5 : {
          color = 'green';
          break;
        }
        default: {
          color = 'black';
          break;
        }
      }
    }

    return color;
  }


}

export enum StarRatingColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'
}
