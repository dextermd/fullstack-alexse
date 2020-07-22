import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Product} from '../../../admin/shared/interfaces';
import {ProductService} from '../../../shared/product.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-index-shop',
  templateUrl: './index-shop.component.html',
  styleUrls: ['./index-shop.component.scss']
})
export class IndexShopComponent implements OnInit, OnDestroy {

  products$: Product[];

  dSub: Subscription;

  constructor(
    private productService: ProductService,
  ) {
  }


  ngOnInit(): void {
    this.dSub = this.productService.getAllProduct().subscribe(products => {
      this.products$ = products;
    });

  }


  ngOnDestroy(): void {
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }
}

