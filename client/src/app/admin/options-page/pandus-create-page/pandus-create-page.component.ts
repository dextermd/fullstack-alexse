import { Component, OnInit } from '@angular/core';
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
              price: pandus.price
            });
          }
          this.form.enable();
        },
        error => this.alert.warning(error.error.message)
      );

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
      obs$ = this.pandusService.create(this.form.value.name, this.form.value.price);
    } else {
      obs$ = this.pandusService.update(this.pandus._id, this.form.value.name, this.form.value.price);

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
