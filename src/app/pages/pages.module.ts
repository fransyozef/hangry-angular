import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantAddComponent } from './restaurants/restaurant-add/restaurant-add.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [DashboardComponent, RestaurantsComponent, RestaurantsListComponent, RestaurantComponent, RestaurantAddComponent]
})
export class PagesModule { }
