import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../../main-layout/main-layout.component';

@Component({
  selector: 'app-fouraurora',
  templateUrl: './fouraurora.component.html',
  styleUrls: ['./fouraurora.component.scss']
})
export class FourauroraComponent implements OnInit {

  constructor(
    public main: MainLayoutComponent

  ) { }

  ngOnInit(): void {
  }

}
