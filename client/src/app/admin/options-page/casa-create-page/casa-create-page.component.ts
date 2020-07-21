import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CasaOption} from '../../shared/interfaces';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {AlertService} from '../../shared/services/alert.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CasaService} from '../../../shared/casa.service';

@Component({
  selector: 'app-casa-create-page',
  templateUrl: './casa-create-page.component.html',
  styleUrls: ['./casa-create-page.component.scss']
})
export class CasaCreatePageComponent implements OnInit {

  form: FormGroup;
  isNew = true;
  casa: CasaOption;
  constructor(
    private route: ActivatedRoute,
    private casaServices: CasaService,
    private alert: AlertService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    });

    this.form.disable();

    this.route.params.pipe(
      switchMap( (params: Params) => {
        if (params.id) {
          this.isNew = false;
          return this.casaServices.getById(params.id);
        }

        return  of(null);
      })
    )
      .subscribe(
        (casa: CasaOption) => {
          if (casa) {
            this.casa = casa;
            this.form.patchValue({
              name: casa.name,
              price: casa.price
            });
          }
          this.form.enable();
        },
        error => this.alert.warning(error.error.message)
      );

  }




  delete() {
    const  decision = window.confirm(`Вы уверены что хотите удалить опцию "${this.casa.name}"`);

    if (decision){
      this.casaServices.delete(this.casa._id).subscribe(
        response => this.alert.success(response.message),
        error => this.alert.danger(error.error.message),
        () => this.router.navigate(['/admin/casa-page'])
      );
    }
  }



  onSubmit() {
    let obs$;
    this.form.disable();
    if (this.isNew) {
      obs$ = this.casaServices.create(this.form.value.name, this.form.value.price);
    } else {
      obs$ = this.casaServices.update(this.casa._id, this.form.value.name, this.form.value.price);

    }
    obs$.subscribe(
      casa => {
        this.casa = casa;
        this.alert.success('Изминения сохранены.');

        this.form.enable();
      },
      error => {
        this.alert.danger(error.error.message);
        this.form.enable();
      },
      () => this.router.navigate(['/admin/casa-page'])
    );
  }


}
