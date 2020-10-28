import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-vagon-modern-page',
  templateUrl: './vagon-modern-page.component.html',
  styleUrls: ['./vagon-modern-page.component.scss']
})
export class VagonModernPageComponent implements OnInit {


  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('Rails.Modern.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('Rails.Modern.SubTitle').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
