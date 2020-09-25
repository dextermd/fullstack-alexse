import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-fullali',
  templateUrl: './fullali.component.html',
  styles: [
  ]
})
export class FullaliComponent implements OnInit {

  constructor(
    public translate: TranslateService,

  ) { }

  ngOnInit(): void {
  }

}
