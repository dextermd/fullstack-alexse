import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../interfaces';

@Pipe({
  name: 'filterActiveProduct',
  pure: false // pipe is recalculated every time data changes on the page

})
export class FilterActiveProductPipe implements PipeTransform {
  transform(product: Product[]): Product[] {
    return product.filter(prod => {
      return prod.active.valueOf() === true;
    });


  }

}
