import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    public _userService: UserService,
    private router: Router
  ) {

  }

  canActivate(): boolean {
    console.log('guard ', this._userService._isLogged());

    if (this._userService._isLogged()) {
      console.log('pasando');
      return true;
    } else {
      console.log('bloueado por el guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
