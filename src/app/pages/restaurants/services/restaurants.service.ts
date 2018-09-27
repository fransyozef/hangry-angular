import { Injectable } from '@angular/core';

import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private items: Restaurant[] = [];

  constructor() { 
    this.createDummy();
  }

  getItems(): Restaurant[] {
    return this.items;
  }

  createDummy(): Restaurant[] {
    this.items.push(new Restaurant(1 , 'Restaurant 1'));
    this.items.push(new Restaurant(2 , 'Restaurant 2'));
    this.items.push(new Restaurant(3 , 'Restaurant 3'));

    return this.items;
  }

  get(id: number): Restaurant  {
    if (this.items.length > 0) {
      const index1  = this.items.findIndex((element) => {
        return element.id === id;
      });
      if (index1 >= 0 ) {
        return this.items[index1];
      }
    } else {
      return null;
    }
    return null;
  }

  add(data): Restaurant {

    if (data) {
      const id  = Math.floor(Math.random() * 1000) + 100;
      const restaurant  = new Restaurant(id, data['name']);
      this.items.push(restaurant);
      return restaurant;
    }

    return null;
  }

}
