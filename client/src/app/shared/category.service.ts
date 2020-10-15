import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category, Message} from '../admin/shared/interfaces';

@Injectable({providedIn: 'root'})
export class CategoryService {

  httpHeaders = new HttpHeaders({'Content-type': 'application-json'});
  constructor( private http: HttpClient) {}


  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/category', {headers: this.httpHeaders});
  }

  getByIdCategory(id: string): Observable<Category> {
    return this.http.get<Category>(`/api/category/${id}`);
  }

  create(
    name: string,
    nameRo: string,
    nameEn: string,
    image?: File
  ): Observable<Category>  {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('name', name);
    fd.append('nameRo', nameRo);
    fd.append('nameEn', nameEn);

    return this.http.post<Category>('/api/category', fd);
  }


  update(
    id: string,
    name: string,
    nameRo: string,
    nameEn: string,
    image?: File
  ): Observable<Category>  {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('name', name);
    fd.append('nameRo', nameRo);
    fd.append('nameEn', nameEn);

    return this.http.patch<Category>(`/api/category/${id}`, fd);
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/category/${id}`);
  }


}
