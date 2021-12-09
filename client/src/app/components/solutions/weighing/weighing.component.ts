import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../../main-layout/main-layout.component';

@Component({
  selector: 'app-weighing',
  templateUrl: './weighing.component.html',
  styles: [
  ],
})
export class WeighingComponent implements OnInit {

  constructor(public main: MainLayoutComponent) { }

  ngOnInit(): void {
  }

}
