import {Component, HostListener, OnInit} from '@angular/core';
import {ProductService} from '../../shared/product.service';
import {CartService} from '../../shared/cart.service';
import {OrderService} from '../../shared/order.service';
import {LocalService} from '../../shared/local.service';
import {AuthService} from '../../shared/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  card = [];
  cartItems = 0;
  hide = false;
  lang;

  constructor(
    private auth: AuthService,
    private productService: ProductService,
    private cartService: CartService,
    public order: OrderService,
    private localService: LocalService,
    public translate: TranslateService,


) {
    this.cartService.cart$.subscribe((data) => {
      this.card = data;
    });
  }


  ngOnInit(): void {
    if (this.localService.getJsonValue('lang') === null)
    {
      this.translate.setDefaultLang('ru');
    }
    // this.lang = this.translate.getBrowserLang();
    this.lang = this.localService.getJsonValue('lang');

    // this.order.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.order.cartItems = this.localService.getJsonValue('cartItems');
  }

  @HostListener('window:scroll', ['$event']) onScroll($event){
    this.hide = pageYOffset >= 170;
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.lang = lang;
    this.localService.setJsonValue('lang', lang);
    window.location.reload();
  }

}
