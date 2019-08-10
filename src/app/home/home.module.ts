import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ErrorsComponent } from '../components/errors/errors.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HOME_ROUTES } from './home-routing';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HOME_ROUTES
  ],
  declarations: [
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    // ActivateAccountComponent,
    ErrorsComponent
  ],
  exports: [
  ]
})
export class HomeModule { }
