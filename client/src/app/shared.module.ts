import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {NgxPaginationModule} from 'ngx-pagination';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    HttpClientModule,
    NgbModule,
    QuillModule.forRoot(),
    CKEditorModule,
    FormsModule,
    NgxPaginationModule,
    CrystalLightboxModule,
    MDBBootstrapModule.forRoot(),




  ],
  exports: [
    HttpClientModule,
    MDBBootstrapModule,
    QuillModule,
    CKEditorModule,
    FormsModule,
    NgxPaginationModule,
    CrystalLightboxModule,
    NgbModule

  ],
})


export class SharedModule {

}
