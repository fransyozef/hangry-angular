import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },

    { path: 'restaurant/:id', component: RestaurantComponent },
    { path: 'restaurants', component: RestaurantsComponent },

    { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },

];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
