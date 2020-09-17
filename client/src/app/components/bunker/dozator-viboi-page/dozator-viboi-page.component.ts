import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dozator-viboi-page',
  templateUrl: './dozator-viboi-page.component.html',
  styleUrls: ['./dozator-viboi-page.component.scss']
})
export class DozatorViboiPageComponent implements OnInit {


  elements: any = [
    {first: 'Производительность по зерну*, т/ч:', last: '9 / 9'},
    {first: 'Вес дозы, кг:', last: '20-50 / 20-50'},
    {first: 'Цена поверочного деления (е), г:', last: '0,05 / 0,05'},
    {first: 'Дискретность отсчета (d), г:', last: '0,05 / 0,05'},
    {first: 'Расход сжатого воздуха не более, нМ3/ч:', last: '- / 2,3'},
    {first: 'Рабочее давление в системе, атм:', last: '- / 4-6'},
    {first: 'Потребляемая мощность, не более, Вт:', last: '45'},
    {first: 'Питание от сети:', last: '220В(+10%;-15%); 50 Гц +/-2%'},
    {first: 'Рабочий температурный диапазон, (контроллер MERAV3001), С:', last: 'От 0 До +40'},
    {first: 'Рабочий температурный диапазон, (бункер), С:', last: 'От -5 До +35'},
    {first: 'Количество датчиков, шт:', last: '1'},
    {first: 'Класс точности по ГОСТ 10223-97:', last: '1 (0,5%)'},
    {first: 'Габаритные размеры, мм:', last: '735 Х 1050 Х 2475 / 850 Х 850 Х 2155'},
    {first: 'Защита от пыли и влаги (контроллер MERAV3001):', last: 'IP54'},
    {first: 'Защита от пыли и влаги (датчики):', last: 'IP68'},
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
