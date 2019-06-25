import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', component: RegisterComponent, loadChildren: './register/register.module#RegisterModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
