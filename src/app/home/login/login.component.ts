import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import Swal from 'sweetalert2';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  remember: Boolean = false;
  email: string;

  constructor(
    private router: Router,
    public _userService: UserService
  ) {
  }

  ngOnInit() {
    this.verifyRemember();
  }
  verifyRemember() {
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.remember = true;
    }
  }
  sign_in(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const user = new User(form.value.email, form.value.password, null, null);
    Swal.fire({
      title: 'Verificando Credenciales',
      onBeforeOpen: () => {
        Swal.showLoading();
        this._userService._sign_in(user, form.value.remember)
          .subscribe(resp => {
            Swal.hideLoading();
            Swal.close();
            this.router.navigate(['/']);
          });
      },
    });
  }

}
