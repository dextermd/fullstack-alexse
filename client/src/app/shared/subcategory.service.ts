import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SubCategory, Message} from '../admin/shared/interfaces';

@Injectable({providedIn: 'root'})
export class SubcategoryService {

  httpHeaders = new HttpHeaders({'Content-type': 'application-json'});
  constructor( private http: HttpClient) {}


  getAllCategory(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>('/api/subcategory');
  }

  getByIdCategory(id: string): Observable<SubCategory> {
    return this.http.get<SubCategory>(`/api/subcategory/${id}`);
  }

  create(
    name: string,
    nameRo: string,
    nameEn: string,
    desc: string,
    descRo: string,
    descEn: string,
    num: any,
    category: string
  ): Observable<SubCategory>  {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('nameRo', nameRo);
    fd.append('nameEn', nameEn);
    fd.append('desc', desc);
    fd.append('descRo', descRo);
    fd.append('descEn', descEn);
    fd.append('num', num);
    fd.append('category', category);

    return this.http.post<SubCategory>('/api/subcategory', fd);
  }


  update(
    id: string,
    name: string,
    nameRo: string,
    nameEn: string,
    desc: string,
    descRo: string,
    descEn: string,
    num: any,
    category: string
  ): Observable<SubCategory>  {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('nameRo', nameRo);
    fd.append('nameEn', nameEn);
    fd.append('desc', desc);
    fd.append('descRo', descRo);
    fd.append('descEn', descEn);
    fd.append('num', num);
    fd.append('category', category);

    return this.http.patch<SubCategory>(`/api/subcategory/${id}`, fd);
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/subcategory/${id}`);
  }


}
