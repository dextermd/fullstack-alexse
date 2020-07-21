import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})



export class PartnersComponent implements OnInit {

  constructor() { }
  cards = [
    {

      img: 'assets/partners/airport.jpg'
    },
    {

      img: 'assets/partners/Danube.jpg'
    },
    {

      img: 'assets/partners/Floreni.jpg'
    },
    {

      img: 'assets/partners/Glass.jpg'
    },
    {
      img: 'assets/partners/knauf.jpg'
    },
    {

      img: 'assets/partners/Lafarge.jpg'
    },
    {

      img: 'assets/partners/Lukoil.jpg'
    },
    {

      img: 'assets/partners/Penes.jpg'
    },
    {

      img: 'assets/partners/Rompetrol.jpg'
    },
    {

      img: 'assets/partners/Salamer.jpg'
    },
    {

      img: 'assets/partners/zernoff.png'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 6);
  }




}
