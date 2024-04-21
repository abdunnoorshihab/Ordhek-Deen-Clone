import { Component } from '@angular/core';
import { ALL_PRODUCTS } from 'src/app/core/db/all-products.db';
@Component({
  selector: 'app-profile-card-one',
  templateUrl: './profile-card-one.component.html',
  styleUrls: ['./profile-card-one.component.scss']
})
export class ProfileCardOneComponent {
  profileList = ALL_PRODUCTS;

}
