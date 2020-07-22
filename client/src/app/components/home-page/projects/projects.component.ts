import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../../admin/shared/interfaces';
import {PostsService} from '../../../shared/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

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


