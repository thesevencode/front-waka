import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterBodyPersonComponent } from './register-body-person/register-body-person.component';
import { RegisterBodyCompanyComponent } from './register-body-company/register-body-company.component';

const register_routes: Routes = [
  { path: 'person', component: RegisterBodyPersonComponent },
  { path: 'company', component: RegisterBodyCompanyComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(register_routes)
  ],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
