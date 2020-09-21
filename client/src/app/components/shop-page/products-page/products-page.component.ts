import {Component, Input, NgModule, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CasaOption, IndicatorOption, PandusOption, Product} from '../../../admin/shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';

import {map, switchMap} from 'rxjs/operators';
import {ProductService} from '../../../shared/product.service';

import {AuthService} from '../../../shared/auth.service';
import {CartService} from '../../../shared/cart.service';
import {OrderService} from '../../../shared/order.service';
import {AlertService} from '../../../admin/shared/services/alert.service';
import {CasaService} from '../../../shared/casa.service';
import {PandusService} from '../../../shared/pandus.service';
import {IndicatorService} from '../../../shared/indicator.service';
import {SubcategoryService} from '../../../shared/subcategory.service';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {ProductsComponent} from '../products/products.component';




@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  casaProd = '5f1fd24877bb31183d7fd10e' ;
  platProd = '5f1e882a1c902614531f7ecf';
  platgoProd = '5f1e8ce51c902614531f7ed011';
  platgogoProd = '5f1fd24877bb31183d7fd10e00';
  pandusNoHaveProd = '5f27b107fe44ee3bbbb84496';


  pandusNoHaveDev = '5f27b834431d83214c667f4d';
  casaDev = '5f05c3df6d77ce3e4c59a8b2';
  platDev = '5f133744c804af2228fbbf83';
  platgoDev = '5f1336e1707a9a3bf4490e2c';

  product$: Observable<Product>;
  public items: Product[] = [];
  casaS: CasaOption[] = [];
  pandusS: PandusOption[] = [];
  indicatorS: IndicatorOption[] = [];
  selected = 'Без аккумулятора';
  selectedIndicator = 'MERAV2000';
  selectedPandus = 'Без пандусов';
  price = 0;
  priceId;
  priceCasa = 0;
  pricePandus = 0;
  priceIndicator = 0;
  priceCas;
  priceInd;
  pricePan;
  subcategory;
  subcategoryName;
  subcategoryId;
  productName;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private auth: AuthService,
    private cart: CartService,
    private alert: AlertService,
    public orderService: OrderService,
    private casaService: CasaService,
    private pandusService: PandusService,
    private indicatorService: IndicatorService,
    private subcategoryService: SubcategoryService,
    public  productPage: ProductsComponent,
    config: NgbTabsetConfig
  ) {
    config.type = 'pills';
  }


  ngOnInit() {
    this.subcategoryService.getAllCategory().subscribe( subcategory => {
      this.subcategory = subcategory;
    });

    this.casaService.getAll().subscribe(casa => {
      this.casaS = casa;
    });

    this.pandusService.getAll().subscribe(pandus => {
      this.pandusS = pandus;
    });

    this.indicatorService.getAll().subscribe(indicator => {
      this.indicatorS = indicator;
    });



    this.product$ = this.route.params
      .pipe(switchMap((params: Params) => {
          return this.productService.getByIdProduct(params['id']);
        }),
        map((products: any) => {
          console.log(products);
          this.productName = products.name;
          for (const i in this.subcategory) {
            if (products.subcategory === this.subcategory[i]._id){
              this.subcategoryId = this.subcategory[i]._id;
              this.subcategoryName = this.subcategory[i].name;
            }
          }

          console.log(products.subcategory);
          console.log(this.subcategory);
          products.quantity = 1;
          return products;
        })
      );


    this.productService.getAllProduct().subscribe((data: any[]) => {
      this.items = data;
    });
  }


  addToOrder(product: Product) {
    this.alert.success(`Добавлено x${product.quantity}`);
    this.orderService.add(product);
  }

  addToOrderCasa(product: Product, casaName?, casaPrice?, selectedIndicator?, priceIndicator?) {
    this.alert.success(`Добавлено x${product.quantity}`);
    this.orderService.addCasa(product, casaName, casaPrice, selectedIndicator, priceIndicator);
  }

  addToOrderIndAndPand(product: Product, selectedIndicator, priceIndicator, selectedPandus?, pricePandus?) {
    this.alert.success(`Добавлено x${product.quantity}`);
    this.orderService.addInd(product, selectedIndicator, priceIndicator, selectedPandus, pricePandus );
  }

  onSelectCasa(val) {
    console.log(val);
    this.priceCas = this.casaS.filter(x => x.name === val);
    if (this.priceCas) {
      this.priceCasa = this.priceCas[0].price;
    }
    console.log(this.priceCasa);
  }

  onSelectInd(val) {

    console.log(val);
    this.priceInd = this.indicatorS.filter(x => x.name === val);
    if (this.priceInd) {
      this.priceIndicator = this.priceInd[0].price;
    } else if (val === this.selectedIndicator){
      this.priceIndicator = 0;
    }
    console.log(this.priceIndicator);
  }

  onSelectPand(val) {
    console.log(val);
    this.pricePan = this.pandusS.filter(x => x.name === val);
    if (this.pricePan) {
      this.pricePandus = this.pricePan[0].price;
    }
    console.log(this.pricePandus);

  }


}
