import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message, PostCategory} from '../admin/shared/interfaces';

@Injectable({providedIn: 'root'})
export class PostCategoryService {

  httpHeaders = new HttpHeaders({'Content-type': 'application-json'});
  constructor( private http: HttpClient) {}


  getAllCategory(): Observable<PostCategory[]> {
    return this.http.get<PostCategory[]>('/api/postcategory');
  }

  getByIdCategory(id: string): Observable<PostCategory> {
    return this.http.get<PostCategory>(`/api/postcategory/${id}`);
  }

  create(name: string): Observable<PostCategory>  {
    const fd = new FormData();
    fd.append('name', name);

    return this.http.post<PostCategory>('/api/postcategory', fd);
  }


  update(id: string, name: string, image?: File): Observable<PostCategory>  {
    const fd = new FormData();
    fd.append('name', name);

    return this.http.patch<PostCategory>(`/api/postcategory/${id}`, fd);
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/postcategory/${id}`);
  }


}
