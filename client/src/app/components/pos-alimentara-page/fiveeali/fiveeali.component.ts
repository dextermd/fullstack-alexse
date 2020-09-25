import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-fiveeali',
  templateUrl: './fiveeali.component.html',
  styles: [
  ]
})
export class FiveealiComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

}
