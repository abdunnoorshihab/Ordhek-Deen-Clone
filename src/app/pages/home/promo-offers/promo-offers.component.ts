import { Component } from '@angular/core';
import {PromoOffer} from "../../../interfaces/common/promo-offer.interface";
import {ALL_PROMO_OFFERS} from "../../../core/db/promo-offer.db";

@Component({
  selector: 'app-promo-offers',
  templateUrl: './promo-offers.component.html',
  styleUrls: ['./promo-offers.component.scss']
})
export class PromoOffersComponent {
  promoOffers: PromoOffer[] = ALL_PROMO_OFFERS;


  /**
   * Show and Hide Promo Offer Based on End Time
   * getShowOrHide()
   */

  getShowOrHide(data: PromoOffer) {
    const nowTime = new Date();
    const endTime = new Date(data.endDateTime)
    if (nowTime >= endTime) {
      return {
        'display': 'none'
      }
    } else {
      return {
        'display': 'block'
      }

    }

  }
}
