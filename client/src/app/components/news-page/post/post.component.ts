import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../../shared/posts.service';
import {Post, PostCategory} from '../../../admin/shared/interfaces';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {PostCategoryService} from '../../../shared/postcategory.service';
import {MainLayoutComponent} from '../../main-layout/main-layout.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostsService]
})

export class PostComponent implements OnInit {
  page = 1;
  posts$: Observable<Post[]>;
  category$: Observable<PostCategory[]>;

  pos: Post[];
  i = 0;
  selected = 'Все';
  selectedData;


  constructor(
    private postService: PostsService,
    private categoryService: PostCategoryService,
    private route: ActivatedRoute,
    public main: MainLayoutComponent
  ) {
  }


  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        console.log(params);
        this.posts$ = this.postService.getByCatIdPostAll(params['id']);
      } else {
        this.posts$ = this.postService.getAllPost();
      }
    });

    this.postService.getAllPost().subscribe((data: any[]) => {
      this.pos = data;
      this.selectedData = this.pos;

    });

    this.category$ = this.categoryService.getAllCategory();

  }


  onSelect(val) {
    console.log(val);
    if (val === 'Все') {
      return this.selectedData = this.pos;
    } else {
      this.selectedData = this.pos.filter( x => x.category === val);
      console.log(this.selectedData);
    }
  }


}


// import {Component, Input, OnInit} from '@angular/core';
// import {PostsService} from '../../../shared/posts.service';
// import {SubCategory, Post} from '../../../admin/shared/interfaces';
// import {Observable, Subject} from 'rxjs';
// import {SubcategoryService} from '../../../shared/subcategory.service';
// import { filter } from 'rxjs/operators';
// import {ActivatedRoute} from '@angular/router';
//
//
//
//
// @Component({
//   selector: 'app-post',
//   templateUrl: './post.component.html',
//   styleUrls: ['./post.component.scss'],
//   providers: [PostsService]
// })
//
// export class PostComponent implements OnInit {
//   page = 1;
//   posts$: Observable<Post[]>;
//   pos: Post[];
//   category$: Observable<SubCategory[]>;
//   i = 0;
//   selected = 'Все';
//   selectedData;
//   constructor(
//     private postService: PostsService,
//     private categoryService: SubcategoryService,
// ) {
//
//   }
//
//
//   ngOnInit(): void {
//     this.posts$ = this.postService.getDjPostAll();
//     // this.category$ = this.categoryService.getDjCategoryAll();
//
//     this.postService.getDjPostAll().subscribe((data: any[]) => {
//       this.pos = data;
//       this.selectedData = this.pos;
//     });
//
//     // this.selectedData = this.pos;
//
//   }
//
//
//   onSelect(val){
//     console.log(val);
//     if (val === 'Все') {
//       return this.selectedData = this.pos;
//     }else {
//       this.selectedData = this.pos.filter(x => x.category === val);
//     }
//   }
//
//
// }
