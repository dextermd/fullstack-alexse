import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dozator-viboi-page',
  templateUrl: './dozator-viboi-page.component.html',
  styleUrls: ['./dozator-viboi-page.component.scss']
})
export class DozatorViboiPageComponent implements OnInit {


  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.translate.get('Bunker.PackingDispenser.Title').subscribe(res => {
      this.titleService.setTitle(res);
    });
    this.translate.get('Bunker.PackingDispenser.SubTitle').subscribe(res => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  ngOnInit(): void {
  }

}
