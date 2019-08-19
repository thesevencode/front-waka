import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Products } from '../../models/products.model';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  private url;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.url = environment.URL_API + '/api/product/';
  }


  getListProducts():Observable<Products[]> {
    console.log("los datos en el servicio");
    return this.http.get<any>(this.url).pipe(
      map(data => {
        return this.changeDate(data.item);
      })
    )
  }

  public changeDate(date) {
    var newDate = [];
    newDate = date;
    for(let i = 1 ; i < newDate.length; i++) {
      for(let j = 0 ; j < newDate.length - 1; j++){
        if(newDate[i].createdAt > newDate[j].createdAt) {
          let aux = newDate[i].createdAt;
          newDate[i].createdAt = newDate[j].createdAt;
          newDate[j].createdAt = aux;
        }
      }
    }
    return newDate;
  }

  getOneProduct(idx : String):Observable<Products> {
    console.log("asdasd",idx);
    return this.http.get<any>(`${this.url}/id_product/${idx}`);
  }


  buyProduct() {
    console.log("se va a comprar productos");
  }

}
