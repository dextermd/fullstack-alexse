import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {SubCategory, Product, Category} from '../../../admin/shared/interfaces';
import {ProductService} from '../../../shared/product.service';
import {SubcategoryService} from '../../../shared/subcategory.service';
import {CategoryService} from '../../../shared/category.service';
import {ActivatedRoute, Params} from '@angular/router';
import {LocalService} from '../../../shared/local.service';
import {TranslateService} from '@ngx-translate/core';
import {MainLayoutComponent} from '../../main-layout/main-layout.component';

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  searchStr ;
  colapsee = true;
  page = 1;
  products$: Observable<Product[]>;
  sort = '-date';
  subproductCategory$: Observable<SubCategory[]>;
  productCategory$: Observable<Category[]>;
  subcategoryId: string;
  sortData: Product[] = [];
  dSub: Subscription;
  i = 0;
  colapse = true;
  colapseOne = true;
  screenWidth: any;


  constructor(
    private productService: ProductService,
    private subcategoryService: SubcategoryService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private localService: LocalService,
    public translate: TranslateService,
    public main: MainLayoutComponent,


  ) {
  }



  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.page = this.localService.getJsonValue('productPage');
    this.dSub = this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.products$ = this.productService.getByCatIdProductAll(params.id);
        if (this.screenWidth === 360) { // 768px portrait
          this.colapse = true;
        } else {
          this.colapse = false;
        }

      } else {
        this.products$ = this.productService.getAllProduct();

      }
    });

    this.subproductCategory$ = this.subcategoryService.getAllCategory();
    this.productCategory$ = this.categoryService.getAllCategory();

    this.pageChanged(this.page);

  }

  ngOnDestroy(): void {
    if (this.dSub){
      this.dSub.unsubscribe();
    }
  }




  pageChanged(page: number) {
    this.localService.setJsonValue('productPage', page);
  }

  defaultPage() {
    this.localService.setJsonValue('productPage', 1);
    this.page = 1;
    console.log(this.page);
  }
}
