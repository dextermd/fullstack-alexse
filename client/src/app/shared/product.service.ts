import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message, Product} from '../admin/shared/interfaces';


@Injectable({providedIn: 'root'})
export class ProductService {


  httpHeaders = new HttpHeaders({'Content-type': 'application-json'});

  constructor(private http: HttpClient) {

  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/position');
  }

  getByIdProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`/api/position/${id}`);
  }

  getByCatIdProductAll(subcategoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/position/subcategory/${subcategoryId}`);
  }


  create(name: string,
         subcategory: string,
         cost: any,
         oldCost: any,
         content: string,
         spec: string,
         casa: any,
         pandus: any,
         indicator: any,
         image?: File,
         imageOne?: File,
         imageTwo?: File,
         imageThree?: File,
         imageFour?: File
  ): Observable<Product> {
    const fd = new FormData();
    console.log(image);
    if (image) {
      fd.append('image', image, image.name);
    }

    if (imageOne) {
      fd.append('imageOne', imageOne, imageOne.name);
    }
    if (imageTwo) {
      fd.append('imageTwo', imageTwo, imageTwo.name);
    }

    if (imageThree) {
      fd.append('imageThree', imageThree, imageThree.name);
    }

    if (imageFour) {
      fd.append('imageFour', imageFour, imageFour.name);
    }


    fd.append('name', name);
    fd.append('subcategory', subcategory);
    fd.append('cost', cost);
    fd.append('oldCost', oldCost);
    fd.append('content', content);
    fd.append('spec', spec);
    fd.append('casa', casa);
    fd.append('pandus', pandus);
    fd.append('indicator', indicator);



    return this.http.post<Product>('/api/position', fd);
  }


  update(id: string,
         name: string,
         subcategory: string,
         cost: any,
         oldCost: any,
         content: string,
         spec: string,
         casa: any,
         pandus: any,
         indicator: any,
         image?: File,
         imageOne?: File,
         imageTwo?: File,
         imageThree?: File,
         imageFour?: File
  ): Observable<Product> {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    if (imageOne) {
      fd.append('imageOne', imageOne, imageOne.name);
    }
    if (imageTwo) {
      fd.append('imageTwo', imageTwo, imageTwo.name);
    }
    if (imageThree) {
      fd.append('imageThree', imageThree, imageThree.name);
    }
    if (imageFour) {
      fd.append('imageFour', imageFour, imageFour.name);
    }
    fd.append('name', name);
    fd.append('subcategory', subcategory);
    fd.append('cost', cost);
    fd.append('oldCost', oldCost);
    fd.append('content', content);
    fd.append('spec', spec);
    fd.append('casa', casa);
    fd.append('pandus', pandus);
    fd.append('indicator', indicator);

    return this.http.patch<Product>(`/api/position/${id}`, fd);
  }


  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/position/${id}`);
  }


}
