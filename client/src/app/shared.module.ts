import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {NgxPaginationModule} from 'ngx-pagination';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FERootModule, FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {LocalService} from './shared/local.service';
import {LocalizeRouterModule, LocalizeRouterSettings} from 'localize-router';
import {routes} from './app-routing.module';
import {LocalizeRouterHttpLoader} from 'localize-router-http-loader';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';






// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
//
// }



@NgModule({
  imports: [
    HttpClientModule,
    NgbModule,
    QuillModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    CKEditorModule,
    FormsModule,
    NgxPaginationModule,
    CrystalLightboxModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FERootModule,



    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   },
    // }),

  ],

  exports: [
    HttpClientModule,
    MDBBootstrapModule,
    QuillModule,
    CKEditorModule,
    FormsModule,
    NgxPaginationModule,
    CrystalLightboxModule,
    NgbModule,

  ],
})


export class SharedModule {
  constructor(translate: TranslateService, localService: LocalService) {
    translate.setDefaultLang(localService.getJsonValue('lang'));
    translate.use(localService.getJsonValue('lang'));
  }
}
