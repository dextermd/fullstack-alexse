import { Component, OnInit } from '@angular/core';
import {LocalService} from '../../shared/local.service';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  constructor(
    private localService: LocalService,
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.use(this.localService.getJsonValue('lang'));
    this.translate.get('MAIN.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.use(this.localService.getJsonValue('lang'));
    this.translate.get('MAIN.Desc').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
    this.localService.setJsonValue('productPage', 1);

  }

}
