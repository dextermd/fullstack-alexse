import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-perenosnie-nagruzka-page',
  templateUrl: './perenosnie-nagruzka-page.component.html',
  styleUrls: ['./perenosnie-nagruzka-page.component.scss']
})
export class PerenosnieNagruzkaPageComponent implements OnInit {


  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('CarWeights.MoveOc.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('CarWeights.MoveOc.SubTitle').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
