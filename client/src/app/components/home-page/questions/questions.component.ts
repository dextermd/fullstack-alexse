import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertService} from '../../../admin/shared/services/alert.service';
import {EmailService} from '../../../shared/email.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private alert: AlertService,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
    });
  }


  onSubmit() {
    const call: any = {
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone,
    };

    this.emailService.sendCallBack(call).subscribe(
      data => {
        // console.log(`${data.} был отправлен`);
      }
    );

    this.alert.success(`${call.name} вы оставили заявку на звонок`);
    this.form.reset();
  }


}
