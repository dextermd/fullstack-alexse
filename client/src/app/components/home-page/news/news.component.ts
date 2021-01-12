import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../../admin/shared/interfaces';
import {Subscription} from 'rxjs';
import {PostsService} from '../../../shared/posts.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {MainLayoutComponent} from "../../main-layout/main-layout.component";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],

})
export class NewsComponent implements OnInit, OnDestroy {
  items = 4;
  posts: Post[] = [];
  dSub: Subscription;

  constructor(
    private postService: PostsService,
    public main: MainLayoutComponent,
    config: NgbCarouselConfig
  ) {
    config.interval = 10000;
    config.showNavigationIndicators = false;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
  }
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  ngOnInit(): void {

    this.dSub =  this.postService.getAllPost().subscribe(post => {
      this.posts = post;
    });

  }

  ngOnDestroy(): void {
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }




}
