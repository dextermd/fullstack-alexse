import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Message, Post} from '../admin/shared/interfaces';


@Injectable({providedIn: 'root'})
export class PostsService {
  constructor( private http: HttpClient) {

  }
  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/post');
  }

  getByIdPost(id: string): Observable<Post> {
    return this.http.get<Post>(`/api/post/${id}`);
  }

  getByCatIdPostAll(categoryId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`/api/post/category/${categoryId}`);
  }



  create(title: string, category: string, content: string, preview: string, image?: File): Observable<Post>  {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('title', title);
    fd.append('category', category);
    fd.append('content', content);
    fd.append('preview', preview);

    return this.http.post<Post>('/api/post', fd);
  }


  update(id: string, title: string, category: string, content: string, preview: string, image?: File): Observable<Post>  {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('title', title);
    fd.append('category', category);
    fd.append('content', content);
    fd.append('preview', preview);

    return this.http.patch<Post>(`/api/post/${id}`, fd);
  }



  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/post/${id}`);
  }




}
