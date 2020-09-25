import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-threepos',
  templateUrl: './threepos.component.html',
  styles: [
  ]
})
export class ThreeposComponent implements OnInit {

  constructor(
    public translate: TranslateService

  ) { }

  ngOnInit(): void {
  }

}
