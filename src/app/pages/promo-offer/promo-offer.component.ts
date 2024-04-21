import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PromoOffer} from '../../interfaces/common/promo-offer.interface';
import {DATABASE_KEY} from '../../core/utils/global-variable';
import {StorageService} from '../../services/core/storage.service';
import {Subscription} from 'rxjs';
import {ALL_PROMO_OFFERS} from '../../core/db/promo-offer.db';

@Component({
  selector: 'app-promo-offer',
  templateUrl: './promo-offer.component.html',
  styleUrls: ['./promo-offer.component.scss'],
})
export class PromoOfferComponent implements OnInit {
  // Promo Offer Data
  id?: string;
  promoOffer: PromoOffer = null;

  // Loading
  isLoading: boolean = true;

  // Layout View
  selectedViewType: string = 'grid';

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 12;

  // Subscriptions
  private subRouteParam: Subscription;


  constructor(
    private router: Router,
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // Check View Layouts
    if (this.savedViewLayout) {
      this.selectedViewType = this.savedViewLayout['viewType'];
    }

    // Param Data
    this.subRouteParam = this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        setTimeout(() => {
          this.promoOffer = ALL_PROMO_OFFERS.find(f => f._id === this.id);
          this.isLoading = false;
        }, 100)
      }
    });
  }


  /**
   * CHANGE LAYOUT
   * changeViewLayout()
   * get savedViewLayout()
   */

  changeViewLayout(viewType: string) {
    this.selectedViewType = viewType;
    this.storageService.storeDataToLocalStorage(
      {viewType: viewType},
      DATABASE_KEY.productLayout
    );
  }

  get savedViewLayout() {
    return this.storageService.getDataFromLocalStorage(
      DATABASE_KEY.productLayout
    );
  }

  /**
   * ON PAGINATION CHANGE
   * onPageChanged()
   */
  onPageChanged(event: number) {
    this.currentPage = event;
  }

}
