import {Component, NgModule, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../shared/product.service';
import {CartService} from '../../shared/cart.service';
import {OrderService} from '../../shared/order.service';
import {Order, OrderProduct} from '../../admin/shared/interfaces';
import {OrdersService} from '../../shared/orders.service';
import {AlertService} from '../../admin/shared/services/alert.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocalService} from '../../shared/local.service';
import { NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  providers: [OrderService]

})
export class CartPageComponent implements OnInit, OnDestroy {

  private success = new BehaviorSubject<string>('Email Sent! Thank you =)');
  private failed = new BehaviorSubject<string>('Something went wrong!');
  successMessage: string;
  failedMessage: string;


  ficat: [] = [];
  form: FormGroup;
  cartItems = [];
  cart = [];
  panding = false;
  oSub: Subscription;
  isDisabled = true;
  typeShip: string;
  isDisableAdr = true;
  orderNumber = 'Отсчет заказов';
  orderState = false;

  constructor(
    config: NgbPopoverConfig,
    private productService: ProductService,
    private cartService: CartService,
    public order: OrderService,
    public ordersService: OrdersService,
    private alert: AlertService,
    private localService: LocalService
  ) {
    config.triggers = 'hover';
  }


  ngOnInit(): void {
    this.ficat = [];
    console.log(this.ficat);
    this.typeShip = 'Забрать самостоятельно';
    // this.order.list = JSON.parse(localStorage.getItem('list'));
    // this.order.price = JSON.parse(localStorage.getItem('price'));

    this.order.list = this.localService.getJsonValue('list');
    this.order.price = this.localService.getJsonValue('price');
    console.log(this.order.list);
    if (this.order.list.length !== 0){
      this.orderState = true;
    } else {
      this.orderState = false;
    }

    this.form = new FormGroup({
      c_name: new FormControl(null, Validators.required),
      c_phone: new FormControl(null, [Validators.required , Validators.pattern('^[0-9]*$')]),
      c_email: new FormControl(null, [Validators.required , Validators.email]),
      c_type_shipping: new FormControl(this.typeShip, Validators.required),
      c_address_shipping: new FormControl({value: '', disabled: true}, Validators.required),
      c_company_name: new FormControl({value: '', disabled: true}, Validators.required),
      c_comment: new FormControl(null),
    });


  }

  ngOnDestroy(): void {
    if (this.oSub) {
      this.oSub.unsubscribe();
    }
  }

  removePosition(orderProduct: OrderProduct) {
    this.order.remove(orderProduct);
  }


  register(type: string) {

    this.typeShip = type;
    console.log(type);
    if (this.typeShip === 'по Кишиневу' || this.typeShip === 'по Молдове') {
      this.form.controls.c_address_shipping.enable();
    } else {
      this.form.controls.c_address_shipping.setValue(null);
      this.form.controls.c_address_shipping.disable();

    }

  }

  onSubmit() {
    this.panding = true;
    const order: Order = {
      c_name: this.form.value.c_name,
      c_phone: this.form.value.c_phone,
      c_email: this.form.value.c_email,
      c_type_shipping: this.typeShip,
      c_address_shipping: this.form.value.c_address_shipping,
      c_company_name: this.form.value.c_company_name,
      c_comment: this.form.value.c_comment,
      total_cost: this.order.price,
      order_number: this.orderNumber,
      list: this.order.list.map(item => {
        delete item._id;
        return item;
      })
    };
    this.oSub = this.ordersService.create(order).subscribe(
      newOrder => {
        this.alert.success(`Заказ №${newOrder.order} был добавлен`);
      },
      error => {
        this.alert.success(error.error.message);
      },
      () => {

        this.ordersService.sendEmail(order).subscribe(
          data => {
            console.log(`${data.c_email} был отправлен`);
          }
        );


        this.localService.clearToken();
        this.orderState = false;



        this.panding = false;


        setTimeout(() => {
          location.reload();
        }, 10000);
      }
    );
  }


  triggerSomeEvent() {
    if (this.isDisableAdr) {
      this.form.controls.c_company_name.enable();
      this.isDisableAdr = false;
    } else {
      this.form.controls.c_company_name.disable();
      this.form.controls.c_company_name.setValue(null);
      this.isDisableAdr = true;
    }


  }


  onOpen(event: any) {
    console.log(event);
  }


  reloadCart() {
    setTimeout(() => {
      location.reload();
    }, 1500);

  }


}


