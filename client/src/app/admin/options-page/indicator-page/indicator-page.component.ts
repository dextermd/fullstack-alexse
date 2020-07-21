import {Component, OnDestroy, OnInit} from '@angular/core';
import {IndicatorOption} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../../shared/services/alert.service';
import {IndicatorService} from '../../../shared/indicator.service';

@Component({
  selector: 'app-indicator-page',
  templateUrl: './indicator-page.component.html',
  styleUrls: ['./indicator-page.component.scss']
})
export class IndicatorPageComponent implements OnInit, OnDestroy {

  loading = false;
  indicator: IndicatorOption[] = [];
  prSub: Subscription;
  dSub: Subscription;
  constructor(
    private indicatorService: IndicatorService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.prSub =  this.indicatorService.getAll().subscribe( indicator => {
      this.indicator = indicator;
      this.loading = false;
    });
  }

  delete(id: string) {
    this.dSub = this.indicatorService.delete(id).subscribe(() => {
      this.indicator = this.indicator.filter(indicator => indicator._id !== id);
      this.alert.success('Индикатор был удален');
    });
  }

  ngOnDestroy(): void {
    if (this.prSub) {
      this.prSub.unsubscribe();
    }

    if (this.dSub) {
      this.dSub.unsubscribe();
    }

  }
}

