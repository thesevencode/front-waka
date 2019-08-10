import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, loadChildren: './home/home.module#HomeModule' },
  { path: '', component: PagesComponent, loadChildren: './pages/pages.module#PagesModule' },
  { path: 'activate/:token', component:  ActivateAccountComponent},
  { path: '**', component:  NoPageFoundComponent}
];

export const app_routes = RouterModule.forRoot(routes, {
    useHash: true,
  });
