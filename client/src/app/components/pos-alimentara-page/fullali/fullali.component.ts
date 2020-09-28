import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MainLayoutComponent} from '../../main-layout/main-layout.component';

@Component({
  selector: 'app-fullali',
  templateUrl: './fullali.component.html',
  styles: [
  ]
})
export class FullaliComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public main: MainLayoutComponent

  ) { }

  ngOnInit(): void {
  }

}
