import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const login_routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(login_routes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
