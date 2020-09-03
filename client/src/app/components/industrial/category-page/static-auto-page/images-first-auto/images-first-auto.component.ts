import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-first-auto',
  templateUrl: './images-first-auto.component.html',
  styleUrls: ['./images-first-auto.component.scss']
})
export class ImagesFirstAutoComponent implements OnInit {

  radioModel = 'Left';
  color;
  colorTwo;
  constructor() { }

  ngOnInit(): void {
    this.color = 'danger';
    this.colorTwo = 'primary';

  }


  changeColor() {
    if (this.radioModel === 'Left'){
      this.color = 'danger';
      this.colorTwo = 'primary';
    } else if (this.radioModel === 'Right') {
      this.color = 'primary';
      this.colorTwo = 'danger';
    }
  }


}
