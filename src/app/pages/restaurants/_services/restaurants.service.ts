import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { Restaurant } from '../_models/restaurant.model';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private items: Restaurant[] = [];

  constructor(
    private http: HttpClient,
  ) {
  }

  fetch(): Observable<any> {
    return this.http.get('/restaurants').pipe(
      map((data: Response) => {
        if (data && data['success'] && data['success'] === true) {
          data['result'].map((element) => {
            this.items.push(new Restaurant(element['id'] , element['name']));
          });
          return this.items;
        } else {
          return false;
        }
      }
    ));
  }

  getItems(): Restaurant[] {
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

  delete(id: number) {
    if (this.items.length > 0) {
      const index1  = this.items.findIndex((element) => {
        return element.id === id;
      });
      if (index1 >= 0 ) {
        this.items.splice(index1, 1);
        return true;
      }
    } else {
      return false;
    }
    return false;
  }

}
