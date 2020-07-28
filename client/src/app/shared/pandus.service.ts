import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message, PandusOption} from '../admin/shared/interfaces';

@Injectable({providedIn: 'root'})
export class PandusService {

  httpHeaders = new HttpHeaders({'Content-type': 'application-json'});
  constructor( private http: HttpClient) {}


  getAll(): Observable<PandusOption[]> {
    return this.http.get<PandusOption[]>('/api/pandus');
  }

  getById(id: string): Observable<PandusOption> {
    return this.http.get<PandusOption>(`/api/pandus/${id}`);
  }

  create(name: string, content: string, price: any, image?: File): Observable<PandusOption>  {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('name', name);
    fd.append('content', content);
    fd.append('price', price);

    return this.http.post<PandusOption>('/api/pandus', fd);
  }


  update(id: string, name: string, content: string, price: any, image?: File): Observable<PandusOption>  {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('name', name);
    fd.append('content', content);
    fd.append('price', price);


    return this.http.patch<PandusOption>(`/api/pandus/${id}`, fd);
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/pandus/${id}`);
  }


}
