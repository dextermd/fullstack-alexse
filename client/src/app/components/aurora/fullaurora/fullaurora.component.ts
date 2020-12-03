import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../../main-layout/main-layout.component';

@Component({
  selector: 'app-fullaurora',
  templateUrl: './fullaurora.component.html',
  styleUrls: ['./fullaurora.component.scss']
})
export class FullauroraComponent implements OnInit {

  constructor(
    public main: MainLayoutComponent
  ) { }

  ngOnInit(): void {
  }

}
