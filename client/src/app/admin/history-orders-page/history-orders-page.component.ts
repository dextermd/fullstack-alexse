import {Component,  HostListener, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective} from 'angular-bootstrap-md';
import {OrdersService} from '../../shared/orders.service';
import {Subscription} from 'rxjs';
import {Order} from '../shared/interfaces';


const STEP = 10;




@Component({
  selector: 'app-history-orders-page',
  templateUrl: './history-orders-page.component.html',
  styleUrls: ['./history-orders-page.component.scss']
})
export class HistoryOrdersPageComponent implements OnInit, OnDestroy {

  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;


  elements: any = [];
  headElements = ['№', 'Дата', 'Время', 'Сумма', 'Имя клиента', 'Телефон', 'Тип доставки', 'Email', 'Адрес', 'Имя компании', ];
  searchText = '';
  previous: string;

  selectedOrder: Order;

  orders: Order[] = [];
  isFilterVisible = false;

  offset = 0;
  limit = STEP;

  oSub: Subscription;
  loading = false;
  reloading = false;

  noMoreOrders = false;
  price = 0;

  constructor(
    private ordersService: OrdersService
  ) {
  }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    this.reloading = true;
    this.getAll();
    for (let i = 1; i <= 10; i++) {
      this.elements.push({
        id:
          i.toString(), first: 'Wpis' + (Math.floor(Math.random() * i *
          10)).toString(), last: 'Last' + (Math.floor(Math.random() * i *
          10)).toString(), handle: 'Handle' + (Math.floor(Math.random() * i *
          10)).toString()
      });
    }
    // this.mdbTable.setDataSource(this.elements);
    //
    // this.previous = this.mdbTable.getDataSource();
  }

  private getAll() {
    const params = {
      offset: this.offset,
      limit: this.limit
    };
    this.oSub = this.ordersService.getAll(params).subscribe(orders => {
      this.orders = this.orders.concat(orders);
      this.noMoreOrders = orders.length < STEP;
      this.loading = false;
      this.reloading = false;

    });
  }

  ngOnDestroy(): void {
    if (this.oSub) {
      this.oSub.unsubscribe();
    }
  }

  searchItems() {
    const
      prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements =
        this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.elements =
        this.mdbTable.searchLocalDataByMultipleFields(this.searchText, ['first',
          'last']);
      this.mdbTable.setDataSource(prev);
    }
  }

  loadMore() {
    this.offset += STEP;
    this.loading = true;
    this.getAll();
  }

  // computePrice(order: Order): number {
  //   return order.list.reduce((total, item) => {
  //     return total += item.quantity * item.cost;
  //   }, 0);
  //
  // }



  computePrice(order: Order) {
    return order.list.reduce((total, item): number => {
       return total += (+item.cost + +item.casa[0].price + +item.pandus[0].price + +item.indicator[0].price ) * +item.quantity;
      // return total += (item.cost + item.casa[0].price) * item.quantity;

    }, 0);

  }



  selectOrder(order: Order) {
    this.selectedOrder = order;
  }




}



