import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../interfaces';

@Pipe({
  name: 'productSortBy',
  pure: false // pipe is recalculated every time data changes on the page

})
export class SortPipe implements PipeTransform{
  transform(value: string[], filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '' || filterString === undefined || filterString === 'All') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }

    return resultArray;

  }

}


