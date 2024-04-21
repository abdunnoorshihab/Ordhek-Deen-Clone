import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
  }


  /**
   * UTILS
   */

  getDateString(date: Date, format?: string): string {
    const fm = format ? format : 'YYYY-MM-DD';
    return moment(date).format(fm);
  }

  getDateDifference(startDate: Date, endDate: Date) {

    const a = moment(startDate, 'M/D/YYYY');
    const b = moment(endDate, 'M/D/YYYY');

    return a.diff(b, 'minutes');
  }


  /**
   * GET RANDOM NUMBER
   */
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // REGEX SEARCH VARIABLE
  searchWithRegex = (collection: any[], term: string, opts: { caseSensitive: boolean, includedKeys: string[] }) => {
    const filterBy = () => {
      const searchTerms = (!opts.caseSensitive) ? new RegExp(term, 'i') : new RegExp(term)
      return (obj) => {
        for (const key of Object.keys(obj)) {
          if (searchTerms.test(obj[key]) &&
            opts.includedKeys.includes(key)) return true
        }
        return false
      }
    }
    return collection.filter(filterBy())
  }

  randomDataArray<T>(data: T[], length: number): T[] {
    const finalArray: T[] = [];
    for (let i = 0; i < length; i++) {
      let randomNumber = this.getRandomInt(0, (data.length - 1));
      finalArray.push(data[randomNumber]);
    }
    return finalArray;
  }


}
