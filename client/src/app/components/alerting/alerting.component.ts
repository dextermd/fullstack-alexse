import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from '../../admin/shared/services/alert.service';

@Component({
  selector: 'app-alerting',
  templateUrl: './alerting.component.html',
  styleUrls: ['./alerting.component.scss']
})
export class AlertingComponent implements OnInit, OnDestroy {

  @Input() delay = 5000;
  public  text: string;
  public  type = 'success';

  alSub: Subscription;
  constructor(private alertService: AlertService) { }



  ngOnInit(): void {
    this.alSub = this.alertService.alert$.subscribe(alert => {
      this.text = alert.text;
      this.type = alert.type;

      const timeout = setTimeout( () => {
        clearTimeout(timeout);
        this.text = '';
      }, this.delay);

    });
  }

  ngOnDestroy(): void {
    if (this.alSub) {
      this.alSub.unsubscribe();
    }
  }

}

