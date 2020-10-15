import {Component, OnDestroy, OnInit} from '@angular/core';
import {CasaOption, Product, SubCategory} from '../../admin/shared/interfaces';
import {Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {SubcategoryService} from '../../shared/subcategory.service';
import {ProductService} from '../../shared/product.service';
import {MainLayoutComponent} from '../main-layout/main-layout.component';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit, OnDestroy {

  searchStr ;
  loading = false;
  products: Product[] = [];
  categorys: SubCategory[] = [];
  casaS: CasaOption[] = [];
  prSub: Subscription;
  dSub: Subscription;
  cSub: Subscription;
  form: FormGroup;
  constructor(
    private categoryService: SubcategoryService,
    private productService: ProductService,
    public main: MainLayoutComponent
  ) { }

  ngOnInit(): void {
    this.prSub =  this.productService.getAllProduct().subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy(): void {
    if (this.prSub) {
      this.prSub.unsubscribe();
    }
  }

  onPrint() {
    window.print();
  }
}
