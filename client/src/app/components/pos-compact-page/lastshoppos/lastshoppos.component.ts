import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../../admin/shared/interfaces';
import {Subscription} from 'rxjs';
import {ProductService} from '../../../shared/product.service';


@Component({
  selector: 'app-lastshoppos',
  templateUrl: './lastshoppos.component.html',
  styles: []
})
export class LastshopposComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  dSub: Subscription;

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.dSub = this.productService.getAllProduct().subscribe(products => {
      this.products = products;
    });


  }


  ngOnDestroy(): void {
    if (this.dSub) {
      this.dSub.unsubscribe();
    }

  }

  random() {
    return Math.random();
  }
}
