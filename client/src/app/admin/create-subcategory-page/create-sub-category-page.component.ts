import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubcategoryService} from '../../shared/subcategory.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';
import {Category, SubCategory} from '../shared/interfaces';
import {CategoryService} from '../../shared/category.service';

@Component({
  selector: 'app-create-category-page',
  templateUrl: './create-sub-category-page.component.html',
  styleUrls: ['./create-sub-category-page.component.scss']
})
export class CreateSubCategoryPageComponent implements OnInit {
  @ViewChild('input') inputRef: ElementRef;

  form: FormGroup;
  image: File;
  imagePreview: string | ArrayBuffer = '';
  isNew = true;
  categoryy: SubCategory;
  categories: Category[] = [];
  constructor(
    private route: ActivatedRoute,
    private subcategoryServices: SubcategoryService,
    private categoryServices: CategoryService,
    private alert: AlertService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.categoryServices.getAllCategory().subscribe(categories => {
      this.categories = categories;
    });

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      nameRo: new FormControl(null, Validators.required),
      nameEn: new FormControl(null, Validators.required),
      num: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
    });

    this.form.disable();

    this.route.params.pipe(
      switchMap( (params: Params) => {
        if (params.id) {
          this.isNew = false;
          return this.subcategoryServices.getByIdCategory(params.id);
        }

        return  of(null);
      })
    )
      .subscribe(
        (category: SubCategory) => {
          if (category) {
            this.categoryy = category;

            this.form.patchValue({
              name: category.name,
              nameRo: category.nameRo,
              nameEn: category.nameEn,
              num: category.num,
              category: category.category,
            });
          }
          this.form.enable();
        },
        error => this.alert.warning(error.error.message)
    );

  }





  deleteCategory() {
    const  decision = window.confirm(`Вы уверены что хотите удалить категорию "${this.categoryy.name}"`);

    if (decision){
      this.subcategoryServices.delete(this.categoryy._id).subscribe(
        response => this.alert.success(response.message),
        error => this.alert.danger(error.error.message),
        () => this.router.navigate(['/admin/subcategory'])
      );
    }
  }


  onSubmit() {
    let obs$;
    this.form.disable();
    if (this.isNew) {
      obs$ = this.subcategoryServices.create(
        this.form.value.name,
        this.form.value.nameRo,
        this.form.value.nameEn,
        this.form.value.num,
        this.form.value.category
      );
    } else {
      obs$ = this.subcategoryServices.update(
        this.categoryy._id,
        this.form.value.name,
        this.form.value.nameRo,
        this.form.value.nameEn,
        this.form.value.num,
        this.form.value.category
      );

    }
    obs$.subscribe(
      category => {
        this.categoryy = category;
        this.alert.success('Изминения сохранены.');

        this.form.enable();
      },
      error => {
        this.alert.danger(error.error.message);
        this.form.enable();
      },
      () => this.router.navigate(['/admin/subcategory'])
    );
  }


}
