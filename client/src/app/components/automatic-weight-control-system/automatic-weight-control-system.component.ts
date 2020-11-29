import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../main-layout/main-layout.component';

@Component({
  selector: 'app-automatic-weight-control-system',
  templateUrl: './automatic-weight-control-system.component.html',
  styleUrls: ['./automatic-weight-control-system.component.scss']
})
export class AutomaticWeightControlSystemComponent implements OnInit {

  constructor(
    public main: MainLayoutComponent
  ) { }

  ngOnInit(): void {
  }

}
