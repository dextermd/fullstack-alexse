import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../shared/product.service';
import {SubCategory, Product, CasaOption} from '../shared/interfaces';
import {AlertService} from '../shared/services/alert.service';
import {Subscription} from 'rxjs';
import {SubcategoryService} from '../../shared/subcategory.service';
import {CasaService} from '../../shared/casa.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('categoryId') categoryId: string;

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
    private alert: AlertService,
    private casaService: CasaService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.prSub =  this.productService.getAllProduct().subscribe(products => {
      this.products = products;
      this.loading = false;
    });

    this.casaService.getAll().subscribe( casa => {
      this.casaS = casa;
    });

    this.cSub =  this.categoryService.getAllCategory().subscribe(categorys => {
      this.categorys = categorys;
    });
  }

  deleteProduct(id: string) {
    this.dSub = this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter(product => product._id !== id);
      this.alert.success('Пост был удален');
    });
  }

  ngOnDestroy(): void {
    if (this.prSub) {
      this.prSub.unsubscribe();
    }

    if (this.dSub) {
      this.dSub.unsubscribe();
    }
    if (this.cSub) {
      this.cSub.unsubscribe();
    }
  }
}


