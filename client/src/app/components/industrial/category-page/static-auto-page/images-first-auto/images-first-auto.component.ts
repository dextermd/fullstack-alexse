import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-first-auto',
  templateUrl: './images-first-auto.component.html',
  styleUrls: ['./images-first-auto.component.scss']
})
export class ImagesFirstAutoComponent implements OnInit {

  elements: any = [
    {first: 'Наибольший предел взвешивания, т:', last: '30 /60 / 80'},
    {first: 'Наименьший предел взвешивания, кг:', last: '200 / 400'},
    {first: 'Цена поверочного деления (е), кг:', last: '10 /20 / 20'},
    {first: 'Дискретность отсчета (d), кг:', last: '10 /20 / 20'},
    {first: 'Количество платформ, шт:', last: '3'},
    {first: 'Длина грузоприемных платформ, м:', last: '16 / 18'},
    {first: 'Количество датчиков, шт:', last: '8'},
    {first: 'Степень защиты от пыли и воды (платформа):', last: 'IP 68'},
    {first: 'Степень защиты от пыли и воды (индикатор MERAV2000):', last: 'IP 67'},
    {first: 'Подключение к компьютеру', last: 'RS232'},
    {first: 'Рабочий температурный диапазон (платформа), С:', last: 'От -30 До +45'},
    {first: 'Рабочий температурный диапазон (индикатор), С:', last: 'От -5 До +35'},
    {first: 'Напряжение питания от сети:', last: '220В(+10%;-15%); 50 Гц +/-2%'},
    {first: 'Класс точности весов:', last: 'Средний (III)'},
  ];


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
