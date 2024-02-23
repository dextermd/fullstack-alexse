import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {NgxPaginationModule} from 'ngx-pagination';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';
import {FERootModule, FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {LocalService} from './shared/local.service';

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
    // translate.setDefaultLang(localService.getJsonValue('lang'));
    // translate.use(localService.getJsonValue('lang'));
  }
}
