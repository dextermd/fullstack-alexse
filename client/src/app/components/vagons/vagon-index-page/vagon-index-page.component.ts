import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-vagon-index-page',
  templateUrl: './vagon-index-page.component.html',
  styleUrls: ['./vagon-index-page.component.scss']
})
export class VagonIndexPageComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('Rails.Index.Breadcrumb').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('Rails.Index.Content').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
