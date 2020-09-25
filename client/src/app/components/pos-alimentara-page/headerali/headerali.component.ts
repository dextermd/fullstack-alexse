import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-headerali',
  templateUrl: './headerali.component.html',
  styles: [
  ]
})
export class HeaderaliComponent implements OnInit {

  constructor(
    public translate: TranslateService,

  ) { }

  ngOnInit(): void {
  }

}
