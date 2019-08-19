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

export class ProducerService {

  private url;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.url = environment.URL_API + '/api/product/';
  }

  getAllCategories():Observable<any>{
    return this.http.get<any>(`${this.url}/categorie`);
  }

  // getListProducers():Observable<Producer> {
  //   console.log("los datos en el servicio");
  //   return this.http.get<Producer>(this.url).pipe(
  //     map(data => {
  //       console.log("los datos para ordenarlos y control de errores");
  //       return data;
  //     })
  //   );
  // }

  // getOneProducer(idx : String) : Observable<Producer> {
  //   return this.http.get<Producer>(`${this.url}/`+idx).pipe(
  //     map(data => {
  //       console.log("constrol de errores");
  //       return data;
  //     })
  //   );
  // }

  // newProducer(product): Observable<Producer> {
  //   return this.http.post<Producer>(`${this.url}/insert`, product).pipe(
  //     map(data => {
  //       console.log("control de errores");
  //       return data;
  //     })
  //   );
  // }

  // updateProducer(idx : String): Observable<Producer> {
  //   return this.http.put<Producer>(`${this.url}/update`, idx).pipe(
  //     map(data => {
  //       console.log("controol de errores");
  //       return data;
  //     })
  //   );
  // }

  // deleteProducer(idx : String): Observable<Producer> {
  //   return this.http.delete<Producer>(`${this.url}/delete/` + idx).pipe(
  //     map(data => {
  //       console.log("control de errores");
  //       return data;
  //     })
  //   );
  // }

}