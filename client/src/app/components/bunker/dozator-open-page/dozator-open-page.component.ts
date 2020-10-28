import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dozator-open-page',
  templateUrl: './dozator-open-page.component.html',
  styleUrls: ['./dozator-open-page.component.scss']
})
export class DozatorOpenPageComponent implements OnInit {


  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('Bunker.Scales.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('Bunker.Scales.SubTitle').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
