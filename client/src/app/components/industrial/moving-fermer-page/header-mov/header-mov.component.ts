import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mov',
  templateUrl: './header-mov.component.html',
  styleUrls: ['./header-mov.component.scss']
})
export class HeaderMovComponent implements OnInit {

  elements: any = [
    {first: 'Наибольший предел взвешивания, т:', last: '10 /20 / 30'},
    {first: 'Наименьший предел взвешивания, кг:', last: '100 / 100 / 200'},
    {first: 'Цена поверочного деления (е), кг:', last: '5 / 5 / 10'},
    {first: 'Дискретность отсчета (d), кг:', last: '5 / 5 / 10'},
    {first: 'Количество платформ, шт:', last: '1'},
    {first: 'Длина грузоприемных платформ, м:', last: '6'},
    {first: 'Количество датчиков, шт:', last: '4'},
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
