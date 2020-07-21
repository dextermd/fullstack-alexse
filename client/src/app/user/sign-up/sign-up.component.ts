import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {Route, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AlertService} from "../../admin/shared/services/alert.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  form: FormGroup;
  submitted = false;
  message: string;
  aSub: Subscription;

  constructor(private auth: AuthService,
              private router: Router,
              private alert: AlertService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

  }
  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable();
    this.aSub = this.auth.register(this.form.value).subscribe(
      () => {
        this.router.navigate(['/account/login'], {
          queryParams: {
            registered: true
          }
        });
      },
      error => {
        this.alert.success(error.error.message);

        console.warn(error);
        this.form.enable();
      }
    );
  }
}
