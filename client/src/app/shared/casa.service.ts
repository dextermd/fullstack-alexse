import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CasaOption, Message} from '../admin/shared/interfaces';

@Injectable({providedIn: 'root'})
export class CasaService {

  httpHeaders = new HttpHeaders({'Content-type': 'application-json'});
  constructor( private http: HttpClient) {}


  getAll(): Observable<CasaOption[]> {
    return this.http.get<CasaOption[]>('/api/casa');
  }

  getById(id: string): Observable<CasaOption> {
    return this.http.get<CasaOption>(`/api/casa/${id}`);
  }

  create(name: string, price: any): Observable<CasaOption>  {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('price', price);

    return this.http.post<CasaOption>('/api/casa', fd);
  }


  update(id: string, name: string, price: any): Observable<CasaOption>  {
    const fd = new FormData();

    fd.append('name', name);
    fd.append('price', price);

    return this.http.patch<CasaOption>(`/api/casa/${id}`, fd);
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/casa/${id}`);
  }


}
