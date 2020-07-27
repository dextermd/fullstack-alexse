import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {SubCategory, Product, Category} from '../../../admin/shared/interfaces';
import {ProductService} from '../../../shared/product.service';
import {SubcategoryService} from '../../../shared/subcategory.service';
import {CategoryService} from '../../../shared/category.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  searchStr ;
  page = 1;
  products$: Observable<Product[]>;
  subproductCategory$: Observable<SubCategory[]>;
  productCategory$: Observable<Category[]>;
  subcategoryId: string;

  dSub: Subscription;
  i = 0;

  constructor(
    private productService: ProductService,
    private subcategoryService: SubcategoryService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
  ) {
  }



  ngOnInit(): void {

    this.dSub = this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.products$ = this.productService.getByCatIdProductAll(params['id']);
      } else {
        this.products$ = this.productService.getAllProduct();

      }
    });

    this.subproductCategory$ = this.subcategoryService.getAllCategory();
    this.productCategory$ = this.categoryService.getAllCategory();

  }

  ngOnDestroy(): void {
    if (this.dSub){
      this.dSub.unsubscribe();
    }
  }


}
