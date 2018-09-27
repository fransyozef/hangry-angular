import { RestaurantsService } from './_services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(
    private restaurantsService: RestaurantsService,
  ) { }

  ngOnInit() {
    // this.restaurantsService.createDummy();
  }

}
