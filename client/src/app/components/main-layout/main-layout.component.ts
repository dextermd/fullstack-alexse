import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ProductService} from '../../shared/product.service';
import {CartService} from '../../shared/cart.service';
import {OrderService} from '../../shared/order.service';
import {LocalService} from '../../shared/local.service';
import {AuthService} from '../../shared/auth.service';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  title = 'AL';
  card = [];
  cartItems = 0;
  hide = false;
  lang;

  constructor(
    private auth: AuthService,
    private titleService: Title,

    private productService: ProductService,
    private cartService: CartService,
    public order: OrderService,
    private localService: LocalService,

    public translate: TranslateService

) {
    this.cartService.cart$.subscribe((data) => {
      this.card = data;
    });
  }


  ngOnInit(): void {
    this.lang = this.translate.currentLang;
    console.log(this.lang);
    this.titleService.setTitle(this.title);

    // this.order.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.order.cartItems = this.localService.getJsonValue('cartItems');
  }

  @HostListener('window:scroll', ['$event']) onScroll($event){
    this.hide = pageYOffset >= 170;
  }
}
