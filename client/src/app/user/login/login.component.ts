import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';
import {AlertService} from '../../admin/shared/services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  aSub: Subscription;
  submitted = false;
  message: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private rout: ActivatedRoute,
    private  alert: AlertService

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

    this.rout.queryParams.subscribe( (params: Params) => {
      if (params.registered) {
        this.alert.success('Теперь вы можете зайти в систему используя свои данные');
        // Теперь вы можете зайти в систему используя свои данные
      } else if (params.accessDenied) {
        this.alert.success('Для начала авторизуйтесь в системе');
        // Для начала авторизуйтесь в системе
      } else if (params.sessionFailed){
        // Пожалуйста войдите в систему заного
        this.alert.success('Пожалуйста войдите в систему заного');


      }
    });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable();
    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/admin/dashboard']),
      error => {
        this.alert.success(error.error.message);
        console.warn(error);
        this.form.enable();
      }
    );

  }
}
