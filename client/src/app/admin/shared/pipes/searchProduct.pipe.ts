import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../interfaces';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform{
  transform(products: Product[], search = ''): Product[] {
    if (!search.trim()) {
      return products;
    }

    return products.filter( product => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });

  }

}
