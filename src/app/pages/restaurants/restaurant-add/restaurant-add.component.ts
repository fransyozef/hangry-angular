import { RestaurantsService } from './../services/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
export class RestaurantAddComponent implements OnInit {

  addRestaurantForm: FormGroup;

  constructor(
    private restaurantsService: RestaurantsService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addRestaurantForm = new FormGroup({
      name: new FormControl('' , Validators.required)
    });
  }

  add() {
    if(this.addRestaurantForm.valid) {
      this.restaurantsService.add(this.addRestaurantForm.value);
      this.addRestaurantForm.get('name').patchValue('');
    }
  }
}
