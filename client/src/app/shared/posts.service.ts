import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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



  create(
    title: string,
    titleRo: string,
    titleEn: string,
    category: string,
    content: string,
    contentRo: string,
    contentEn: string,
    preview: string,
    previewRo: string,
    previewEn: string,
    image?: File
  ): Observable<Post>  {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('title', title);
    fd.append('titleRo', titleRo);
    fd.append('titleEn', titleEn);
    fd.append('category', category);
    fd.append('content', content);
    fd.append('contentRo', contentRo);
    fd.append('contentEn', contentEn);
    fd.append('preview', preview);
    fd.append('previewRo', previewRo);
    fd.append('previewEn', previewEn);

    return this.http.post<Post>('/api/post', fd);
  }


  update(
    id: string,
    title: string,
    titleRo: string,
    titleEn: string,
    category: string,
    content: string,
    contentRo: string,
    contentEn: string,
    preview: string,
    previewRo: string,
    previewEn: string,
    image?: File
  ): Observable<Post>  {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('title', title);
    fd.append('titleRo', titleRo);
    fd.append('titleEn', titleEn);
    fd.append('category', category);
    fd.append('content', content);
    fd.append('contentRo', contentRo);
    fd.append('contentEn', contentEn);
    fd.append('preview', preview);
    fd.append('previewRo', previewRo);
    fd.append('previewEn', previewEn);

    return this.http.patch<Post>(`/api/post/${id}`, fd);
  }



  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/post/${id}`);
  }




}
