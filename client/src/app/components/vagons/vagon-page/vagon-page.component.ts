import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-vagon-page',
  templateUrl: './vagon-page.component.html',
  styleUrls: ['./vagon-page.component.scss']
})
export class VagonPageComponent implements OnInit {


  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('Rails.Scales.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('Rails.Scales.SubTitle').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
