import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Restaurant } from '../restaurants/_models/restaurant.model';
import { RestaurantsService } from './../restaurants/_services/restaurants.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit, OnDestroy {

  private route_subscription: any;

  id: number = null;

  restaurant: Restaurant = null;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.route_subscription = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.restaurant  = this.restaurantsService.get(this.id);
        // console.log(this.restaurant);
      }
   });
  }

  delete() {
    this.restaurantsService.delete(this.id).subscribe(
      (status) => {
        if (status === true) {
          this.router.navigate(['/restaurants']);
        }
      }
    );
  }


  ngOnDestroy() {
    this.route_subscription.unsubscribe();
  }

}
