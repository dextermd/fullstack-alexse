import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../../../shared/posts.service';
import {Observable} from 'rxjs';
import {Post} from '../../../admin/shared/interfaces';
import {switchMap} from 'rxjs/operators';
import {MainLayoutComponent} from '../../main-layout/main-layout.component';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    public main: MainLayoutComponent
  ) {
  }

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postService.getByIdPost(params.id);
      }));
  }

}
