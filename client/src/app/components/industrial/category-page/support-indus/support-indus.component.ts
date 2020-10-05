import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../../../main-layout/main-layout.component';

@Component({
  selector: 'app-support-indus',
  templateUrl: './support-indus.component.html',
  styleUrls: ['./support-indus.component.scss']
})
export class SupportIndusComponent implements OnInit {

  constructor(
    public main: MainLayoutComponent
  ) { }

  ngOnInit(): void {
  }

}
