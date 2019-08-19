import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from '../../models/client.model';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private url;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.url = environment.URL_API + '/api/producer/';
  }


  getListClient():Observable<Client> {
    console.log("los datos en el servicio");
    return this.http.get<Client>(this.url).pipe(
      map(data => {
        console.log("los datos para ordenarlos y control de errores");
        return data;
      })
    );
  }

  getOneClient(idx : String) : Observable<Client> {
    return this.http.get<Client>(`${this.url}/`+idx).pipe(
      map(data => {
        console.log("constrol de errores");
        return data;
      })
    );
  }

  newClient(product): Observable<Client> {
    return this.http.post<Client>(`${this.url}/insert`, product).pipe(
      map(data => {
        console.log("control de errores");
        return data;
      })
    );
  }

  updateClient(idx : String): Observable<Client> {
    return this.http.put<Client>(`${this.url}/update`, idx).pipe(
      map(data => {
        console.log("controol de errores");
        return data;
      })
    );
  }

  deleteClient(idx : String): Observable<Client> {
    return this.http.delete<Client>(`${this.url}/delete/` + idx).pipe(
      map(data => {
        console.log("control de errores");
        return data;
      })
    );
  }

}