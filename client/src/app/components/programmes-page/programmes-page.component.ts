import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-programmes-page',
  templateUrl: './programmes-page.component.html',
  styles: [
  ]
})
export class ProgrammesPageComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('Programs.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('Programs.Desc').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
