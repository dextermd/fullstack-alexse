import { Component, OnInit } from '@angular/core';
import {MainLayoutComponent} from '../../../../main-layout/main-layout.component';

@Component({
  selector: 'app-images-first-auto',
  templateUrl: './images-first-auto.component.html',
  styleUrls: ['./images-first-auto.component.scss']
})
export class ImagesFirstAutoComponent implements OnInit {




  radioModel = 'Left';
  color;
  colorTwo;
  colorNew;
  constructor(
    public main: MainLayoutComponent,
  ) { }

  ngOnInit(): void {
    this.color = 'danger';
    this.colorTwo = 'primary';
    this.colorNew = 'primary';
  }


  changeColor() {
    if (this.radioModel === 'Left'){
      this.color = 'danger';
      this.colorTwo = 'primary';
      this.colorNew = 'primary';
    } else if (this.radioModel === 'Right') {
      this.color = 'primary';
      this.colorTwo = 'danger';
      this.colorNew = 'primary';
    } else if (this.radioModel === 'New'){
      this.color = 'primary';
      this.colorTwo = 'primary';
      this.colorNew = 'danger';
    }
  }




}
