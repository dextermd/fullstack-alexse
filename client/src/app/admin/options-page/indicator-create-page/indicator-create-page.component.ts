import {Component, OnInit} from '@angular/core';
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
  indicator: IndicatorOption;

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
              price: indicator.price
            });
          }
          this.form.enable();
        },
        error => this.alert.warning(error.error.message)
      );

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
      obs$ = this.indicatorService.create(this.form.value.name, this.form.value.price);
    } else {
      obs$ = this.indicatorService.update(this.indicator._id, this.form.value.name, this.form.value.price);

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

