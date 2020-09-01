import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ProgrammesPageComponent} from './components/programmes-page/programmes-page.component';
import {AlexMarketPageComponent} from './components/alex-market-page/alex-market-page.component';
import {FlagmanPageComponent} from './components/flagman-page/flagman-page.component';
import {B52PageComponent} from './components/b52-page/b52-page.component';
import {PosCompactPageComponent} from './components/pos-compact-page/pos-compact-page.component';
import {PosAlimentaraPageComponent} from './components/pos-alimentara-page/pos-alimentara-page.component';
import {PosMarketPageComponent} from './components/pos-market-page/pos-market-page.component';
import {PosHorecaonePageComponent} from './components/pos-horecaone-page/pos-horecaone-page.component';
import {PosHorecatwoPageComponent} from './components/pos-horecatwo-page/pos-horecatwo-page.component';
import {SupportServicePageComponent} from './components/support-service-page/support-service-page.component';
import {ContactsPageComponent} from './components/contacts-page/contacts-page.component';
import {AboutPageComponent} from './components/about-page/about-page.component';
import {AutoRestourantPageComponent} from './components/auto-restourant-page/auto-restourant-page.component';
import {AutoFitnesPageComponent} from './components/auto-fitnes-page/auto-fitnes-page.component';
import {AutoHotelPageComponent} from './components/auto-hotel-page/auto-hotel-page.component';
import {AutoBilliardPageComponent} from './components/auto-billiard-page/auto-billiard-page.component';
import {NewsPageComponent} from './components/news-page/news-page.component';
import {PostPageComponent} from './components/news-page/post-page/post-page.component';
import {ShopPageComponent} from './components/shop-page/shop-page.component';
import {ProductsPageComponent} from './components/shop-page/products-page/products-page.component';
import {CartPageComponent} from './components/cart-page/cart-page.component';
import {CheckoutPageComponent} from './components/checkout-page/checkout-page.component';
import {ThankyouPageComponent} from './components/thankyou-page/thankyou-page.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {LoginComponent} from './user/login/login.component';
import {AuthGuard} from './classes/auth.guard';
import {IndustrialComponent} from './components/industrial/industrial.component';
import {StaticAutoPageComponent} from './components/industrial/category-page/static-auto-page/static-auto-page.component';




const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'programs', component: ProgrammesPageComponent},
      {path: 'alex-market', component: AlexMarketPageComponent},
      {path: 'flagman', component: FlagmanPageComponent},
      {path: 'b52', component: B52PageComponent},
      {path: 'pos-compact', component: PosCompactPageComponent},
      {path: 'pos-alimentara', component: PosAlimentaraPageComponent},
      {path: 'pos-market', component: PosMarketPageComponent},
      {path: 'pos-horeca-1', component: PosHorecaonePageComponent},
      {path: 'pos-horeca-2', component: PosHorecatwoPageComponent},
      {path: 'support-service', component: SupportServicePageComponent},
      {path: 'contacts', component: ContactsPageComponent},
      {path: 'about', component: AboutPageComponent},
      {path: 'auto-restourant', component: AutoRestourantPageComponent},
      {path: 'auto-fitnes', component: AutoFitnesPageComponent},
      {path: 'auto-hotel', component: AutoHotelPageComponent},
      {path: 'auto-billiard', component: AutoBilliardPageComponent},
      {path: 'news', component: NewsPageComponent},
      {path: 'news/post/:id', component: PostPageComponent},
      {path: 'products', component: ShopPageComponent},
      {path: 'products/subcategory/:id', component: ShopPageComponent},
      {path: 'products/subcategory/:id/item/:id', component: ProductsPageComponent},
      {path: 'products/item/:id', component: ProductsPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'price-list', component: CheckoutPageComponent},
      {path: 'certifications', component: ThankyouPageComponent},
      {path: 'industrial', component: IndustrialComponent},
      {path: 'static-auto', component: StaticAutoPageComponent},
      {path: 'account/signup', component: SignUpComponent, canActivate: [AuthGuard]},
      // {path: 'account/profile', component: ProfileComponent, canActivate: [AuthGuard] },
      {path: 'account/login', component: LoginComponent},

    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
},
  { path: '**', redirectTo: '/', pathMatch: 'full' },

    ];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    enableTracing: false,
    scrollPositionRestoration: 'top',
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
