import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';





@Injectable({providedIn: 'root'})

export class CartService {



  cart$ = new BehaviorSubject([]);



  httpHeaders = new HttpHeaders({'Content-type': 'application-json'});

  constructor( private http: HttpClient) {}




  addToCart(id, body){
    return this.http.put(`/api/cart/${id}`, body);
  }

}
