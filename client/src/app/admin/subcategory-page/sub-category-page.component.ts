import { Component, OnInit } from '@angular/core';
import {SubcategoryService} from '../../shared/subcategory.service';
import {Category, SubCategory} from '../shared/interfaces';
import {Observable} from 'rxjs';
import {CategoryService} from '../../shared/category.service';



@Component({
  selector: 'app-category-page',
  templateUrl: './sub-category-page.component.html',
  styleUrls: ['./sub-category-page.component.scss']
})
export class SubCategoryPageComponent implements OnInit {

  // categories: Category[] = [];
  categorys: Category[] = [];

  categories$: Observable<SubCategory[]>;

  constructor(private subcategoryService: SubcategoryService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categories$ = this.subcategoryService.getAllCategory();

    this.categoryService.getAllCategory().subscribe(categorys => {
      this.categorys = categorys;
    });

  }
}
