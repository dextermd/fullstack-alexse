import {Component, OnDestroy, OnInit} from '@angular/core';
import {PandusOption} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {PandusService} from '../../../shared/pandus.service';
import {AlertService} from '../../shared/services/alert.service';

@Component({
  selector: 'app-pandus-page',
  templateUrl: './pandus-page.component.html',
  styleUrls: ['./pandus-page.component.scss']
})
export class PandusPageComponent implements OnInit, OnDestroy {

  loading = false;
  pandus: PandusOption[] = [];
  prSub: Subscription;
  dSub: Subscription;
  constructor(
    private pandusService: PandusService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.prSub =  this.pandusService.getAll().subscribe( pandus => {
      this.pandus = pandus;
      this.loading = false;
    });
  }

  delete(id: string) {
    this.dSub = this.pandusService.delete(id).subscribe(() => {
      this.pandus = this.pandus.filter(pandus => pandus._id !== id);
      this.alert.success('Пандус был удален');
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
