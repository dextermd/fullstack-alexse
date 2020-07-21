import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PostCategory} from '../shared/interfaces';
import {PostCategoryService} from '../../shared/postcategory.service';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.scss']
})
export class PostCategoryComponent implements OnInit {

  categories$: Observable<PostCategory[]>;

  constructor(private postcategoryService: PostCategoryService) { }

  ngOnInit(): void {
    this.categories$ = this.postcategoryService.getAllCategory();

  }

}
