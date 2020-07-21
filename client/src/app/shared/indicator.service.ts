import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IndicatorOption, Message} from '../admin/shared/interfaces';

@Injectable({providedIn: 'root'})
export class IndicatorService {

  httpHeaders = new HttpHeaders({'Content-type': 'application-json'});
  constructor( private http: HttpClient) {}


  getAll(): Observable<IndicatorOption[]> {
    return this.http.get<IndicatorOption[]>('/api/indicator');
  }

  getById(id: string): Observable<IndicatorOption> {
    return this.http.get<IndicatorOption>(`/api/indicator/${id}`);
  }

  create(name: string, price: any): Observable<IndicatorOption>  {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('price', price);

    return this.http.post<IndicatorOption>('/api/indicator', fd);
  }


  update(id: string, name: string, price: any): Observable<IndicatorOption>  {
    const fd = new FormData();

    fd.append('name', name);
    fd.append('price', price);

    return this.http.patch<IndicatorOption>(`/api/indicator/${id}`, fd);
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/indicator/${id}`);
  }


}
