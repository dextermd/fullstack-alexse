import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-b52-page',
  templateUrl: './b52-page.component.html',
  styles: [
  ]
})
export class B52PageComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('B52.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('B52.Desc').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
