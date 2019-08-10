import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// rutas principales
import { app_routes } from './app-routing';

// modulo de servicios
import { ServiceModule } from './services/service.module';

// componentes principales
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './home/shared/shared.module';
import { PagesSharedModule } from './pages/shared/pagesShared.module';
import { PagesComponent } from './pages/pages.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';


@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent,
    HomeComponent,
    PagesComponent,
    ActivateAccountComponent
  ],
  imports: [
    BrowserModule,
    app_routes,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PagesSharedModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
