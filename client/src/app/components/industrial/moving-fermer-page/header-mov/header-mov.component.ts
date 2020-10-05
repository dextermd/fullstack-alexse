import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../../../main-layout/main-layout.component';

@Component({
  selector: 'app-header-mov',
  templateUrl: './header-mov.component.html',
  styleUrls: ['./header-mov.component.scss']
})
export class HeaderMovComponent implements OnInit {




  constructor(
    public main: MainLayoutComponent
  ) { }

  ngOnInit(): void {
  }

}
