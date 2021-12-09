import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispensing',
  templateUrl: './dispensing.component.html',
  styles: [
  ],
})
export class DispensingComponent implements OnInit {

  constructor() { }
  cards = [
    {

      img: 'assets/solutions/dispensing/logo/2.jpg'
    },
    {

      img: 'assets/solutions/dispensing/logo/3.jpg'
    },
    {

      img: 'assets/solutions/dispensing/logo/4.jpg'
    },
    {
      img: 'assets/solutions/dispensing/logo/5.jpg'
    },
    {

      img: 'assets/solutions/dispensing/logo/6.jpg'
    },
    {

      img: 'assets/solutions/dispensing/logo/7.jpg'
    },
    {

      img: 'assets/solutions/dispensing/logo/8.jpg'
    },
    {

      img: 'assets/solutions/dispensing/logo/9.jpg'
    },
    {

      img: 'assets/solutions/dispensing/logo/1.jpg'
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
