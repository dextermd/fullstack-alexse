import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../../main-layout/main-layout.component';

@Component({
  selector: 'app-info-short',
  templateUrl: './info-short.component.html',
  styleUrls: ['./info-short.component.scss']
})
export class InfoShortComponent implements OnInit {

  constructor(
    public main: MainLayoutComponent
  ) { }

  ngOnInit(): void {
  }

}
