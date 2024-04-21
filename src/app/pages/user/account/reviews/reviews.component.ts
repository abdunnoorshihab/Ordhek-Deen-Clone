import {Component, OnInit} from '@angular/core';
import {ALL_REVIEW} from '../../../../core/db/review-data.db';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {


  allReviews: any = ALL_REVIEW;
  user: any = null;

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 12;


  constructor() {
  }

  ngOnInit(): void {

  }


}
