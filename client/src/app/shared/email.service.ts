import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message, Order, PandusOption} from '../admin/shared/interfaces';

@Injectable({providedIn: 'root'})
export class EmailService {

  httpHeaders = new HttpHeaders({'Content-type': 'application-json'});
  constructor( private http: HttpClient) {}

  sendQuestion(question: any): Observable<Order>{
    return this.http.post<Order>('api/sendmail/question', question);
  }

  sendCallBack(call: any): Observable<Order>{
    return this.http.post<Order>('api/sendmail/callback', call);
  }
}
