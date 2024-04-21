import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UiService} from "../../../services/core/ui.service";

@Component({
  selector: 'app-rating-and-review',
  templateUrl: './rating-and-review.component.html',
  styleUrls: ['./rating-and-review.component.scss']
})
export class RatingAndReviewComponent implements OnInit {
  // Rating
  @Input() pageUrl: string = null;
  @Input() productId: string = null;
  @Input() rating = 0;
  @ViewChild('formElement') formElRef: NgForm;

  constructor(
    private uiService: UiService
  ) {
  }

  ngOnInit(): void {
  }


  onRatingChanged(rating) {
    this.rating = rating;
  }

  /**
   * ON SUBMIT
   */
  onSubmitReview(formData: NgForm) {
    this.uiService.success("Review Submitted successfully");
  }


}
