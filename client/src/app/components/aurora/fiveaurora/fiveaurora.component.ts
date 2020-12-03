import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../../main-layout/main-layout.component';

@Component({
  selector: 'app-fiveaurora',
  templateUrl: './fiveaurora.component.html',
  styleUrls: ['./fiveaurora.component.scss']
})
export class FiveauroraComponent implements OnInit {

  constructor(
    public main: MainLayoutComponent
  ) { }

  ngOnInit(): void {
  }

}
