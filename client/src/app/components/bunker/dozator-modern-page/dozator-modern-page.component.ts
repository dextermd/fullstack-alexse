import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dozator-modern-page',
  templateUrl: './dozator-modern-page.component.html',
  styleUrls: ['./dozator-modern-page.component.scss']
})
export class DozatorModernPageComponent implements OnInit {

  elements: any = [
    {first: 'Наибольший предел взвешивания, т:', last: '30 /60 / 80'},
    {first: 'Наименьший предел взвешивания, кг:', last: '200 / 400'},
    {first: 'Цена поверочного деления (е), кг:', last: '10 / 20 / 20'},
    {first: 'Дискретность отсчета (d), кг:', last: '10 / 20 / 20'},
    {first: 'Количество платформ, шт:', last: '1/2'},
    {first: 'Длина грузоприемных платформ, м:', last: '12 / 16 / 18'},
    {first: 'Количество датчиков, шт:', last: '4/6'},
    {first: 'Степень защиты от пыли и воды (платформа):', last: 'IP 68'},
    {first: 'Степень защиты от пыли и воды (индикатор MERAV2000):', last: 'IP 67'},
    {first: 'Подключение к компьютеру', last: 'RS232'},
    {first: 'Рабочий температурный диапазон (платформа), С:', last: 'От -30 До +45'},
    {first: 'Рабочий температурный диапазон (индикатор), С:', last: 'От -5 До +35'},
    {first: 'Напряжение питания от сети:', last: '220В(+10%;-15%); 50 Гц +/-2%'},
    {first: 'Класс точности весов:', last: 'Средний (III)'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
