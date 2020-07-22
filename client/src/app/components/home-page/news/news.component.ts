import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../../admin/shared/interfaces';
import {Subscription} from 'rxjs';
import {PostsService} from '../../../shared/posts.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  items = 4;

  posts: Post[] = [];
  dSub: Subscription;

  constructor(
    private postService: PostsService,
  ) { }

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
