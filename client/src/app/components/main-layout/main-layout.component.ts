import {Component, HostListener, OnInit} from '@angular/core';
import {ProductService} from '../../shared/product.service';
import {CartService} from '../../shared/cart.service';
import {OrderService} from '../../shared/order.service';
import {LocalService} from '../../shared/local.service';
import {AuthService} from '../../shared/auth.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  card = [];
  cartItems = 0;
  hide = false;
  scroll = false;
  lang;
  test;
  currentLang = this.localService.getJsonValue('lang');

  constructor(
    private auth: AuthService,
    private productService: ProductService,
    private cartService: CartService,
    public order: OrderService,
    private localService: LocalService,
    public translate: TranslateService,
    private router: Router,


) {
    this.cartService.cart$.subscribe((data) => {
      this.card = data;
    });

    if (this.translate.currentLang) {
      this.currentLang = this.translate.currentLang;
      this.test = this.translate.currentLang;
      console.log('Start Main loyaout ' + this.test);
      this.localService.setJsonValue('lang', this.translate.currentLang);
    } else {
      this.translate.setDefaultLang(this.localService.getJsonValue('lang'));
      this.translate.use(this.localService.getJsonValue('lang'));
    }

  }


  ngOnInit(): void {
    this.scroll = pageYOffset <= 1;
    this.test = this.localService.getJsonValue('lang');
    console.log(this.test);

    if (this.localService.getJsonValue('lang') === null)
    {
      // this.translate.setDefaultLang('ru');
      this.localService.setJsonValue('lang', 'ru');
      // this.translate.use(this.localService.getJsonValue('ru'));
    }

    if (!this.translate.currentLang){
      this.translate.setDefaultLang(this.localService.getJsonValue('lang'));
      this.translate.use(this.localService.getJsonValue('lang'));

      // this.router.navigate([this.localService.getJsonValue('lang')]);

    }
    // // this.lang = this.translate.getBrowserLang();
    // this.lang = this.localService.getJsonValue('lang');
    if (this.translate.currentLang){
      this.test = this.translate.currentLang;

      console.log(this.test);

      this.localService.setJsonValue('lang', this.translate.currentLang );

      console.log(this.localService.getJsonValue('lang'));

      this.translate.setDefaultLang(this.translate.currentLang);
      this.lang = this.translate.currentLang;
    } else {
      this.translate.setDefaultLang(this.lang);
      this.lang = this.localService.getJsonValue('lang');

    }

    // this.order.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.order.cartItems = this.localService.getJsonValue('cartItems');
  }

  @HostListener('window:scroll', ['$event']) onScroll($event){
    this.hide = pageYOffset >= 170;
    this.scroll = pageYOffset <= 170;
  }


  reLoad(){
    this.router.navigate([this.router.url]);

  }
  changeLang(lang: string) {
    if (this.translate.currentLang !== lang) {
      console.log('lang ' + lang );
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      this.lang = lang;
      this.localService.setJsonValue('lang', lang);
      this.translate.currentLang = lang;
      this.reLoad();
      setTimeout(() => window.location.reload(), 10);
    }
  }

}
