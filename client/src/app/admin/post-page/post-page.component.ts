import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post, PostCategory} from '../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';
import {PostsService} from '../../shared/posts.service';
import {PostCategoryService} from '../../shared/postcategory.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit, OnDestroy {
  @Input('categoryId') categoryId: string;

  loading = false;
  posts: Post[] = [];
  categorys: PostCategory[] = [];
  prSub: Subscription;
  dSub: Subscription;
  cSub: Subscription;
  constructor(
    private postcategoryService: PostCategoryService,
    private postService: PostsService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.prSub =  this.postService.getAllPost().subscribe(post => {
      this.posts = post;
      this.loading = false;
    });


    this.cSub =  this.postcategoryService.getAllCategory().subscribe(categorys => {
      this.categorys = categorys;
    });
  }

  deletePost(id: string) {
    this.dSub = this.postService.delete(id).subscribe(() => {
      this.posts = this.posts.filter(post => post._id !== id);
      this.alert.success('Пост был удален');
    });
  }

  ngOnDestroy(): void {
    if (this.prSub) {
      this.prSub.unsubscribe();
    }

    if (this.dSub) {
      this.dSub.unsubscribe();
    }
    if (this.cSub) {
      this.cSub.unsubscribe();
    }
  }
}
