import {Component, HostListener, OnInit} from '@angular/core';
import {ProductService} from '../../shared/product.service';
import {CartService} from '../../shared/cart.service';
import {OrderService} from '../../shared/order.service';
import {LocalService} from '../../shared/local.service';
import {AuthService} from '../../shared/auth.service';
import {TranslateService} from '@ngx-translate/core';
import {LocalizeRouterService} from 'localize-router';
import {ActivatedRoute, Router} from '@angular/router';

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
  test;
  private localizeService: any;

  constructor(
    private auth: AuthService,
    private productService: ProductService,
    private cartService: CartService,
    public order: OrderService,
    private localService: LocalService,
    public translate: TranslateService,
    private router: Router,
    private rout: ActivatedRoute,


) {
    this.cartService.cart$.subscribe((data) => {
      this.card = data;
    });
  }


  ngOnInit(): void {

    if (this.localService.getJsonValue('lang') === null)
    {
      // this.translate.setDefaultLang('ru');
      this.localService.setJsonValue('lang', 'ru');
      // this.translate.use(this.localService.getJsonValue('ru'));
    }

    if (!this.translate.currentLang){
      this.router.navigate([this.localService.getJsonValue('lang')]);
    }
    // // this.lang = this.translate.getBrowserLang();
    // this.lang = this.localService.getJsonValue('lang');
    if (this.translate.currentLang){
      this.translate.setDefaultLang(this.translate.currentLang);
      this.lang = this.translate.currentLang;
    } else {
      this.translate.setDefaultLang(this.lang);
      this.lang = this.localService.getJsonValue('lang');

    }
    this.test = this.translate.currentLang;

    console.log(this.test);
    // this.order.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.order.cartItems = this.localService.getJsonValue('cartItems');
  }

  @HostListener('window:scroll', ['$event']) onScroll($event){
    this.hide = pageYOffset >= 170;
  }


  reLoad(){
    this.router.navigate([this.router.url]);

  }
  changeLang(lang: string) {
    if (this.translate.currentLang !== lang) {
      console.log('lang ' + lang );
      this.translate.use(lang);
    // this.router.navigate([lang]);
      this.lang = lang;
      this.localService.setJsonValue('lang', lang);
      this.translate.currentLang = lang;
      setTimeout(() => window.location.reload(), 10);
    // this.reLoad();
      //  window.location.reload();
    }
  }

}
