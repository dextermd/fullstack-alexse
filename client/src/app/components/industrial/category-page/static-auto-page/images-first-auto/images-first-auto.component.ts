import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-first-auto',
  templateUrl: './images-first-auto.component.html',
  styleUrls: ['./images-first-auto.component.scss']
})
export class ImagesFirstAutoComponent implements OnInit {

  radioModel = 'Left';

  constructor() { }

  ngOnInit(): void {
  }


}
