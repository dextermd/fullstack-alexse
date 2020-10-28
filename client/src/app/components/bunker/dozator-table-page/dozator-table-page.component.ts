import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dozator-table-page',
  templateUrl: './dozator-table-page.component.html',
  styleUrls: ['./dozator-table-page.component.scss']
})
export class DozatorTablePageComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('Support.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('Support.Desc').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
