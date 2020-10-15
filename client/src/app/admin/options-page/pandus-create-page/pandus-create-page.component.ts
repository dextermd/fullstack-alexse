import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IndicatorOption, PandusOption} from '../../shared/interfaces';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PandusService} from '../../../shared/pandus.service';
import {AlertService} from '../../shared/services/alert.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-pandus-create-page',
  templateUrl: './pandus-create-page.component.html',
  styleUrls: ['./pandus-create-page.component.scss']
})
export class PandusCreatePageComponent implements OnInit {

  form: FormGroup;
  isNew = true;
  pandus: PandusOption;

  @ViewChild('input') inputRef: ElementRef;
  image: File;
  imagePreview: string | ArrayBuffer = '';

  constructor(
    private route: ActivatedRoute,
    private pandusService: PandusService,
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
          return this.pandusService.getById(params.id);
        }

        return of(null);
      })
    )
      .subscribe(
        (pandus: IndicatorOption) => {
          if (pandus) {
            this.pandus = pandus;
            this.form.patchValue({
              name: pandus.name,
              nameRo: pandus.nameRo,
              nameEn: pandus.nameEn,
              content: pandus.content,
              contentRo: pandus.contentRo,
              contentEn: pandus.contentEn,
              price: pandus.price
            });
            this.imagePreview = pandus.img;
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
    const decision = window.confirm(`Вы уверены что хотите удалить опцию "${this.pandus.name}"`);

    if (decision) {
      this.pandusService.delete(this.pandus._id).subscribe(
        response => this.alert.success(response.message),
        error => this.alert.danger(error.error.message),
        () => this.router.navigate(['/admin/pandus-page'])
      );
    }
  }


  onSubmit() {
    let obs$;
    this.form.disable();
    if (this.isNew) {
      obs$ = this.pandusService.create(
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
      obs$ = this.pandusService.update(
        this.pandus._id,
        this.form.value.name,
        this.form.value.nameRo,
        this.form.value.nameEn,
        this.form.value.content,
        this.form.value.content,
        this.form.value.content,
        this.form.value.price,
        this.image
      );

    }
    obs$.subscribe(
      pandus => {
        this.pandus = pandus;
        this.alert.success('Изминения сохранены.');

        this.form.enable();
      },
      error => {
        this.alert.danger(error.error.message);
        this.form.enable();
      },
      () => this.router.navigate(['/admin/pandus-page'])
    );
  }


}
