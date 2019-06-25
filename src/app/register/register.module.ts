import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterBodyPersonComponent } from './register-body-person/register-body-person.component';
import { RegisterBodyCompanyComponent } from './register-body-company/register-body-company.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  declarations: [
    RegisterBodyPersonComponent,
    RegisterBodyCompanyComponent,
  ]
})
export class RegisterModule { }
