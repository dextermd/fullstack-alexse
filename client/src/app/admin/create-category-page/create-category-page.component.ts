import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../shared/category.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';
import {Category} from '../shared/interfaces';

@Component({
  selector: 'app-create-category-page',
  templateUrl: './create-category-page.component.html',
  styleUrls: ['./create-category-page.component.scss']
})
export class CreateCategoryPageComponent implements OnInit {
  @ViewChild('input') inputRef: ElementRef;

  form: FormGroup;
  image: File;
  imagePreview: string | ArrayBuffer = '';
  isNew = true;
  categoryy: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryServices: CategoryService,
    private alert: AlertService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      nameRo: new FormControl(null, Validators.required),
      nameEn: new FormControl(null, Validators.required),
    });

    this.form.disable();

    this.route.params.pipe(
      switchMap((params: Params) => {
        if (params.id) {
          this.isNew = false;
          return this.categoryServices.getByIdCategory(params.id);
        }

        return of(null);
      })
    )
      .subscribe(
        (category: Category) => {
          if (category) {
            this.categoryy = category;
            this.form.patchValue({
              name: category.name,
              nameRo: category.nameRo,
              nameEn: category.nameEn
            });
            this.imagePreview = category.imageSrc;
          }
          this.form.enable();
        },
        error => this.alert.warning(error.error.message)
      );

  }


  triggerClick() {
    this.inputRef.nativeElement.click();
  }

  deleteCategory() {
    const decision = window.confirm(`Вы уверены что хотите удалить категорию "${this.categoryy.name}"`);

    if (decision) {
      this.categoryServices.delete(this.categoryy._id).subscribe(
        response => this.alert.success(response.message),
        error => this.alert.danger(error.error.message),
        () => this.router.navigate(['/admin/category'])
      );
    }
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.image = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }

  onSubmit() {
    let obs$;
    this.form.disable();
    if (this.isNew) {
      obs$ = this.categoryServices.create(
        this.form.value.name,
        this.form.value.nameRo,
        this.form.value.nameEn,
        this.image
      );
    } else {
      obs$ = this.categoryServices.update(
        this.categoryy._id,
        this.form.value.name,
        this.form.value.nameRo,
        this.form.value.nameEn,
        this.image
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
      () => this.router.navigate(['/admin/category'])
    );
  }


}
