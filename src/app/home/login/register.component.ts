import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/service.index';
import { User } from '../../models/user.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Client } from '../../models/client.model';
import { Producer } from '../../models/producer.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(
    public _userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.configFormGroup();
  }
  configFormGroup() {
    this.form = new FormGroup({
      name: new FormControl( null, Validators.required),
      lastname: new FormControl( null, Validators.required),
      email: new FormControl( null, [Validators.required, Validators.email]),
      password: new FormControl( null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
        ])
        ),
      password2: new FormControl( null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      type: new FormControl( null, Validators.required),
      terms: new FormControl( null, Validators.requiredTrue )
    },
    this.passwordMatchValidator
    // { validators: this.verifySamePassword('password', 'password2')}
    );

    this.form.setValue({
      name: 'ciro',
      lastname: 'Yupanqui',
      email: 'ciriusblb@gmail.com',
      password: 'El4-gini',
      password2: 'El4-gini',
      type: 'client',
      terms: true
    });
  }
  sign_up() {
    console.log(this.findInvalidControls());
    if (this.form.invalid) {
      console.log('formulario invalido');
      return;
    }
    // ingresa estos datos al model de usuario
    const user = new User(
      this.form.value.email,
      this.form.value.password,
      this.form.value.type,
      this.form.value.terms
    );
    const data = this.setDataType(this.form.value.type);
    console.log('user ', {user, data});

    Swal.fire({
      title: 'Registrando Usuario',
      html: 'Esto puede tomar unos segundos...',
      onBeforeOpen: () => {
        Swal.showLoading();
        this._userService._sign_up(user, data)
        .subscribe((resp: any) => {
          console.log(resp);
          Swal.hideLoading();
          Swal.close();
          Swal.fire('Usuario creado', resp.item.email, 'success');
          this.router.navigate(['/home/login']);
        });
      },
    });

  }
  // verifySamePassword(campo1: string, campo2: string) { // en una funcion de validacion el return es el error
  //   return (group: FormGroup) => {
  //     const pass1 = group.controls[campo1].value;
  //     const pass2 = group.controls[campo2].value;
  //     if (pass1 === pass2) {
  //       return null;
  //     }
  //     return{
  //       sonIguales: true
  //     };
  //   };
  // }
  passwordMatchValidator(g: FormGroup) {
    if (g.get('password').value !== g.get('password2').value) {
      g.get('password2').setErrors({ mismatch: true });
      return {'mismatch': true};
    }
    return null;
    // return g.get('password').value === g.get('password2').value
    //   //  ? null : {'mismatch': true};
    //   ? null : g.get('password2').setErrors({ mismatch: true });
  }
  findInvalidControls() { // encontrar los controles invalidos.
    const invalid = [];
    const controls = this.form.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
  }
  setDataType(type: string) {
    let data;
    switch (type) {
      case 'client':
        data = new Client(this.form.value.name, this.form.value.lastname, null, null, null );
        break;
      case 'producer':
        data = new Producer(this.form.value.name, this.form.value.lastname, null, null );
      break;
    }
    return data;
  }

}
