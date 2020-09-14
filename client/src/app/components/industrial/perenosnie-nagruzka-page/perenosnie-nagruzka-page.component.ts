import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perenosnie-nagruzka-page',
  templateUrl: './perenosnie-nagruzka-page.component.html',
  styleUrls: ['./perenosnie-nagruzka-page.component.scss']
})
export class PerenosnieNagruzkaPageComponent implements OnInit {

  elements: any = [
    {first: 'Наибольший предел взвешивания, т:', last: '15'},
    {first: 'Наименьший предел взвешивания, кг:', last: '100'},
    {first: 'Цена поверочного деления (е), кг:', last: '5'},
    {first: 'Дискретность отсчета (d), кг:', last: '5'},
    {first: 'Количество платформ, шт:', last: '2'},
    {first: 'Степень защиты от пыли и воды (платформа):', last: 'IP 66'},
    {first: 'Степень защиты от пыли и воды (индикатор MERAV2000):', last: 'IP 54'},
    {first: 'Подключение к компьютеру', last: 'RS232'},
    {first: 'Рабочий температурный диапазон (индикатор), С:', last: 'От -5 До +35'},
    {first: 'Напряжение питания от сети:', last: '220В(+10%;-15%); 50 Гц +/-2%'},
    {first: 'Класс точности весов:', last: 'IB'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
