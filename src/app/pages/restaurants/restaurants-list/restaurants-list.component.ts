import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../_models/restaurant.model';
import { RestaurantsService } from './../_services/restaurants.service';


@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    this.restaurants = this.restaurantsService.getItems();
    // console.log(this.restaurants);
  }

}
