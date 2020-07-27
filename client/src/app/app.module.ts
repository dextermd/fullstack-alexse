import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/home-page/carousel/carousel.component';
import { InfoShortComponent } from './components/home-page/info-short/info-short.component';
import { WhyComponent } from './components/home-page/why/why.component';
import { QualitiesComponent } from './components/home-page/qualities/qualities.component';
import { IndexShopComponent } from './components/home-page/index-shop/index-shop.component';
import { PartnersComponent } from './components/home-page/partners/partners.component';
import { ProjectsComponent } from './components/home-page/projects/projects.component';
import { CertificateComponent } from './components/home-page/certificate/certificate.component';
import { QuestionsComponent } from './components/home-page/questions/questions.component';
import { NewsComponent } from './components/home-page/news/news.component';
import { VideoComponent } from './components/home-page/video/video.component';
import { MapsComponent } from './components/home-page/maps/maps.component';
import { ProgrammesPageComponent } from './components/programmes-page/programmes-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TopComponent } from './components/programmes-page/top/top.component';
import { ProgramListComponent } from './components/programmes-page/program-list/program-list.component';
import { InfoComponent } from './components/programmes-page/info/info.component';
import { InfoListComponent } from './components/programmes-page/info-list/info-list.component';
import { StyleDirective } from './directives/style.directive';
import {QuestComponent} from './components/programmes-page/quest/quest.component';
import { AlexMarketPageComponent } from './components/alex-market-page/alex-market-page.component';
import { HeaderComponent } from './components/alex-market-page/header/header.component';
import { SolutionsforComponent } from './components/alex-market-page/solutionsfor/solutionsfor.component';
import { AdvantageComponent } from './components/alex-market-page/advantage/advantage.component';
import { DivertComponent } from './components/alex-market-page/divert/divert.component';
import { FeaturesComponent } from './components/alex-market-page/features/features.component';
import { ComplectComponent } from './components/alex-market-page/complect/complect.component';
import { FlagmanPageComponent } from './components/flagman-page/flagman-page.component';
import { HeaderflagComponent } from './components/flagman-page/headerflag/headerflag.component';
import { SecondflagComponent } from './components/flagman-page/secondflag/secondflag.component';
import { TreeflagComponent } from './components/flagman-page/treeflag/treeflag.component';
import { FourflagComponent } from './components/flagman-page/fourflag/fourflag.component';
import { DivflagComponent } from './components/flagman-page/divflag/divflag.component';
import { SixflagComponent } from './components/flagman-page/sixflag/sixflag.component';
import { SevenflagComponent } from './components/flagman-page/sevenflag/sevenflag.component';
import { FlagComponent } from './components/flagman-page/flag/flag.component';
import { DivtechComponent } from './components/flagman-page/divtech/divtech.component';
import { ComplectflagComponent } from './components/flagman-page/complectflag/complectflag.component';
import { B52PageComponent } from './components/b52-page/b52-page.component';
import { Headerb52Component } from './components/b52-page/headerb52/headerb52.component';
import { First52Component } from './components/b52-page/first52/first52.component';
import { Second52Component } from './components/b52-page/second52/second52.component';
import { Div52Component } from './components/b52-page/div52/div52.component';
import { More52Component } from './components/b52-page/more52/more52.component';
import { PosCompactPageComponent } from './components/pos-compact-page/pos-compact-page.component';
import { HeaderposComponent } from './components/pos-compact-page/headerpos/headerpos.component';
import { FullposComponent } from './components/pos-compact-page/fullpos/fullpos.component';
import { ThreeposComponent } from './components/pos-compact-page/threepos/threepos.component';
import { FourposComponent } from './components/pos-compact-page/fourpos/fourpos.component';
import { FiveposComponent } from './components/pos-compact-page/fivepos/fivepos.component';
import { SixposComponent } from './components/pos-compact-page/sixpos/sixpos.component';
import { SevenposComponent } from './components/pos-compact-page/sevenpos/sevenpos.component';
import { EightposComponent } from './components/pos-compact-page/eightpos/eightpos.component';
import { MoreposComponent } from './components/pos-compact-page/morepos/morepos.component';
import { LastshopposComponent } from './components/pos-compact-page/lastshoppos/lastshoppos.component';
import { PosAlimentaraPageComponent } from './components/pos-alimentara-page/pos-alimentara-page.component';
import { HeaderaliComponent } from './components/pos-alimentara-page/headerali/headerali.component';
import { FullaliComponent } from './components/pos-alimentara-page/fullali/fullali.component';
import { FourealiComponent } from './components/pos-alimentara-page/foureali/foureali.component';
import { FiveealiComponent } from './components/pos-alimentara-page/fiveeali/fiveeali.component';
import { SixaliComponent } from './components/pos-alimentara-page/sixali/sixali.component';
import { SevenaliComponent } from './components/pos-alimentara-page/sevenali/sevenali.component';
import { EightaliComponent } from './components/pos-alimentara-page/eightali/eightali.component';
import { ScanaliComponent } from './components/pos-alimentara-page/scanali/scanali.component';
import { PosMarketPageComponent } from './components/pos-market-page/pos-market-page.component';
import { HeadermarkComponent } from './components/pos-market-page/headermark/headermark.component';
import { FullmarkComponent } from './components/pos-market-page/fullmark/fullmark.component';
import { FouremarkComponent } from './components/pos-market-page/fouremark/fouremark.component';
import { FivemarkComponent } from './components/pos-market-page/fivemark/fivemark.component';
import { SixmarkComponent } from './components/pos-market-page/sixmark/sixmark.component';
import { ScanmarkComponent } from './components/pos-market-page/scanmark/scanmark.component';
import { SevenmarkComponent } from './components/pos-market-page/sevenmark/sevenmark.component';
import { EightmarkComponent } from './components/pos-market-page/eightmark/eightmark.component';
import { PosHorecaonePageComponent } from './components/pos-horecaone-page/pos-horecaone-page.component';
import { HeaderhoneComponent } from './components/pos-horecaone-page/headerhone/headerhone.component';
import { FullhoneComponent } from './components/pos-horecaone-page/fullhone/fullhone.component';
import { FourehoneComponent } from './components/pos-horecaone-page/fourehone/fourehone.component';
import { FivehoneComponent } from './components/pos-horecaone-page/fivehone/fivehone.component';
import { SixhoneComponent } from './components/pos-horecaone-page/sixhone/sixhone.component';
import { SevenhoneComponent } from './components/pos-horecaone-page/sevenhone/sevenhone.component';
import { EighthoneComponent } from './components/pos-horecaone-page/eighthone/eighthone.component';
import { PosHorecatwoPageComponent } from './components/pos-horecatwo-page/pos-horecatwo-page.component';
import { HeaderhtwoComponent } from './components/pos-horecatwo-page/headerhtwo/headerhtwo.component';
import { FullhtwoComponent } from './components/pos-horecatwo-page/fullhtwo/fullhtwo.component';
import { FourehtwoComponent } from './components/pos-horecatwo-page/fourehtwo/fourehtwo.component';
import { FivehtwoComponent } from './components/pos-horecatwo-page/fivehtwo/fivehtwo.component';
import { SupportServicePageComponent } from './components/support-service-page/support-service-page.component';
import { SupportHeaderComponent } from './components/support-service-page/support-header/support-header.component';
import { TwosupComponent } from './components/support-service-page/twosup/twosup.component';
import { DivsupComponent } from './components/support-service-page/divsup/divsup.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HeaderabComponent } from './components/about-page/headerab/headerab.component';
import { TextrabComponent } from './components/about-page/textrab/textrab.component';
import { DivabComponent } from './components/about-page/divab/divab.component';
import { MoreabComponent } from './components/about-page/moreab/moreab.component';
import { DivtwoabComponent } from './components/about-page/divtwoab/divtwoab.component';
import { FinalabComponent } from './components/about-page/finalab/finalab.component';
import { AutoRestourantPageComponent } from './components/auto-restourant-page/auto-restourant-page.component';
import { HeaderautoresComponent } from './components/auto-restourant-page/headerautores/headerautores.component';
import { FirstresComponent } from './components/auto-restourant-page/firstres/firstres.component';
import { SecondresComponent } from './components/auto-restourant-page/secondres/secondres.component';
import { ThreeresComponent } from './components/auto-restourant-page/threeres/threeres.component';
import { FourresComponent } from './components/auto-restourant-page/fourres/fourres.component';
import { FiveresComponent } from './components/auto-restourant-page/fiveres/fiveres.component';
import { DivautoresComponent } from './components/auto-restourant-page/divautores/divautores.component';
import { SixresComponent } from './components/auto-restourant-page/sixres/sixres.component';
import { AutoFitnesPageComponent } from './components/auto-fitnes-page/auto-fitnes-page.component';
import { HeaderautofitComponent } from './components/auto-fitnes-page/headerautofit/headerautofit.component';
import { FirstfitComponent } from './components/auto-fitnes-page/firstfit/firstfit.component';
import { DivfitComponent } from './components/auto-fitnes-page/divfit/divfit.component';
import { SecondfitComponent } from './components/auto-fitnes-page/secondfit/secondfit.component';
import { ThreefitComponent } from './components/auto-fitnes-page/threefit/threefit.component';
import { AutoHotelPageComponent } from './components/auto-hotel-page/auto-hotel-page.component';
import { HeaderhotelComponent } from './components/auto-hotel-page/headerhotel/headerhotel.component';
import { FirsthotelComponent } from './components/auto-hotel-page/firsthotel/firsthotel.component';
import { DivhotelComponent } from './components/auto-hotel-page/divhotel/divhotel.component';
import { SecondhotelComponent } from './components/auto-hotel-page/secondhotel/secondhotel.component';
import { ThreehotelComponent } from './components/auto-hotel-page/threehotel/threehotel.component';
import { FourhotelComponent } from './components/auto-hotel-page/fourhotel/fourhotel.component';
import { FivehotelComponent } from './components/auto-hotel-page/fivehotel/fivehotel.component';
import { AutoBilliardPageComponent } from './components/auto-billiard-page/auto-billiard-page.component';
import { HeaderbilliardComponent } from './components/auto-billiard-page/headerbilliard/headerbilliard.component';
import { FirstbilliardComponent } from './components/auto-billiard-page/firstbilliard/firstbilliard.component';
import { DivbilliardComponent } from './components/auto-billiard-page/divbilliard/divbilliard.component';
import { SecondbilliardComponent } from './components/auto-billiard-page/secondbilliard/secondbilliard.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { PostComponent } from './components/news-page/post/post.component';
import { PostPageComponent } from './components/news-page/post-page/post-page.component';
import {SharedModule} from './shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {registerLocaleData} from '@angular/common';
import ruLocale from '@angular/common/locales/ru';
import roLocale from '@angular/common/locales/ro';
import {FilterPipe} from './admin/shared/pipes/filter.pipe';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ProductsComponent } from './components/shop-page/products/products.component';
import { ProductsPageComponent } from './components/shop-page/products-page/products-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ThankyouPageComponent } from './components/thankyou-page/thankyou-page.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TokenInterceptor} from './classes/token.interceptor';
import { AlertingComponent } from './components/alerting/alerting.component';
import { LoaderComponent } from './components/loader/loader.component';
import {SearchProductPipe} from './admin/shared/pipes/searchProduct.pipe';

registerLocaleData( ruLocale, 'ru');
registerLocaleData(roLocale, 'ro');



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CarouselComponent,
    InfoShortComponent,
    WhyComponent,
    QualitiesComponent,
    IndexShopComponent,
    PartnersComponent,
    ProjectsComponent,
    CertificateComponent,
    QuestionsComponent,
    NewsComponent,
    VideoComponent,
    MapsComponent,
    ProgrammesPageComponent,
    HomePageComponent,
    TopComponent,
    ProgramListComponent,
    InfoComponent,
    InfoListComponent,
    StyleDirective,
    QuestComponent,
    AlexMarketPageComponent,
    HeaderComponent,
    SolutionsforComponent,
    AdvantageComponent,
    DivertComponent,
    FeaturesComponent,
    ComplectComponent,
    FlagmanPageComponent,
    HeaderflagComponent,
    SecondflagComponent,
    TreeflagComponent,
    FourflagComponent,
    DivflagComponent,
    SixflagComponent,
    SevenflagComponent,
    FlagComponent,
    DivtechComponent,
    ComplectflagComponent,
    B52PageComponent,
    Headerb52Component,
    First52Component,
    Second52Component,
    Div52Component,
    More52Component,
    PosCompactPageComponent,
    HeaderposComponent,
    FullposComponent,
    ThreeposComponent,
    FourposComponent,
    FiveposComponent,
    SixposComponent,
    SevenposComponent,
    EightposComponent,
    MoreposComponent,
    LastshopposComponent,
    PosAlimentaraPageComponent,
    HeaderaliComponent,
    FullaliComponent,
    FourealiComponent,
    FiveealiComponent,
    SixaliComponent,
    SevenaliComponent,
    EightaliComponent,
    ScanaliComponent,
    PosMarketPageComponent,
    HeadermarkComponent,
    FullmarkComponent,
    FouremarkComponent,
    FivemarkComponent,
    SixmarkComponent,
    ScanmarkComponent,
    SevenmarkComponent,
    EightmarkComponent,
    PosHorecaonePageComponent,
    HeaderhoneComponent,
    FullhoneComponent,
    FourehoneComponent,
    FivehoneComponent,
    SixhoneComponent,
    SevenhoneComponent,
    EighthoneComponent,
    PosHorecatwoPageComponent,
    HeaderhtwoComponent,
    FullhtwoComponent,
    FourehtwoComponent,
    FivehtwoComponent,
    SupportServicePageComponent,
    SupportHeaderComponent,
    TwosupComponent,
    DivsupComponent,
    ContactsPageComponent,
    AboutPageComponent,
    HeaderabComponent,
    TextrabComponent,
    DivabComponent,
    MoreabComponent,
    DivtwoabComponent,
    FinalabComponent,
    AutoRestourantPageComponent,
    HeaderautoresComponent,
    FirstresComponent,
    SecondresComponent,
    ThreeresComponent,
    FourresComponent,
    FiveresComponent,
    DivautoresComponent,
    SixresComponent,
    AutoFitnesPageComponent,
    HeaderautofitComponent,
    FirstfitComponent,
    DivfitComponent,
    SecondfitComponent,
    ThreefitComponent,
    AutoHotelPageComponent,
    HeaderhotelComponent,
    FirsthotelComponent,
    DivhotelComponent,
    SecondhotelComponent,
    ThreehotelComponent,
    FourhotelComponent,
    FivehotelComponent,
    AutoBilliardPageComponent,
    HeaderbilliardComponent,
    FirstbilliardComponent,
    DivbilliardComponent,
    SecondbilliardComponent,
    NewsPageComponent,
    PostComponent,
    PostPageComponent,
    FilterPipe,
    ShopPageComponent,
    ProductsComponent,
    ProductsPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ThankyouPageComponent,
    LoginComponent,
    ProfileComponent,
    SignUpComponent,
    AlertingComponent,
    LoaderComponent,
    SearchProductPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  // providers: [INTERCEPTOR_PROVIDER],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  exports: [
    LoaderComponent,
    AlertingComponent,
    DivbilliardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
