import { RestaurantsService } from './../../pages/restaurants/_services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private restaurantsService: RestaurantsService,
  ) { }

  ngOnInit() {
    this.restaurantsService.fetch().subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
