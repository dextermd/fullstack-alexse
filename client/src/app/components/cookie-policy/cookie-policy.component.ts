import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../main-layout/main-layout.component';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss']
})
export class CookiePolicyComponent implements OnInit {
  constructor(
    public main: MainLayoutComponent,
  ) { }

  ngOnInit(): void {
  }

}
