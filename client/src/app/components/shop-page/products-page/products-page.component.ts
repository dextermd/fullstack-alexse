import {Component, Input, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  product$: Observable<Product>;
  public items: Product[] = [];
  casaS: CasaOption[] = [];
  pandusS: PandusOption[] = [];
  indicatorS: IndicatorOption[] = [];
  selected = 'Без аккумулятора';
  selectedIndicator = 'MERAV2000';
  selectedPandus = 'Без пандуса';
  price = 0;
  priceId;
  priceCasa = 0;
  pricePandus = 0;
  priceIndicator = 0;
  priceCas;
  priceInd;
  pricePan;

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
  ) {
  }


  ngOnInit() {
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
        }
        ),
        map((products: any) => {
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

  addToOrderCasa(product: Product, casaName?, casaPrice?) {
    this.alert.success(`Добавлено x${product.quantity}`);
    this.orderService.addCasa(product, casaName, casaPrice);
  }

  addToOrderIndAndPand(product: Product, selectedIndicator, priceIndicator, selectedPandus, pricePandus) {
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
