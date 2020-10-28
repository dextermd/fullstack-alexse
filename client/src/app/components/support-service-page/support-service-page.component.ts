import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-support-service-page',
  templateUrl: './support-service-page.component.html',
  styles: []
})
export class SupportServicePageComponent implements OnInit {

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
