import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producer } from '../../models/producer.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.url = environment.URL_API + '/api/product/';
  }

  createProduct(product) {
    const token = localStorage.getItem('token');
    return this.http.post<any>(`${this.url}?token=${token}`, product).toPromise();
  }
}
