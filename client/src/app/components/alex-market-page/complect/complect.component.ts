import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../../main-layout/main-layout.component';

@Component({
  selector: 'app-complect',
  templateUrl: './complect.component.html',
  styles: [
  ]
})
export class ComplectComponent implements OnInit {

  constructor(
    public  main: MainLayoutComponent
  ) { }

  ngOnInit(): void {
  }

}
