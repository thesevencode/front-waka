import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';



@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    TopbarComponent,
    NavbarComponent,
    BottombarComponent
  ],
  exports: [
    TopbarComponent,
    NavbarComponent,
    BottombarComponent
  ]
})
export class SharedModule { }
