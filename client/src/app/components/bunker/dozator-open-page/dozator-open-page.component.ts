import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dozator-open-page',
  templateUrl: './dozator-open-page.component.html',
  styleUrls: ['./dozator-open-page.component.scss']
})
export class DozatorOpenPageComponent implements OnInit {


  elements: any = [
    {one: 'BSN-50D1.3', two: 'Открытый От -10 до +45 °C От 0 до +40 °C', three: '18', four: '50', five: '0,02', six: '2,3', seven: '1075х983х 1140', eight: '128', nine: 'RS232', ten: 'Средний (III)'},
    {one: 'BXN-100D1.3', two: 'Открытый  От -10 до +45 °C От 0 до +40 °C', three: '30', four: '100', five: '0,05', six: '2,3', seven: '1075х983х 1430', eight: '169', nine: 'RS232', ten: 'Средний (III)'},
    {one: 'BXN-200D1.3', two: 'Открытый  От -10 до +45 °C От 0 до +40 °C', three: '60', four: '200', five: '0,1', six: '3,6', seven: '1150х1075х1390', eight: '212', nine: 'RS232', ten: 'Средний (III)'},
    {one: 'BXN-300D1.3', two: 'Открытый От -10 до +45 °C От 0 до +40 °C', three: '90', four: '300', five: '0,1', six: '5,7', seven: '1317х1206х1526', eight: '260', nine: 'RS232', ten: 'Средний (III)'},
    {one: 'BXN-200D1.3', two: 'Закрытый От -20 до +45 °C От 0 до +40 °C', three: '60', four: '200', five: '0,1', six: '5,7', seven: '1300x1300x2000', eight: '520', nine: 'RS232', ten: 'Средний (III)'},
    {one: 'BXN-300D1.3', two: 'Закрытый От -20 до +45 °C От 0 до +40 °C', three: '90', four: '300', five: '0,1', six: '5,7', seven: '1380x1380x2120', eight: '620', nine: 'RS232', ten: 'Средний (III)'},
    {one: 'BXN-500D1.3', two: 'Закрытый От -20 до +45 °C От 0 до +40 °C', three: '120', four: '500', five: '0,1', six: '5,7', seven: '1520x1520x 2710', eight: '780', nine: 'RS232', ten: 'Средний (III)'},

  ];

  headElements = [
    'Модель',
    'Тип/Рабочий температурный диапазон:- для исполнительных элементов/Контроллера  MERAV3001',
    'Производи-тельность по зерну*, т/ч',
    'Наибольший предел взвешивания (максимальная доза), кг:',
    'Цена поверочного деления (е), кг:',
    'Расход сжатого воздуха не более, нМ3/ч:',
    'Габаритные размеры, мм:',
    'Вес, кг',
    'Подключение к компьютеру',
    'Класс точности весов',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
