import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
      HeaderComponent,
      SidebarComponent,
      BreadcrumbsComponent,
    ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ]
})
export class PagesSharedModule { }
