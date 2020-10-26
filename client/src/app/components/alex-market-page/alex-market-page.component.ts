import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-alex-market-page',
  templateUrl: './alex-market-page.component.html',
  styles: [
  ]
})
export class AlexMarketPageComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('AlexMarket.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('AlexMarket.Desc').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
