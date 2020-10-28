import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dozator-index-page',
  templateUrl: './dozator-index-page.component.html',
  styleUrls: ['./dozator-index-page.component.scss']
})
export class DozatorIndexPageComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('Bunker.Index.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('Bunker.Index.Text').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
