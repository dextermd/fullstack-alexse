import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Post, Category} from '../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../shared/services/alert.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {PostCategoryService} from '../../shared/postcategory.service';
import {PostsService} from '../../shared/posts.service';



@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss']
})
export class CreatePostPageComponent implements OnInit {

  posts: Post;
  form: FormGroup;
  @ViewChild('input') inputRef: ElementRef;
  image: File;
  imagePreview: string | ArrayBuffer = '';
  isNew = true;
  categories: Category[] = [];

  constructor(
    private postService: PostsService,
    private postcategoryService: PostCategoryService,
    private alert: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.postcategoryService.getAllCategory().subscribe(categories => {
      this.categories = categories;
    });

    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      preview: new FormControl(null, Validators.required),
    });

    this.form.disable();

    this.route.params.pipe(
      switchMap( (params: Params) => {
        if (params.id) {
          this.isNew = false;
          return this.postService.getByIdPost(params.id);
        }
        return  of(null);
      })
    )
      .subscribe(
        (posts: Post) => {
          if (posts) {
            this.posts = posts;
            this.form.patchValue({
              title: posts.title,
              category: posts.category,
              content: posts.content,
              preview: posts.preview
            });
            this.imagePreview = posts.img;
          }
          this.form.enable();
        },
        error => this.alert.warning(error.error.message)
      );

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

  triggerClick() {
    this.inputRef.nativeElement.click();

  }

  onSubmit() {
    let obs$;
    this.form.disable();
    if (this.isNew) {
      obs$ = this.postService
        .create(
          this.form.value.title,
          this.form.value.category,
          this.form.value.content,
          this.form.value.preview,
          this.image
        );
    } else {
      obs$ = this.postService
        .update(
          this.posts._id,
          this.form.value.title,
          this.form.value.category,
          this.form.value.content,
          this.form.value.preview,
          this.image
        );

    }
    obs$.subscribe(
      post => {
        this.posts = post;
        this.alert.success('Изминения сохранены.');

        this.form.enable();
      },
      error => {
        this.alert.danger(error.error.message);
        this.form.enable();
      },
      () => this.router.navigate(['/admin/post'])
    );
  }

}

