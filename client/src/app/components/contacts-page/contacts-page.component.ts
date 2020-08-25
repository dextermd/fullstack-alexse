import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmailService} from '../../shared/email.service';
import {AlertService} from '../../admin/shared/services/alert.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styles: []
})
export class ContactsPageComponent implements OnInit {
  form: FormGroup;
  panding = false

  constructor(
    private http: HttpClient,
    private alert: AlertService,
    private emailService: EmailService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });

  }


  onSubmit() {
    this.panding = true;
    const question: any = {
      name: this.form.value.name,
      email: this.form.value.email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    };

    this.emailService.sendQuestion(question).subscribe(
      data => {
        // console.log(`${data.} был отправлен`);
      }
    );

    this.alert.success(`${question.name} вы отправили письмо`);
    this.form.reset();
  }
}
