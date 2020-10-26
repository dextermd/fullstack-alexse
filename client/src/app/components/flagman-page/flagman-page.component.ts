import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-flagman-page',
  templateUrl: './flagman-page.component.html',
  styles: [
  ]
})
export class FlagmanPageComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('Flagman.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('Flagman.Desc').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
