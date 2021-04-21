import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../main-layout/main-layout.component';

@Component({
  selector: 'app-mobile-truck-scale-with-continuous-platform',
  templateUrl: './mobile-truck-scale-with-continuous-platform.component.html',
  styleUrls: ['./mobile-truck-scale-with-continuous-platform.component.scss']
})
export class MobileTruckScaleWithContinuousPlatformComponent implements OnInit {

  constructor(
    public main: MainLayoutComponent
  ) { }

  ngOnInit(): void {
  }

}
