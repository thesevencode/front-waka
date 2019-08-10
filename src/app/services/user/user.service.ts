import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, catchError, } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this._loadStorage();
  }

  _sign_up(user: User, data: any) {
    const url = environment.URL_API + '/api/auth/register';
    return this.http.post(url, {user, data})
      .pipe(map((resp: any) => {
        return resp;
      }), catchError(err => {
        Swal.hideLoading();
        Swal.close();
        Swal.fire('Ooops...', err.error.message, 'error');
        return throwError(err);
      }));
  }
  _sign_in(user: User, remenber: boolean = false) {
    if (remenber) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }
    const url = environment.URL_API + '/api/auth/login';
    return this.http.post(url, user)
      .pipe(
        map((resp: any) => {
          this._saveStorage(resp.item.token, resp.item.user);
          return true;
        }), catchError(err => {
          Swal.hideLoading();
          Swal.close();
          Swal.fire('Ooops...', err.error.message, 'error');
          return throwError(err);
        })
      );
  }
  _saveStorage(token: string, user: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }
  _loadStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse( localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }
  _logout() {
    this.token = '';
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home/login']);
  }
  _isLogged() {
    return (this.token.length > 5) ? true : false;
  }
  _renewToken() {
    const url = environment.URL_API + '/login/renewToken?token=' + this.token;
    return this.http.get(url)
      .pipe(
        map((resp: any) => {
          this.token = resp.item.token;
          localStorage.setItem('token', this.token);
          console.log('token renovado');
          return true;
        }), catchError( err => {
          console.log('err ', err);
          this._logout();
          return throwError(err);
        })
      );
  }
  _activateAccount(paramsToken: string) {
    console.log(paramsToken);
    const url = environment.URL_API + '/api/auth/activate/?token=' + paramsToken;
    return this.http.get(url)
      .pipe(
        map((resp: any) => {
          console.log(resp);
          // this.router.navigate(['/login']);
        }), catchError(err => {
          console.log(err);
          this.router.navigate(['/nopagefound']);
          return throwError(err);
        })
      );
  }
}
