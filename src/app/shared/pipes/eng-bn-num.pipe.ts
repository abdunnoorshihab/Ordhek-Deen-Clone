import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'engBnNum'
})
export class EngBnNumPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const finalEnToBnNumber = {
      0: '০', 1: '১', 2: '২', 3: '৩', 4: '৪', 5: '৫', 6: '৬', 7: '৭', 8: '৮', 9: '৯'
    };
    let retStr = value?.toString();

    if (retStr) {
      for (const x in finalEnToBnNumber) {
        retStr = retStr.replace(new RegExp(x, 'g'), finalEnToBnNumber[x]);
      }
    }

    return retStr;
  }

}
