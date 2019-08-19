import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Organization } from '../../models/organization.model';

@Injectable({
  providedIn: 'root'
})

export class OrganizationService {

  private url;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.url = environment.URL_API + '/api/producer/';
  }


  getListOrganizations():Observable<Organization> {
    console.log("los datos en el servicio");
    return this.http.get<Organization>(this.url).pipe(
      map(data => {
        console.log("los datos para ordenarlos y control de errores");
        return data;
      })
    );
  }

  getOneOrganization(idx : String) : Observable<Organization> {
    return this.http.get<Organization>(`${this.url}/`+idx).pipe(
      map(data => {
        console.log("constrol de errores");
        return data;
      })
    );
  }

  newOrganization(product): Observable<Organization> {
    return this.http.post<Organization>(`${this.url}/insert`, product).pipe(
      map(data => {
        console.log("control de errores");
        return data;
      })
    );
  }

  updateOrganization(idx : String): Observable<Organization> {
    return this.http.put<Organization>(`${this.url}/update`, idx).pipe(
      map(data => {
        console.log("controol de errores");
        return data;
      })
    );
  }

  deleteOrganization(idx : String): Observable<Organization> {
    return this.http.delete<Organization>(`${this.url}/delete/` + idx).pipe(
      map(data => {
        console.log("control de errores");
        return data;
      })
    );
  }

}