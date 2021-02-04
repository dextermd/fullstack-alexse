import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message, Product} from '../admin/shared/interfaces';


@Injectable({providedIn: 'root'})

export class ProductService {

  lol: File;

  httpHeaders = new HttpHeaders({'Content-type': 'application-json'});

  constructor(private http: HttpClient) {

  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/position',);
  }

  getByIdProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`/api/position/${id}`);
  }

  getByCatIdProductAll(subcategoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/position/subcategory/${subcategoryId}`);
  }


  create(
    name: string,
    nameRo: string,
    nameEn: string,
    code: string,
    subcategory: string,
    cost: any,
    oldCost: any,
    content: string,
    contentRo: string,
    contentEn: string,
    spec: string,
    specRo: string,
    specEn: string,
    certificate: string,
    functions: string,
    functionsRo: string,
    functionsEn: string,
    casa: any,
    pandus: any,
    indicator: any,
    option: any,
    active: any,
    sale: any,
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
    fd.append('nameRo', nameRo);
    fd.append('nameEn', nameEn);
    fd.append('code', code);
    fd.append('subcategory', subcategory);
    fd.append('cost', cost);
    fd.append('oldCost', oldCost);
    fd.append('content', content);
    fd.append('contentRo', contentRo);
    fd.append('contentEn', contentEn);
    fd.append('spec', spec);
    fd.append('specRo', specRo);
    fd.append('specEn', specEn);
    fd.append('certificate', certificate);
    fd.append('functions', functions);
    fd.append('functionsRo', functionsRo);
    fd.append('functionsEn', functionsEn);
    fd.append('casa', casa);
    fd.append('pandus', pandus);
    fd.append('indicator', indicator);
    fd.append('option', option);
    fd.append('active', active);
    fd.append('sale', sale);


    return this.http.post<Product>('/api/position', fd);
  }


  update(id: string,
         name: string,
         nameRo: string,
         nameEn: string,
         code: string,
         subcategory: string,
         cost: any,
         oldCost: any,
         content: string,
         contentRo: string,
         contentEn: string,
         spec: string,
         specRo: string,
         specEn: string,
         certificate: string,
         functions: string,
         functionsRo: string,
         functionsEn: string,
         casa: any,
         pandus: any,
         indicator: any,
         option: any,
         active: any,
         sale: any,
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
    fd.append('nameRo', nameRo);
    fd.append('nameEn', nameEn);
    fd.append('code', code);
    fd.append('subcategory', subcategory);
    fd.append('cost', cost);
    fd.append('oldCost', oldCost);
    fd.append('content', content);
    fd.append('contentRo', contentRo);
    fd.append('contentEn', contentEn);
    fd.append('spec', spec);
    fd.append('specRo', specRo);
    fd.append('specEn', specEn);
    fd.append('certificate', certificate);
    fd.append('functions', functions);
    fd.append('functionsRo', functionsRo);
    fd.append('functionsEn', functionsEn);
    fd.append('casa', casa);
    fd.append('pandus', pandus);
    fd.append('indicator', indicator);
    fd.append('option', option);
    fd.append('active', active);
    fd.append('sale', sale);


    return this.http.patch<Product>(`/api/position/${id}`, fd);
  }


  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/position/${id}`);
  }


  updateImage(id: string, image?: File): Observable<Product> {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    return this.http.patch<Product>(`/api/position/image/${id}`, fd);
  }


  updateImageOne(id: string, imageOne?: File,): Observable<Product> {
    const fd = new FormData();
    if (imageOne) {
      fd.append('imageOne', imageOne, imageOne.name);
    }
    return this.http.patch<Product>(`/api/position/imageOne/${id}`, fd);
  }


  updateImageTwo(id: string, imageTwo?: File): Observable<Product> {
    const fd = new FormData();
    if (imageTwo) {
      fd.append('imageTwo', imageTwo, imageTwo.name);
    }
    return this.http.patch<Product>(`/api/position/imageTwo/${id}`, fd);
  }


  updateImageThree(id: string, imageThree?: File): Observable<Product> {
    const fd = new FormData();
    if (imageThree) {
      fd.append('imageThree', imageThree, imageThree.name);
    }
    return this.http.patch<Product>(`/api/position/imageThree/${id}`, fd);
  }


  updateImageFour(id: string, imageFour?: File): Observable<Product> {
    const fd = new FormData();
    if (imageFour) {
      fd.append('imageFour', imageFour, imageFour.name);
    }
    return this.http.patch<Product>(`/api/position/imageFour/${id}`, fd);
  }

}
