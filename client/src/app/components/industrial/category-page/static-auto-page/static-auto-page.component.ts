import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-static-auto-page',
  templateUrl: './static-auto-page.component.html',
  styleUrls: ['./static-auto-page.component.scss']
})
export class StaticAutoPageComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('CarWeights.StaticAuto.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('CarWeights.StaticAuto.SubTitle').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
