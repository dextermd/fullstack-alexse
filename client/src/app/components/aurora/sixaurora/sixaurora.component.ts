import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../../main-layout/main-layout.component';

@Component({
  selector: 'app-sixaurora',
  templateUrl: './sixaurora.component.html',
  styleUrls: ['./sixaurora.component.scss']
})
export class SixauroraComponent implements OnInit {

  constructor(
    public main: MainLayoutComponent
  ) { }

  ngOnInit(): void {
  }

}
