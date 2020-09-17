import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vagon-page',
  templateUrl: './vagon-page.component.html',
  styleUrls: ['./vagon-page.component.scss']
})
export class VagonPageComponent implements OnInit {


  elements: any = [
    {first: 'Наибольший предел взвешивания, т:', last: '120'},
    {first: 'Наименьший предел взвешивания, кг:', last: '1000'},
    {first: 'Цена поверочного деления (е), кг:', last: '50'},
    {first: 'Дискретность отсчета (d), кг:', last: '50'},
    {first: 'Количество платформ, шт:', last: '2 (3)'},
    {first: 'Длина грузоприемных платформ, м:', last: '5.5 (4)'},
    {first: 'Количество датчиков, шт:', last: '8 (12)'},
    {first: 'Степень защиты от пыли и воды (платформа):', last: 'IP 68'},
    {first: 'Степень защиты от пыли и воды (индикатор MERAV2000):', last: 'IP 67'},
    {first: 'Рабочий температурный диапазон (платформа), С:', last: 'От -30 До +45'},
    {first: 'Рабочий температурный диапазон (индикатор), С:', last: 'От 0 До +40'},
    {first: 'Напряжение питания от сети:', last: '220В(+10%;-15%); 50 Гц +/-2%'},
    {first: 'Класс точности весов:', last: 'Средний (III)'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
