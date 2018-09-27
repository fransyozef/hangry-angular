import { RestaurantsService } from './../restaurants/services/restaurants.service';
import { Component, OnInit , OnDestroy } from '@angular/core';

// Models
import { Restaurant } from './../restaurants/models/restaurant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  private route_subscription: any;

  id: number = null;

  restaurant: Restaurant = null;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.restaurant  = this.restaurantsService.get(1);
    // console.log(this.restaurant);

    this.route_subscription = this.route.params.subscribe(params => {
      if(params['id']) {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.restaurant  = this.restaurantsService.get(this.id);
        console.log(this.restaurant);
      }
   });

  }

  ngOnDestroy() {
    this.route_subscription.unsubscribe();
  }  

}
