import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {NgxPaginationModule} from 'ngx-pagination';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';

@NgModule({
  imports: [
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    QuillModule.forRoot(),
    CKEditorModule,
    FormsModule,
    NgxPaginationModule,
    CrystalLightboxModule,





  ],
  exports: [
    HttpClientModule,
    MDBBootstrapModule,
    QuillModule,
    CKEditorModule,
    FormsModule,
    NgxPaginationModule,
    CrystalLightboxModule,
  ],
})


export class SharedModule {

}
