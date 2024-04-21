import {Component, OnInit, ViewChild} from '@angular/core';
import {Brand} from '../../interfaces/common/brand.interface';
import {NgForm} from '@angular/forms';
import {ALL_BRANDS} from '../../core/db/brand.db';
import {UtilsService} from '../../services/core/utils.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  @ViewChild('searchForm') searchForm: NgForm;

  // Store Data
  brands: Brand[] = ALL_BRANDS;

  // Search Control Data
  searchQueryProduct: string;

  // Pagination
  currentPage = 1;
  totalBrands = 0;
  brandsPerPage = 15;


  constructor(
    private utilsService: UtilsService
  ) {
  }


  ngOnInit(): void {

  }

  /**
   * ON SEARCH CHANGE
   * onChangeInput()
   */
  onChangeInput(event: string, fieldName: string) {
    if (event) {
      const options: { caseSensitive: boolean, includedKeys: string[] } = {
        caseSensitive: false,
        includedKeys: [fieldName],
      }
      this.brands = this.utilsService.searchWithRegex(ALL_BRANDS, event, options);
    } else {
      this.brands = ALL_BRANDS
    }
  }


  /**
   * PAGINATION CHANGE
   * onPageChanged()
   */
  public onPageChanged(event: number) {
    this.currentPage = event
  }


}
