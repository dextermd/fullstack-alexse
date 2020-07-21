import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostCategory} from '../shared/interfaces';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AlertService} from '../shared/services/alert.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {PostCategoryService} from '../../shared/postcategory.service';

@Component({
  selector: 'app-create-post-category',
  templateUrl: './create-post-category.component.html',
  styleUrls: ['./create-post-category.component.scss']
})
export class CreatePostCategoryComponent implements OnInit {
  @ViewChild('input') inputRef: ElementRef;

  form: FormGroup;
  isNew = true;
  categoryy: PostCategory;
  constructor(
    private route: ActivatedRoute,
    private postcategoryServices: PostCategoryService,
    private alert: AlertService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
    });

    this.form.disable();

    this.route.params.pipe(
      switchMap( (params: Params) => {
        if (params.id) {
          this.isNew = false;
          return this.postcategoryServices.getByIdCategory(params.id);
        }

        return  of(null);
      })
    )
      .subscribe(
        (category: PostCategory) => {
          if (category) {
            this.categoryy = category;
            this.form.patchValue({
              name: category.name
            });
          }
          this.form.enable();
        },
        error => this.alert.warning(error.error.message)
      );

  }



  triggerClick() {
    this.inputRef.nativeElement.click();
  }

  deletePostCategory() {
    const  decision = window.confirm(`Вы уверены что хотите удалить категорию "${this.categoryy.name}"`);

    if (decision){
      this.postcategoryServices.delete(this.categoryy._id).subscribe(
        response => this.alert.success(response.message),
        error => this.alert.danger(error.error.message),
        () => this.router.navigate(['/admin/post-category'])
      );
    }
  }



  onSubmit() {
    let obs$;
    this.form.disable();
    if (this.isNew) {
      obs$ = this.postcategoryServices.create(this.form.value.name);
    } else {
      obs$ = this.postcategoryServices.update(this.categoryy._id, this.form.value.name);

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
      () => this.router.navigate(['/admin/post-category'])
    );
  }


}
