import {Component, OnDestroy, OnInit} from '@angular/core';
import {CasaOption} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../../shared/services/alert.service';
import {CasaService} from '../../../shared/casa.service';

@Component({
  selector: 'app-casa-page',
  templateUrl: './casa-page.component.html',
  styleUrls: ['./casa-page.component.scss']
})
export class CasaPageComponent implements OnInit, OnDestroy {

  loading = false;
  casa: CasaOption[] = [];
  prSub: Subscription;
  dSub: Subscription;
  constructor(
    private casaService: CasaService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.prSub =  this.casaService.getAll().subscribe( casa => {
      this.casa = casa;
      this.loading = false;
    });
  }

  delete(id: string) {
    this.dSub = this.casaService.delete(id).subscribe(() => {
      this.casa = this.casa.filter(casa => casa._id !== id);
      this.alert.success('Опция была удалена');
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

