import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ReloadService} from "../../../services/core/reload.service";
import {RatingAndReviewComponent} from "../rating-and-review/rating-and-review.component";

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})
export class UserReviewComponent {
  ratingCalculation = 4.8;
  rating = 5;

  constructor(
    public dialog: MatDialog,
    private reloadService: ReloadService,
  ) {
  }

  /**
   * Dialog Component
   * openAddressDialog()
   */
  openReviewDialog() {
    this.reloadService.needRefreshData$();
    const dialogRef = this.dialog.open(RatingAndReviewComponent, {
      panelClass: ['theme-dialog'],
      width: '100%',
      maxWidth: '550px',
      maxHeight: '100%',
      autoFocus: false,
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult) {
        dialogRef.close(dialogResult)

      }
    });
  }
}
