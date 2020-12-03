import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-fourpos',
  templateUrl: './fourpos.component.html',
  styles: [
  ]
})
export class FourposComponent implements OnInit {

  constructor(
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }

}
