import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-bort-system-page',
  templateUrl: './bort-system-page.component.html',
  styleUrls: ['./bort-system-page.component.scss']
})
export class BortSystemPageComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('CarWeights.OnBoard.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('CarWeights.OnBoard.SubTitle').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
