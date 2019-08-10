import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TokenGuard } from '../services/service.index';



const pagesRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent,
    // canActivate: [TokenGuard]
    },
    { path: 'profile', component: ProfileComponent,
    // canActivate: [TokenGuard]
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];

export const pages_routes = RouterModule.forChild( pagesRoutes );
