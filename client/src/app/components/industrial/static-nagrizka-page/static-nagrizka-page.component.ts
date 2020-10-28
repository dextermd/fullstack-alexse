import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-static-nagrizka-page',
  templateUrl: './static-nagrizka-page.component.html',
  styleUrls: ['./static-nagrizka-page.component.scss']
})
export class StaticNagrizkaPageComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('CarWeights.StaticOc.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('CarWeights.StaticOc.SubTitle').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
