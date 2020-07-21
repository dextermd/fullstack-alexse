import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../shared/posts.service';
import {Post, Product} from '../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';
import {ProductService} from '../../shared/product.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

export class DashboardPageComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  productss: Product[] = [];
  pSub: Subscription;
  prSub: Subscription;
  prdSub: Subscription;
  dSub: Subscription;
  searchStr = '';


  constructor(
    private postsService: PostsService,
    private alert: AlertService,
    private productsService: ProductService
    ) { }

  ngOnInit() {
    // this.pSub = this.postsService.getAll().subscribe( posts => {
    //   this.posts = posts;
    // });
    //
    // this.prdSub = this.productsService.getAll().subscribe( products => {
    //   this.productss = products;
    // });
  }



  // premove(id: string) {
  //   this.dSub = this.productsService.remove(id).subscribe( () => {
  //     this.productss = this.productss.filter(product => product.id !== id);
  //     this.alert.success('Пост был удален');
  //   });
  // }

  ngOnDestroy(): void {
    if (this.pSub && this.prSub) {
      this.pSub.unsubscribe();
      this.prSub.unsubscribe();
    }

    if (this.dSub && this.prdSub) {
      this.dSub.unsubscribe();
      this.prdSub.unsubscribe();
    }
  }



}
