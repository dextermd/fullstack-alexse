import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared.module';
import {SearchPipe} from './shared/pipes/search.pipe';
import {AlertComponent} from './shared/components/alert/alert.component';
import {AlertService} from './shared/services/alert.service';
import {CreateProductComponent} from './create-product/create-product.component';
import {AuthGuard} from '../classes/auth.guard';
import {SubCategoryPageComponent} from './subcategory-page/sub-category-page.component';
import {CreateSubCategoryPageComponent} from './create-subcategory-page/create-sub-category-page.component';
import {LoaderComponent} from './loader/loader.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {CreateCategoryPageComponent} from './create-category-page/create-category-page.component';
import {CategoryPageComponent} from './category-page/category-page.component';
import {HistoryOrdersPageComponent} from './history-orders-page/history-orders-page.component';
import {HistoryFilterComponent} from './history-orders-page/history-filter/history-filter.component';
import {PostCategoryComponent} from './post-category/post-category.component';
import {CreatePostCategoryComponent} from './create-post-category/create-post-category.component';
import {PostPageComponent} from './post-page/post-page.component';
import {CreatePostPageComponent} from './create-post-page/create-post-page.component';
import { IndicatorPageComponent } from './options-page/indicator-page/indicator-page.component';
import { IndicatorCreatePageComponent } from './options-page/indicator-create-page/indicator-create-page.component';
import { PandusCreatePageComponent } from './options-page/pandus-create-page/pandus-create-page.component';
import { PandusPageComponent } from './options-page/pandus-page/pandus-page.component';
import { CasaPageComponent } from './options-page/casa-page/casa-page.component';
import { CasaCreatePageComponent } from './options-page/casa-create-page/casa-create-page.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';

// Import all Froala Editor plugins.
import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
import 'froala-editor/js/plugins/align.min.js';

// Import a Froala Editor language file.
import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
import 'froala-editor/js/third_party/image_tui.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/embedly.min';
import {NgArrayPipesModule, NgPipesModule} from 'ngx-pipes';


// @ts-ignore
@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardPageComponent,
    SearchPipe,
    AlertComponent,
    CreateProductComponent,
    SubCategoryPageComponent,
    CreateSubCategoryPageComponent,
    LoaderComponent,
    ProductPageComponent,
    CreateCategoryPageComponent,
    CategoryPageComponent,
    HistoryOrdersPageComponent,
    HistoryFilterComponent,
    PostCategoryComponent,
    CreatePostCategoryComponent,
    PostPageComponent,
    CreatePostPageComponent,
    IndicatorPageComponent,
    IndicatorCreatePageComponent,
    PandusCreatePageComponent,
    PandusPageComponent,
    CasaPageComponent,
    CasaCreatePageComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, canActivate: [AuthGuard], children: [
          {path: 'dashboard', component: DashboardPageComponent},

          {path: 'indicator-page', component: IndicatorPageComponent},
          {path: 'indicator-create-page', component: IndicatorCreatePageComponent},
          {path: 'indicator-create-page/:id', component: IndicatorCreatePageComponent},

          {path: 'casa-page', component: CasaPageComponent},
          {path: 'casa-create-page', component: CasaCreatePageComponent},
          {path: 'casa-create-page/:id', component: CasaCreatePageComponent},

          {path: 'pandus-page', component: PandusPageComponent},
          {path: 'pandus-create-page', component: PandusCreatePageComponent},
          {path: 'pandus-create-page/:id', component: PandusCreatePageComponent},

          {path: 'post-category', component: PostCategoryComponent},
          {path: 'create-post-category', component: CreatePostCategoryComponent},
          {path: 'create-post-category/:id', component: CreatePostCategoryComponent},

          {path: 'post', component: PostPageComponent},
          {path: 'create-post', component: CreatePostPageComponent},
          {path: 'create-post/:id', component: CreatePostPageComponent},

          {path: 'product', component: ProductPageComponent},
          {path: 'create-product', component: CreateProductComponent},
          {path: 'create-product/:id', component: CreateProductComponent},


          {path: 'category', component: CategoryPageComponent},
          {path: 'create-category', component: CreateCategoryPageComponent},
          {path: 'create-category/:id', component: CreateCategoryPageComponent},

          {path: 'subcategory', component: SubCategoryPageComponent},
          {path: 'create-subcategory', component: CreateSubCategoryPageComponent},
          {path: 'create-subcategory/:id', component: CreateSubCategoryPageComponent},

          {path: 'history-orders', component: HistoryOrdersPageComponent},

        ]
      }

    ]),
    NgPipesModule,
    NgArrayPipesModule,

  ],
  exports: [
    RouterModule,
    AlertComponent,

  ],
  providers: [
    AuthGuard,
    AlertService,
  ],

  bootstrap: []

})

export class AdminModule {

}
