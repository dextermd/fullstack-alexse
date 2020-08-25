import { Component, OnInit } from '@angular/core';
import {LocalService} from '../../shared/local.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  constructor(
    private localService: LocalService

  ) { }

  ngOnInit(): void {
    this.localService.setJsonValue('productPage', 1);

  }

}
