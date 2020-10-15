import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IndicatorOption} from '../../shared/interfaces';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AlertService} from '../../shared/services/alert.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {IndicatorService} from '../../../shared/indicator.service';

@Component({
  selector: 'app-indicator-create-page',
  templateUrl: './indicator-create-page.component.html',
  styleUrls: ['./indicator-create-page.component.scss']
})
export class IndicatorCreatePageComponent implements OnInit {

  form: FormGroup;
  isNew = true;
  @ViewChild('input') inputRef: ElementRef;
  image: File;
  indicator: IndicatorOption;
  imagePreview: string | ArrayBuffer = '';



  constructor(
    private route: ActivatedRoute,
    private indicatorService: IndicatorService,
    private alert: AlertService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      nameRo: new FormControl(null, Validators.required),
      nameEn: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      contentRo: new FormControl(null, Validators.required),
      contentEn: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    });

    this.form.disable();

    this.route.params.pipe(
      switchMap((params: Params) => {
        if (params.id) {
          this.isNew = false;
          return this.indicatorService.getById(params.id);
        }

        return of(null);
      })
    )
      .subscribe(
        (indicator: IndicatorOption) => {
          if (indicator) {
            this.indicator = indicator;
            this.form.patchValue({
              name: indicator.name,
              nameRo: indicator.nameRo,
              nameEn: indicator.nameEn,
              content: indicator.content,
              contentRo: indicator.contentRo,
              contentEn: indicator.contentEn,
              price: indicator.price
            });
            this.imagePreview = indicator.img;

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


  delete() {
    const decision = window.confirm(`Вы уверены что хотите удалить опцию "${this.indicator.name}"`);

    if (decision) {
      this.indicatorService.delete(this.indicator._id).subscribe(
        response => this.alert.success(response.message),
        error => this.alert.danger(error.error.message),
        () => this.router.navigate(['/admin/indicator-page'])
      );
    }
  }


  onSubmit() {
    let obs$;
    this.form.disable();
    if (this.isNew) {
      obs$ = this.indicatorService.create(
        this.form.value.name,
        this.form.value.nameRo,
        this.form.value.nameEn,
        this.form.value.content,
        this.form.value.content,
        this.form.value.content,
        this.form.value.price,
        this.image
      );
    } else {
      obs$ = this.indicatorService.update(
        this.indicator._id,
        this.form.value.name,
        this.form.value.nameRo,
        this.form.value.nameEn,
        this.form.value.content,
        this.form.value.contentRo,
        this.form.value.contentEn,
        this.form.value.price,
        this.image

    );

    }
    obs$.subscribe(
      indicator => {
        this.indicator = indicator;
        this.alert.success('Изминения сохранены.');

        this.form.enable();
      },
      error => {
        this.alert.danger(error.error.message);
        this.form.enable();
      },
      () => this.router.navigate(['/admin/indicator-page'])
    );
  }


}

