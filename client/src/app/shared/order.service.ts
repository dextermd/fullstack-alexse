import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderProduct, Product} from '../admin/shared/interfaces';
import {LocalService} from './local.service';

@Injectable({providedIn: 'root'})

export class OrderService {

  public list;
  public price = 0;
  public cartItems;

  httpHeaders = new HttpHeaders({'Content-type': 'application-json'});

  constructor(
    private http: HttpClient,
    private localService: LocalService
  ) {
  }


  add(position) {
    const orderPosition: OrderProduct = Object.assign({}, {
      name: position.name,
      img: position.img[0].path,
      cost: position.cost,
      quantity: position.quantity,
      casa:
        [{
          name: null,
          price: null
        }]
      ,
      indicator:
        [{
          name: null,
          content: null,
          img: '',
          price: null
        }]
      ,
      pandus:
        [{
          name: null,
          content: null,
          img: '',
          price: null
        }]
      ,
      _id: position._id
    });

    console.log(this.localService.getJsonValue('list'));

    if (this.localService.getJsonValue('list') === null || this.localService.getJsonValue('list').length === 0 ) {
      this.list = [];
      this.price = 0;
      this.cartItems = 0;

    } else {

      this.localService.getJsonValue('list');
      this.localService.getJsonValue('price');
      this.localService.getJsonValue('cartItems');

    }

    const candidate = this.list.find(p => p._id === orderPosition._id);
    if (candidate) {
      candidate.quantity += orderPosition.quantity;
      this.cartItems += orderPosition.quantity;
    } else {
      this.list.push(orderPosition);
      this.cartItems += orderPosition.quantity;
    }


    this.computePrice();

    this.localService.setJsonValue('list', this.list);
    this.localService.setJsonValue('price', this.price);
    this.localService.setJsonValue('cartItems', this.cartItems);
  }


  addCasa(position, casaName?, casaPrice?, selectedIndicator?, priceIndicator?) {
    const orderPosition: OrderProduct = Object.assign({}, {
      name: position.name,
      img: position.img[0].path,
      cost: position.cost,
      quantity: position.quantity,
      casa:
        [{
          name: casaName,
          price: casaPrice
        }]
      ,
      indicator:
        [{
          name: selectedIndicator,
          content: null,
          img: '',
          price: priceIndicator
        }]
      ,
      pandus:
        [{
          name: null,
          content: null,
          img: '',
          price: null
        }]
      ,
      _id: position._id
    });


    if (this.localService.getJsonValue('list') === null || this.localService.getJsonValue('list').length === 0) {
      this.list = [];
      this.price = 0;
      this.cartItems = 0;

    } else {

      this.localService.getJsonValue('list');
      this.localService.getJsonValue('price');
      this.localService.getJsonValue('cartItems');
    }

    const candidateCasaName = this.list.find(p => p._id === orderPosition._id && p.casa[0].name === orderPosition.casa[0].name && p.indicator[0].name === orderPosition.indicator[0].name);
    if (candidateCasaName) {
      candidateCasaName.quantity += orderPosition.quantity;
      this.cartItems += orderPosition.quantity;
    } else {
      this.list.push(orderPosition);
      this.cartItems += orderPosition.quantity;
    }


    this.computePrice();

    this.localService.setJsonValue('list', this.list);
    this.localService.setJsonValue('price', this.price);
    this.localService.setJsonValue('cartItems', this.cartItems);

  }


  addInd(position, casaName?, casaPrice?, indicatorName?, indicatorPrice?) {
    const orderPosition: OrderProduct = Object.assign({}, {
      name: position.name,
      img: position.img[0].path,
      cost: position.cost,
      quantity: position.quantity,
      casa:
        [{
          name: null,
          price: null
        }]
      ,
      indicator:
        [{
          name: casaName,
          content: null,
          img: '',
          price: casaPrice
        }]
      ,
      pandus:
        [{
          name: indicatorName,
          content: null,
          img: '',
          price: indicatorPrice
        }]
      ,
      _id: position._id
    });


    if (this.localService.getJsonValue('list') === null || this.localService.getJsonValue('list').length === 0) {
      this.list = [];
      this.price = 0;
      this.cartItems = 0;

    } else {

      this.localService.getJsonValue('list');
      this.localService.getJsonValue('price');
      this.localService.getJsonValue('cartItems');

    }
    const candidateIndicatorAndPandus = this.list.find(
      p => p._id === orderPosition._id &&
        p.indicator[0].name === orderPosition.indicator[0].name &&
        p.pandus[0].name === orderPosition.pandus[0].name
    );
    if (candidateIndicatorAndPandus) {
      candidateIndicatorAndPandus.quantity += orderPosition.quantity;
      this.cartItems += orderPosition.quantity;
    } else {
      this.list.push(orderPosition);
      this.cartItems += orderPosition.quantity;
    }


    this.computePrice();

    this.localService.setJsonValue('list', this.list);
    this.localService.setJsonValue('price', this.price);
    this.localService.setJsonValue('cartItems', this.cartItems);


  }


  remove(orderPosition: OrderProduct) {
    // tslint:disable-next-line:max-line-length
    const idx = this.list.findIndex(p => p._id === orderPosition._id && p.indicator[0].name === orderPosition.indicator[0].name && p.pandus[0].name === orderPosition.pandus[0].name && p.casa[0].name === orderPosition.casa[0].name);
    this.list.splice(idx, 1);

    this.computePrice();
    // this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.cartItems = this.localService.getJsonValue('cartItems');
    this.cartItems -= orderPosition.quantity;

    this.localService.setJsonValue('list', this.list);
    this.localService.setJsonValue('price', this.price);
    this.localService.setJsonValue('cartItems', this.cartItems);

    location.reload();

  }

  clear() {

  }


  private computePrice() {
    this.price = this.list.reduce((total, item, optionPrice) => {
      return total += (item.cost + item.casa[0].price + item.pandus[0].price + item.indicator[0].price) * item.quantity;
      // return total += (item.cost + item.casa[0].price) * item.quantity;

    }, 0);
  }

}




