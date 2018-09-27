import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },

    { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },

];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
